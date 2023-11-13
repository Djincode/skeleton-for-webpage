require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

require("@nomicfoundation/hardhat-verify");


/** @type import('hardhat/config').HardhatUserConfig */

const SEPOLIA_URL = process.env.SEPOLIA_RPC_URL
const PRIVATE_KEY = process.env.SEPOLIA_PRIVATE_KEY
const API_KEY = process.env.ETHSCAN_API_KEY


module.exports = {
  networks: {
    sepolia: {
      url: SEPOLIA_URL,
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
    },
  },
  sourcify: {
    enabled: true,
  },
  solidity: "0.8.19",
  etherscan: {
    apiKey : API_KEY,
  },
};

task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

task("balance", "Prints an account's balance")
.add
.setAction(async () => {

});
