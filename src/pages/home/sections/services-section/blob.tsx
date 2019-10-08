import React, { CSSProperties } from 'react';
import bg from './collaborate.jpg'
import bgBlob from "./blob.svg"

const style: CSSProperties ={
  margin: 30, 
  display:"block"
}

const blobStyle: CSSProperties = {
  display:"block",
  position: "absolute",
  zIndex: -1,  
  height: "auto",
  width:"29rem",
  minWidth: 340,

}

const blobImage: CSSProperties ={
  display:"block",
  right:0,
  width:"26rem",
  minWidth: 300,
}


const ServicesBlob: React.FunctionComponent = () => {
  return (
    <div style={style} className="services-blob">
      <img style={blobStyle} src={bgBlob} alt=""/>
      <svg style={blobImage} viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="bg" patternUnits="userSpaceOnUse" x="350" y="280" width="700" height="500">
            <image href={bg} width="700" height="500" />
          </pattern>
        </defs>
        <g transform="translate(300,300)">
          <path fill="url(#bg)" d="M163.3,-164.9C196.4,-130.1,197.7,-65.1,199.1,1.4C200.5,67.9,202.1,135.8,168.9,174.3C135.8,212.8,67.9,221.9,-1.3,223.2C-70.5,224.5,-140.9,217.9,-189.4,179.4C-237.9,140.9,-264.5,70.5,-247.5,17C-230.5,-36.5,-170.1,-73.1,-121.6,-107.9C-73.1,-142.7,-36.5,-175.9,14.3,-190.1C65.1,-204.4,130.1,-199.8,163.3,-164.9Z" />
        </g>
      </svg>
    </div>

  )
}

export default ServicesBlob;