const { ethers } = require('hardhat')

async function main() {
    const Storage = await ethers.getContractFactory("Storage");
    // Start deployment, returning a promise that resolves to a contract object
    const storage = await Storage.deploy();
    await storage.deployed();
    console.log("Deployed Contract:", storage.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })