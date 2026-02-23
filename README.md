# Minimal ERC20 Governance Factory

An expert-level Ethereum development template for launching decentralized governance tokens. This repository utilizes the industry-standard OpenZeppelin libraries to ensure security and compatibility with DAOs (Decentralized Autonomous Organizations) like Tally or Snapshot.

## Technical Overview
* **Standard**: ERC20 with `ERC20Votes` and `ERC20Permit` extensions.
* **Governance**: Compatible with Governor Alpha/Bravo and OpenZeppelin Governor.
* **Architecture**: Flat file structure for rapid auditing and deployment.

## Deployment Guide
1. Install Hardhat or Foundry.
2. Update the `constructor` arguments in `GovernanceToken.sol`.
3. Deploy to Sepolia Testnet or Ethereum Mainnet using the provided scripts.

## Security Note
This code is based on OpenZeppelin v5.0.0. Ensure you perform a dedicated security audit before deploying to a production environment with significant TVL (Total Value Locked).
