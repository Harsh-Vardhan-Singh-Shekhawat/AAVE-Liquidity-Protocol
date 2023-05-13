require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks:{
    sepolia:{
      url: "https://eth-sepolia.g.alchemy.com/v2/3wiQzga-y-jvMTuBl_oKverlexc6kSp6",
      accounts:[`0x${process.env.PRIVATE_KEY}`]
    }
  }
};
