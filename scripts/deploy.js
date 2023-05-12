const hre = require("hardhat");

async function main() {
  const MarketInteraction = await hre.ethers.getContractFactory("MarketInteraction");
  
  const marketInteraction = await MarketInteraction.deploy('0x0496275d34753A48320CA58103d5220d394FF77F') //AAVE v3 testnet pooladdress provider

  await marketInteraction.deployed();

  console.log("Market Interaction Loan Contract has been deployed!", marketInteraction.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
