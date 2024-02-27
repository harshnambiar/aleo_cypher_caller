import { Account, AleoKeyProvider, AleoNetworkClient, NetworkRecordProvider, ProgramManager } from '@aleohq/sdk';

const account = new Account({
  privateKey: process.env.PKEY,
});

const nodeBaseUrl = `https://api.explorer.aleo.org/v1`;
const apiBaseUrl = `${nodeBaseUrl}/testnet3`;

const programId = "cypher_nm01.aleo";
const functionName = "initialize_account";
const keyProvider = new AleoKeyProvider();
keyProvider.useCache = true;
const networkClient = new AleoNetworkClient(nodeBaseUrl);
const recordProvider = new NetworkRecordProvider(account, networkClient);
const programManager = new ProgramManager(nodeBaseUrl, keyProvider, recordProvider);

// Here we call the program that verifies the mapping value
const tx_id = await programManager.execute({
    programName: programId,
    functionName: functionName,
    fee: 0.20,
    privateFee: false,
    inputs: []
});

const transaction = await programManager.networkClient.getTransaction(tx_id);
console.log(transaction);


