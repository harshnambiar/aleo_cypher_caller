const { Account, AleoKeyProvider, AleoNetworkClient, NetworkRecordProvider, ProgramManager, KeySearchParams} = await import('@aleohq/sdk');

const keyProvider = new AleoKeyProvider();
keyProvider.useCache(true);

// Create a record provider that will be used to find records and transaction data for Aleo programs
const networkClient = new AleoNetworkClient("https://api.explorer.aleo.org/v1");

// Use existing account with funds
const account = new Account({
    privateKey: process.env.PKEY,
});

const recordProvider = new NetworkRecordProvider(account, networkClient);

const params = {
  startHeight: 0,
  endHeight: 100,
  maxRecords: 10,
  programName: "cypher_nm01.aleo",
  recordName: "cyphers"
};


const unspent = true;
const nonces = [];
const records = await recordProvider.findRecords(
  unspent,
  nonces,
  params
);

console.log(records);