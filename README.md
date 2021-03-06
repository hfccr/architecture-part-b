# Supply chain & data auditing

This repository containts an Ethereum DApp that demonstrates a Supply Chain flow between a Seller and Buyer. The user story is similar to any commonly used supply chain process. A Seller can add items to the inventory system stored in the blockchain. A Buyer can purchase such items from the inventory system. Additionally a Seller can mark an item as Shipped, and similarly a Buyer can mark an item as Received.

The DApp User Interface when running should look like...

![truffle test](images/ftc_product_overview.png)

![truffle test](images/ftc_farm_details.png)

![truffle test](images/ftc_product_details.png)

![truffle test](images/ftc_transaction_history.png)


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Please make sure you've already installed ganache-cli, Truffle and enabled MetaMask extension in your browser.

```
Give examples (to be clarified)
```

### Installing

A step by step series of examples that tell you have to get a development env running

Clone this repository:

```
git clone https://github.com/udacity/nd1309/tree/master/course-5/project-6
```

Change directory to ```project-6``` folder and install all requisite npm packages (as listed in ```package.json```):

```
cd project-6
npm install
```

Launch Ganache:

```
ganache-cli -m "spirit supply whale amount human item harsh scare congress discover talent hamster"
```

Your terminal should look something like this:

![truffle test](images/ganache-cli.png)

In a separate terminal window, Compile smart contracts:

```
truffle compile
```

Your terminal should look something like this:

![truffle test](images/truffle_compile.png)

This will create the smart contract artifacts in folder ```build\contracts```.

Migrate smart contracts to the locally running blockchain, ganache-cli:

```
truffle migrate
```

Your terminal should look something like this:

![truffle test](images/truffle_migrate.png)

Test smart contracts:

```
truffle test
```

All 10 tests should pass.

![truffle test](images/truffle_test.png)

In a separate terminal window, launch the DApp:

```
npm run dev
```
### Extra Libraries Used

* truffle-hdwallet-provider: HD Wallet-enabled Web3 provider. Use it to sign transactions for addresses derived from a 12-word mnemonic

### Rinkeby Setup

In order to deploy to a public network, a keys.json file needs to be created. This file will contain a mnemonic and the Infura project ID. A sample file keys.sample.json contains the format required for writing the keys.json file. keys.json is added to .gitignore and should not be committed as it contains the mnemonic for deriving the private keys.

### Rinkeby Deployment

This contract is deployed on the Rinkeby testnet at the addresss
0xa1c0588d8cc3cd301ca10799c2e198b97af09cc3.

Rinkeby deployments can be carried out using,

```bash
truffle migrate --network rinkeby
```
Rinkeby connection is provided by Infura.
To make your own Infura deployment, copy your
projectId from your Infura dashboard and add it to /project6/keys.json as the value for key 'infuraProjectId'.

## Built With

* [Ethereum](https://www.ethereum.org/) - Ethereum is a decentralized platform that runs smart contracts
* [IPFS](https://ipfs.io/) - IPFS is the Distributed Web | A peer-to-peer hypermedia protocol
to make the web faster, safer, and more open.
* [Truffle Framework](http://truffleframework.com/) - Truffle is the most popular development framework for Ethereum with a mission to make your life a whole lot easier.


## Project Plan

* Activity Diagram
![uml activity](uml/Coffee-Activity.png)
* State Diagram
![uml state](uml/Coffee-State.png)
* Sequence Diagram
![uml sequence](uml/Coffee-Sequence.png)
* Class Diagram
![uml class](uml/Coffee-Class.png)