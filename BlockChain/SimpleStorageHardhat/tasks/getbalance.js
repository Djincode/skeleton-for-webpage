const { ethers } = require("ethers");
const { task } = require("hardhat/config");

task("balance", "Prints current balance of account")
 .addParam("account", "account's address")
 .setAction(async (taskArgs)=>{
    const balance = await (taskArgs.account);

    console.log(ethers.formatEther(balance), "ETH");
    
 });