import React, { useState } from "react";
import { Button } from '@material-ui/core';
import { Container } from '@material-ui/core';
import ImgDropzone from './ImgDropzone';
import HttpsIcon from '@material-ui/icons/Https';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import DvrIcon from '@material-ui/icons/Dvr';
import './Landing.css';


function IconTiles(){

  return (
  <div className="row">
        <div className="IconsTile">
          <div className="text">
          <AccountBalanceIcon fontSize="large" />
          <br />
          Open Source and free 
          <br />
          to use under MIT license
          </div>
        </div>
        <div className="IconsTile">
          <div className="text">
          <DvrIcon fontSize="large" />
          <br />
          No advanced installation,
          <br />
          just open browser
          </div>
        </div>
        <div className="IconsTile">
          <div className="text">
          <HttpsIcon fontSize="large" />
          <br />
          Images are not stored
          <br />
          anywhere
          </div>
        </div>
      </div>
  );
}

export default function Landing(){
  
  const [uploadDone, setUploadDone] = useState(false);
  
  const handleGetStartedClick = () => {
    setUploadDone(true)

  }

  return(
    <div className="container">
      <Container fixed>
        <IconTiles />
      </Container>
      <Button 
        component="label" 
        variant="contained" 
        color="primary" 
        onClick={handleGetStartedClick}>Get Started
        <input type="file" hidden />
      </Button>
      <ImgDropzone />
    </div>
  );
}