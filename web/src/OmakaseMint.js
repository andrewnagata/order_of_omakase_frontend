import React, { useRef } from "react";
import { useEffect, useState } from "react";
import {
  omakaseContract,
  connectWallet,
  getCurrentWalletConnected,
  purchase,
  totalSupply,
  maxTokens,
  mintPrice
} from "./util/interact.js";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import axios from "axios";

require("dotenv").config();
const react_environ = process.env.REACT_APP_ENVIRONMENT;

const OmakaseMint = () => {
  //state variables
  const [walletAddress, setWallet] = useState("");
  const [minted_count, setMintedCount] = useState("");
  const [mint_price, setMintPrice] = useState(0);
  const [max_tokens, setMaxTokens] = useState("");
  const [progress, setProgress] = useState(false);
  const [activeComponent, setActiveComponent] = useState("");

  const txHash = useRef("");
  const signature = useRef("");

  //called only once
  useEffect(async () => {
    setProgress(false);

    const address = await getCurrentWalletConnected();
    setWallet(address);

    // Uncomment if pre-sale is active and we need to verify wallets
    //checkWhiteList(address);

    if(address.length > 0) {
      setActiveComponent("MINTING");
    } else {
      setActiveComponent("CONNECT_WALLET");
    }

    addWalletListener();

    const count = await totalSupply();
    setMintedCount(count);
    const tokens = await maxTokens();
    setMaxTokens(tokens);
    const price = await mintPrice();
    setMintPrice(price);

  }, []);

  function checkWhiteList(address) {
    var endpoint = process.env.REACT_APP_API_DEV_ENDPOINT;
    if(react_environ != process.env.REACT_APP_DEVELOPMENT) {
      endpoint = process.env.REACT_APP_API_PROD_ENDPOINT;
    }
    
    if(address.length > 0) {
      const full_path = endpoint.concat(address);
      
      axios.get(full_path).then(response => {
        console.log("Signature SUCCESS ", response);
        signature.current = response;
      }).catch(error => {
        console.log(error)
    })
    }
  }

  function addTransactionListener() {
  
    omakaseContract.events.Transfer({}, (error, data) => {
      if (data.returnValues["transactionHash"] == txHash.current) {
        setProgress(false);
        setActiveComponent("RESULTS");
      }
      if (error) {
        console.log(error.message);
      } else {
        
      }
    });
  }

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          setActiveComponent("MINTING");
        } else {
          setWallet("");
          setActiveComponent("CONNECT_WALLET");
        }
      });
    }
  }

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setWallet(walletResponse);
  };

  const mintPressed = async (count) => {
    setProgress(true);

    var eth_amount = count * mint_price
    txHash.current = await purchase(walletAddress, count, eth_amount.toString(16));

    if(txHash.current["code"] == 4001) {
      //There was an error, or user canceled the transaction
      setProgress(false);
    } else {
      addTransactionListener();
    }
  };

  function WalletConnect(props) {
    return (
      <div className="mint">
        <div className="anchor"></div>
        <div className="contentContainer">
          <h1>Mint</h1>
          <Button
              variant="outlined"
              onClick={connectWalletPressed}
              style={{minWidth:"140px",
                      minHeight:"40px",
                      borderRadius:"12px",
                      borderWidth:"1px",
                      textTransform:"none",
                      fontFamily:"Red Hat Display",
                      fontWeight:"500",
                      fontSize:"15pt",
                      background: '#3209AF',
                      borderColor: '#EBEAFB',
                      color: '#FFC107'
                      }}
            >Connect Wallet
            </Button>
          <p>Connect your Metamask wallet to mint.</p>
        </div>
       </div> 
    );
  }

  class MintForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      const val = event.target.value;
      if (!Number(val) && val != '') {
        return;
      }
      this.setState({value: val});
    }
  
    handleSubmit(event) {
      mintPressed(this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <div className="question">
            <input type="text" value={this.state.value} onChange={this.handleChange}/>
            <label>Quantity</label>
          </div>
          <button>Mint</button>
        </form>
      );
    }
  }

  function Minting(props) {
    
    return (
      <div className="mint">
        <div className="anchor"></div>
        <div className="contentContainer">
          <div className="inputContainer">
            <div className="inputTitle">Join the movement!</div>
            <div className="inputAddress">Connected: <span className="mintAddress"> {walletAddress.slice(0, 6)}...{walletAddress.slice(
                      walletAddress.length - 4,
                      walletAddress.length
                    )}</span></div>
            <div className="inputMinted">{minted_count} <span className="mintedText"> minted thus far</span></div>
            <div className="inputPrice">price: {mint_price / 10**18} <span className="inputCurrency"> ETH</span></div>
            <div className="inputQuantity"><MintForm /></div>
          </div>
        </div>
      </div>
    );
  }

  function Results(props) {
    return (
      <div>
          <div className="anchor"></div>
          <Box sx={{ textAlign:"left", marginBottom:"3em"}}>
            <div className="mainTitle">Success!</div>

            <span className="infoText">Your NFTs were minted.<br/><br/><br/></span>
            <span className="infoText">Welcome to the Order of Omakase<br/></span>
          </Box>
        </div>
    );
  }

  class Loading extends React.Component {
    render(){
      return(
        <div>
          <div className="overlay">
            <div id='outer'>
            <div id='middle'>
              <div id='inner'>   
              </div>
              </div>
              </div>
          </div>
          <div className="overlayBackground" />
        </div>
      );
    }
  }

  function SwitchComponents({ active, children }) {
    // Switch all children and return the "active" one
    return children.filter(child => child.props.name === active)
  }

  return (
    <div id="mint">
      <div className="mintContainer">
        {progress && ( <Loading /> )}
        <SwitchComponents active={activeComponent}>
          <WalletConnect name="CONNECT_WALLET" />
          <Minting name="MINTING" />
          <Results name="RESULTS" />
        </SwitchComponents>
      </div>
    </div>
  );
};

export default OmakaseMint;