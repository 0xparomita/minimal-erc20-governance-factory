const { ethers } = require("ethers");
require("dotenv").config();

async function main() {
    const RPC_URL = process.env.RPC_URL;
    const PRIVATE_KEY = process.env.PRIVATE_KEY;
    
    const provider = new ethers.JsonRpcProvider(RPC_URL);
    const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

    // Mock ABI and Bytecode (In a real scenario, use artifacts from Hardhat/Foundry)
    const abi = [ /* Compiled ABI here */ ];
    const bytecode = "0x..."; 

    const TokenFactory = new ethers.ContractFactory(abi, bytecode, wallet);

    console.log("Deploying Governance Token...");
    const token = await TokenFactory.deploy(
        "Governance Protocol", 
        "GOV", 
        1000000, // 1 Million tokens
        wallet.address
    );

    await token.waitForDeployment();
    console.log(`Token Deployed to: ${await token.getAddress()}`);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
