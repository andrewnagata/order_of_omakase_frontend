import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {connectWallet} from ".././util/interact.js";
import Omakase from '../OmakaseMint.js';

const connectWalletPressing = async () => {
  const walletResponse = await connectWallet();
  Omakase.setWallet(walletResponse.address);
};

export const WalletConnector = (props) => {
  return (
    <div className="appWrapper">
          <Box sx={{ textAlign:"left", marginBottom:"3em"}}>
            <div className="mainTitle">To get started, connect your wallet.</div>

            <span className="infoText"><br/>Use Metamask to mint your Omakase.<br/><br/></span>
            <span className="infoText">Make sure you are using the browser inside Metmask wallet.<br/></span>
          </Box>
          
          <Box sx={{ mt:6, textAlign:"left"}}>
            <Button
              variant="outlined"
              onClick={connectWalletPressing}
              style={{background: 'rgb(136, 167, 237, 0.55)',
                      borderColor: 'rgb(17, 84, 234, 0.25)',
                      color: 'rgb(17, 84, 234)'
                      }}
            >
              CONNET WALLET
            </Button>
          </Box>
        </div>
  );
};