const hre = require("hardhat");

async function main() {
  const FanToken = await hre.ethers.deployContract("FanToken");

  await FanToken.waitForDeployment();

  console.log(
    `FanToken with ETH and unlock timestamp deployed to ${FanToken.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
