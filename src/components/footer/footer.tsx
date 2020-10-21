import React from 'react';
import {PrimaryButton} from '@fluentui/react';

const Footer: React.FunctionComponent = () => {

  const style : React.CSSProperties = {
    margin: 0, 
    backgroundColor: "#333", 
    color:"#fff", 
    borderTop: "2px solid #eee", 
  }

  const wrapper : React.CSSProperties = {
    boxSizing: "border-box",
    display: "flex",
    minHeight: "40vh",
    width: "100%",
  }

  const content : React.CSSProperties = {
    margin: "auto",
    textAlign: "center",
    zIndex: 2
  }

  const navigation : React.CSSProperties = {
    padding: "2px 10%", 
    textAlign: "center"
  }


  return (
    <footer style={style}>
      <div style={wrapper}>
        <div style={content}>
          <h1 className="footer-call-to-action">Start Building Today?</h1>
          <PrimaryButton text="Make the call" href="tel:+2638644241936"/>
        </div>
      </div>
    </footer>
  )
}

export default Footer;