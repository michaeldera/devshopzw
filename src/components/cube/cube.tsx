import React, { CSSProperties } from 'react';
import "./cube.css";

const Cube = ( props: any) => {
  const { size, position, duration } = props;

  const face_one: CSSProperties = {
    width: size,
    height:size, 
    transform: `rotatex(90deg) translateX(0px) translateY(0px) translateZ(${size/2}px)`,
  }; 

  const face_two: CSSProperties = {
    width: size,
    height:size, 
    transform: `rotateY(-90deg) translateX(0px) translateY(0px) translateZ(${size/2}px)`,
  };

  const face_three: CSSProperties = {
    width: size,
    height:size,     
    transform: `translateX(0px) translateY(0px) translateZ(${size/2}px)`,
  };
  
  const face_four: CSSProperties = {
    width: size,
    height:size, 
    transform: `rotateY(90deg) translateX(0px) translateY(0px) translateZ(${size/2}px)`,
  
  }
  const face_five: CSSProperties = {
    width: size,
    height:size, 
    transform:`rotateY(180deg) translateX(0px) translateY(0px) translateZ(${size/2}px)`,
  
  }
  const face_six: CSSProperties = {
    width: size,
    height:size, 
    transform: `rotateX(-90deg) translateX(0px) translateY(0px) translateZ(${size/2}px)`,
  }
  
  const cubeStyle: CSSProperties = {
    width: size,
    height: size,
    animationDuration: duration,
  }

  return (
    <div className="cube-component">
      <div className="cube-wrapper" style={position}>
        <div className="cube" style={cubeStyle}>
          <div className="cube-face-one" style={face_one}></div>
          <div className="cube-face-two" style={face_two}></div>
          <div className="cube-face-three" style={face_three}></div>
          <div className="cube-face-four" style={face_four}></div>
          <div className="cube-face-five" style={face_five}></div>
          <div className="cube-face-six" style={face_six}></div>
        </div>
      </div>
    </div>
  )
}

export default Cube;