const { ethers, run, network } = require("hardhat"); //isledii yupiiiii

async function main() {
  const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
  console.log("Deploying Contract...");

  const simpleStorage = await SimpleStorage.deploy();

  await simpleStorage.waitForDeployment();

  console.log(`Contract deployed to: ${simpleStorage.target}`);
  console.log(network.config);
  const deployTx = simpleStorage.deploymentTransaction();
  if (deployTx) {
    await deployTx.wait(6);
  }

  await run("verify:verify", {
    address: simpleStorage.target,
    constractorArguments: [],
  });
  //   if (network.config.chainId === 11155111 && process.env.ETHSCAN_API_KEY) {
  //     const deployTx = simpleStorage.deploymentTransaction();
  //     if (deployTx) {
  //       await deployTx.wait(6);
  //     }else{}
  //     await verify(simpleStorage.target, []);
  //     await run("verify:verify", {
  //          address : simpleStorage.target,
  //         constractorArguments: [],
  //        });
  //   };

  const currentValue = await simpleStorage.retrieve();
  console.log(`Current value is: ${currentValue}`);
  const transactionResponse = await simpleStorage.store(7);
  await transactionResponse.wait(1);
  const updatedValue = await simpleStorage.retrieve();
  console.log(`Updated value is: ${updatedValue}`);
  // }

  // async function verify(contractAddress, args){
  //   console.log("Verifying contract...");
  //   try {
  //   await run("verify:verify", {
  //     contractAddress : simpleStorage.target,
  //    constractorArguments: args,
  //   })
  // } catch(e) {
  //   if(e.message.includes("alredy verified")){
  //     console.log("Alredy verified!")
  //   }else{
  //     console.log(e)
  //   }
  // }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
