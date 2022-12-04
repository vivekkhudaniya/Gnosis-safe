require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  defaultNetwork : 'chiado',
  networks: {
    
    // gnosis: {
    //   url: 'https://rpc.gnosischain.com/',
    //   gasPrice: 1000000000,
    //   accounts: [process.env.PRIVATE_KEY],
      
    // },

    chiado: {
      url: 'https://rpc.chiadochain.net',
      gasPrice: 1000000000,
      accounts: {
        mnemonic: 'onion dish devote trouble denial demise laundry add repair dog wrist slight',
      },
    },
  },
};