module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    mainnet: {
      host: "localhost",
      port: 8545,
      from: "0x5d6746f7d97670CFeF6007e065745c9E104b9755",	    
      gas: 4000,
      network_id: "*" // Match any network id,
    },
    live: {
      host: "localhost",
      port: 8545,
      gas: 500000,
      gasPrice: 18000000000,
      from: "0x5d6746f7d97670CFeF6007e065745c9E104b9755",	    
      network_id: 1        // Ethereum public network
    }

  }
};
