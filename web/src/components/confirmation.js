import Box from '@mui/material/Box';

export const TransactionResult = (props) => {
  return (
    <div className="appWrapper">
        <Box sx={{ textAlign:"left", marginBottom:"3em"}}>
            <div className="mainTitle">Success!</div>

            <span className="infoText">Your NFTs were minted.<br/><br/><br/></span>
            <span className="infoText">Welcome to the Order of Omakase<br/></span>
        </Box>
    </div>
  );
};