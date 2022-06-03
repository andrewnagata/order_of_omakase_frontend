require("dotenv").config();
const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);

const contractABI = require("../contract-abi.json");
const contractAddress = "0x2973c5b1A4443F28407e4326fAE50Fc3c2E37F55";

export const omakaseContract = new web3.eth.Contract(
  contractABI,
  contractAddress
);

export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      return addressArray[0];

    } catch (err) {
      return "";
    }
  } else {
    return "";
  }
};

export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (addressArray.length > 0) {
        return addressArray[0];
        
      } else {
        return "";
      }
    } catch (err) {
      return "";
    }
  } else {
    return "";
  }
};

export const mintPrice = async () => {
  const price = await omakaseContract.methods.price().call();
  return price;
}

export const totalSupply = async () => {
  const total = await omakaseContract.methods.totalSupply().call();
  return total;
}

export const maxTokens = async () => {
  const total = await omakaseContract.methods.MAX_TOKENS().call();
  return total;
}

export const purchase = async (address, count, eth_amount) => {
  console.log("Purchasing an Omakase for: %s", address);

  const transactionParameters = {
    to: contractAddress,
    from: address,
    value: eth_amount,
    data: omakaseContract.methods.purchase(count).encodeABI(),
  };
  
  try {
    const txHash = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    });
    return txHash;
  } catch (error) {
    return error;
  }
};
