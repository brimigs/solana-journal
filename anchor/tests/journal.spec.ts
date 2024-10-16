import * as anchor from '@coral-xyz/anchor';
import { Program } from '@coral-xyz/anchor';
import { Keypair } from '@solana/web3.js';
import { Journal } from '../target/types/journal';
describe('journal', () => {
  // Configure the client to use the local cluster.
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);
  const payer = provider.wallet as anchor.Wallet;
  const owner = provider.wallet.publicKey;
  const program = anchor.workspace.Journal as Program<Journal>;

  const journalKeypair = Keypair.generate();

  it("Creates a journal entry", async () => {
    const title = "Test Title";
    const message = "Test Message";

    const [journalEntryPda] = anchor.web3.PublicKey.findProgramAddressSync(
      [Buffer.from(title), provider.wallet.publicKey.toBuffer()],
      program.programId
    );

    const tx = await program.methods
      .createJournalEntry(title, message)
      .accounts({
        journalEntry: journalEntryPda,
        owner: provider.wallet.publicKey,
        systemProgram: anchor.web3.SystemProgram.programId,
      })
      .rpc();

    // Fetch the created account
    const journalEntry = await program.account.journalEntryState.fetch(journalEntryPda);

    expect(journalEntry.owner.toString()).toStrictEqual(provider.wallet.publicKey.toString());
    expect(journalEntry.title).toStrictEqual(title);
    expect(journalEntry.message).toStrictEqual(message);



  });
  it("Updates a journal entry", async () => {
    const title = "Update Test";
    const originalMessage = "Original Message";
    const updatedMessage = "Updated Message";

    const [journalEntryPda] = anchor.web3.PublicKey.findProgramAddressSync(
      [Buffer.from(title), owner.toBuffer()],
      program.programId
    );

    // First, create the entry
    await program.methods
      .createJournalEntry(title, originalMessage)
      .accounts({
        journalEntry: journalEntryPda,
        owner: owner,
        systemProgram: anchor.web3.SystemProgram.programId,
      })
      .rpc();

    // Now, update it
    await program.methods
      .updateJournalEntry(title, updatedMessage)
      .accounts({
        journalEntry: journalEntryPda,
        owner: owner,
        systemProgram: anchor.web3.SystemProgram.programId,
      })
      .rpc();

    // Fetch the updated account
    const journalEntry = await program.account.journalEntryState.fetch(journalEntryPda);

    expect(journalEntry.message).toStrictEqual(updatedMessage);
  });
});