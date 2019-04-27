const fs = require('fs');
const HDWalletProvider = require('truffle-hdwallet-provider');

let config;
try {
  const configFileBuffer = fs.readFileSync('./keys.json');
  config = JSON.parse(configFileBuffer.toString());
  console.log(config);
} catch (error) {
  console.log(
    `You can ignore this warning for local deployments.
    For testnet or mainnet deployments:
    keys.json might be absent or improperly configured.
    If using for the first time, copy keys.sample.json
    in a file called keys.json and add your secrets.
    Otherwise, all right, then. Keep your secrets.
    <insert_obligatory_lotr_meme>`
  );
  console.log(error);
}

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id,
      gas: 6721975,
      gasPrice: 100000000000
    },
    rinkeby: {
      provider: () => new HDWalletProvider(
        config.mnemonic,
        `https://rinkeby.infura.io/v3/${config.infuraProjectId}`
      ),
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000
    }
  }
};