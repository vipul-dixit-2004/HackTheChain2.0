# Crypto F.I.R.

## Blockchain-based Secure Storage for First Investigation Reports

## Problem:

India’s digitalization has led to a shift from traditional manual systems to a centralized online process for registering complaints, but the security of the First Information Report (FIR) system remains a critical concern. This project proposes a solution that leverages blockchain technology to enhance the security of FIRs, addressing the need for a more secure, traceable, and chronological record-keeping system.

## How it goes:

1. The FIR form when filled converts the input values into a json format and then converts it to an encrypted string using the local api created.

2) This encrypted text is then stored in the BlockChain deployed on local BlockChain created by Ganache by using Remix IDE.
3) We have used MetaMask wallet to use the account of blockchain to sign and do the transactions.
4) "Ethers" module is used for communication with the smart contract.

## How to setup:

The repository have two folders backend and front-end. 1. First run the following commands to install the dependencies
`  cd backend
 `
`npm install`
`cd front-end`
again run the `npm install` command in front-end folder 2. Now set up Ganache, install it and then run the server 3. Deploy the smart contract using Remix.IDE 4. Use Dev Ganache Provider and enter the RPC Server 5. Back to the main dir run the backend server using `node app.js` and client application using `npm run dev`
Note: make sure you have metamask installed.

## Text Tech:

1. HTML ,CSS and Java Script
2. Soliditiy
3. NodeJS Express and React
4. Meta-mask crypto wallet extension
5. Genache
6. Remix-IDE

## Contributors:

1. Vipul Dixit
2. Gurnish singh
3. Raj Singhal
4. Harsh Raj
