# Crypto token & ICO App

Cryptocurrency & ICO application on Ethereum

## Requirements

Install Ganache
https://www.trufflesuite.com/ganache

Install Solidity
```
npm install -g solc
```
```
brew tap ethereum/ethereum
```
```
brew install solidity
```

## Commands

Open Truffle console
```
truffle console
```

View accounts while inside Truffle console
```
web3.eth.accounts
```

Test token transfer while inside Truffle console
```
token.transfer(web3.eth.accounts[1])
```

Run Truffle test with event logging
```
truffle test --show-events
```
## TODO
Rename token

## References
https://github.com/ethereum/solidity
https://docs.soliditylang.org/en/latest/
https://github.com/dappuniversity/token_sale
https://www.youtube.com/watch?v=XdKv5uwEk5A

