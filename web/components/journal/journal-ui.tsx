'use client';

import { Keypair, PublicKey } from '@solana/web3.js';
// import { useMemo } from 'react';
import { ellipsify } from '../ui/ui-layout';
import { ExplorerLink } from '../cluster/cluster-ui';
import {
  useJournalProgram,
  useJournalProgramAccount,
} from './journal-data-access';
import { useWallet } from '@solana/wallet-adapter-react';

export function JournalCreate() {
  const { createEntry } = useJournalProgram();
  const { publicKey } = useWallet();


  if (!publicKey){
    return <p>Connect your wallet</p>
  }

  return (
    <button
      className="btn btn-xs lg:btn-md btn-primary"
      onClick={() => createEntry.mutateAsync(publicKey)}
      disabled={createEntry.isPending}
    >
      Create Journal Entry {createEntry.isPending && '...'}
    </button>
  );
}


export function JournalList() {
  const { accounts, getProgramAccount } = useJournalProgram();

  if (getProgramAccount.isLoading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  if (!getProgramAccount.data?.value) {
    return (
      <div className="flex justify-center alert alert-info">
        <span>
          Program account not found. Make sure you have deployed the program and
          are on the correct cluster.
        </span>
      </div>
    );
  }
  return (
    <div className={'space-y-6'}>
      {accounts.isLoading ? (
        <span className="loading loading-spinner loading-lg"></span>
      ) : accounts.data?.length ? (
        <div className="grid gap-4 md:grid-cols-2">
          {accounts.data?.map((account) => (
            <JournalCard
              key={account.publicKey.toString()}
              account={account.publicKey}
            />
          ))}
        </div>
      ) : (
        <div className="text-center">
          <h2 className={'text-2xl'}>No accounts</h2>
          No accounts found. Create one above to get started.
        </div>
      )}
    </div>
  );
}

function JournalCard({ account }: { account: PublicKey }) {
  const {
    accountQuery,
    updateEntry, 
    deleteEntry
  } = useJournalProgramAccount({ account });

  return accountQuery.isLoading ? (
    <span className="loading loading-spinner loading-lg"></span>
  ) : (
    <div className="border-4 card card-bordered border-base-300 text-neutral-content">
      <div className="items-center text-center card-body">
        <div className="space-y-6">
          <h2
            className="justify-center text-3xl cursor-pointer card-title"
            onClick={() => accountQuery.refetch()}
          >
            title here
            {/* {title} */}
          </h2>
          <div className="justify-around card-actions">
            <button
              className="btn btn-xs lg:btn-md btn-outline"
              onClick={() => updateEntry.mutateAsync()}
              disabled={updateEntry.isPending}
            >
              Update Journal Entry
            </button>
            {/* <button
              className="btn btn-xs lg:btn-md btn-outline"
              onClick={() => {
                const title = window.prompt(
                  'Set title to:',
                  title.toString() ?? '0'
                );
                return setMutation.mutateAsync(parseInt(value));
              }}
              disabled={setMutation.isPending}
            >
              Set
            </button>
            <button
              className="btn btn-xs lg:btn-md btn-outline"
              onClick={() => decrementMutation.mutateAsync()}
              disabled={decrementMutation.isPending}
            >
              Decrement
            </button> */}
          </div>
          <div className="space-y-4 text-center">
            <p>
              <ExplorerLink
                path={`account/${account}`}
                label={ellipsify(account.toString())}
              />
            </p>
            <button
              className="btn btn-xs btn-secondary btn-outline"
              onClick={() => {
                if (
                  !window.confirm(
                    'Are you sure you want to close this account?'
                  )
                ) {
                  return;
                }
                return deleteEntry.mutateAsync();
              }}
              disabled={deleteEntry.isPending}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
