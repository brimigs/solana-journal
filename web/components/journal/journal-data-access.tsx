'use client';

import { JournalIDL } from '@journal/anchor';
import { Program } from '@coral-xyz/anchor';
import { useConnection } from '@solana/wallet-adapter-react';
import { Keypair, PublicKey } from '@solana/web3.js';
import { useMutation, useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useCluster } from '../cluster/cluster-data-access';
import { useAnchorProvider } from '../solana/solana-provider';
import { useTransactionToast } from '../ui/ui-layout';


export function useJournalProgram() {
  const { connection } = useConnection();
  const { cluster } = useCluster();
  const provider = useAnchorProvider();
  const programId = new PublicKey("8sddtWW1q7fwzspAfZj4zNpeQjpvmD3EeCCEfnc3JnuP");
  const program = new Program(JournalIDL, programId, provider);

  const accounts = useQuery({
    queryKey: ['journal', 'all', { cluster }],
    queryFn: () => program.account.journalEntryState.all(),
  });

  const getProgramAccount = useQuery({
    queryKey: ['get-program-account', { cluster }],
    queryFn: () => connection.getParsedAccountInfo(programId),
  });

  const title = "title"; 
  const message = "message"; 

  const createEntry = useMutation({
    mutationKey: ['test', 'initialize', { cluster }],
    mutationFn: (keypair: Keypair) =>
      program.methods
        .createJournalEntry(title, message)
        .accounts({ journalEntry: keypair.publicKey! })
        .signers([keypair])
        .rpc(),
    onSuccess: (signature) => {
      transactionToast(signature);
      return accounts.refetch();
    },
    onError: () => toast.error('Failed to initialize account'),
  });


  return {
    program,
    programId,
    accounts,
    getProgramAccount,
    createEntry,
  };
}

export function useJournalProgramAccount({ account }: { account: PublicKey }) {
  const { cluster } = useCluster();
  const transactionToast = useTransactionToast();
  const { program, accounts } = useJournalProgram();

  const title = "My Journal Title";
  const message = "This is my journal entry message.";

  const accountQuery = useQuery({
    queryKey: ['journal', 'fetch', { cluster, account }],
    queryFn: () => program.account.journalEntryState.fetch(account),
  });

  const updateEntry = useMutation({
    mutationKey: ['journal', 'updateEntry', { cluster, account }],
    mutationFn: () =>
      program.methods.updateJournalEntry(title, message).accounts({ journalEntry: account }).rpc(),
    onSuccess: (tx) => {
      transactionToast(tx);
      return accounts.refetch();
    },
  });

  const deleteEntry = useMutation({
    mutationKey: ['journal', 'deleteEntry', { cluster, account }],
    mutationFn: () =>
      program.methods.deleteJournalEntry(title).accounts({ journalEntry: account }).rpc(),
    onSuccess: (tx) => {
      transactionToast(tx);
      return accounts.refetch();
    },
  });

  return {
    accountQuery,
    updateEntry, 
    deleteEntry
  };
}
