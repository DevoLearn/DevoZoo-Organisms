import React, { useState } from "react";
import { Button } from '@material-ui/core';
import { Container } from '@material-ui/core';
import ImgDropzone from './ImgDropzone';

import opensource from '../../public/open-source.png'
import online from '../../public/online.png'
import secure from '../../public/private.png'
import github from '../../public/github-logo.png'
import medium from '../../public/medium-logo.png'
import './Landing.css';


function IconTiles(props){
  return(
    <div className="IconTiles">
      <div className="IconWrapper">
        <img draggable="false" src={props.image} alt={props.alt} />
        <div className="IconLabel">
          {props.children}
        </div>
      </div>
    </div>
  );
}

function Social(props) {
  return(
    <div className="SocialIcons">
      <div className="SocialIcon" title={props.title}>
        <div className="ImageButton">
          <a href={props.link}>
            <img className="SocialImage" src={props.image} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Landing(){
  const [inProgress, setInProgress] = useState("Canceled");
  
  const handleGetStartedClick = () => {
    setInProgress("Inprogress");
  }

  return (
    <div className={"Landing " + inProgress}>
      <div className="LeftColumn">
        <div className="FeaturesTable">
            <IconTiles image={online} alt="online-icon" children="No installation, everything in your browser" />
            <IconTiles image={opensource} alt="open-source-icon" children="Open source and free to use under MIT license" />
            <IconTiles image={secure} alt="secure-icon" children="No Images are stored anywhere" />
        </div>
      </div>
      <div className="RightColumn">
        <div className="SocialWrapper">
          <Social title="View on GitHub" link="https://github.com/iammarco11" image={github} />
          <Social title="Read on medium" link="https://github.com/iammarco11" image={medium} />
        </div>
      </div>
    </div>
  );
}
