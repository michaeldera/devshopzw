import React from 'react';
import Header from '../../components/header/header';
import Navigation from '../../components/navigation/navigation';


const Home: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <Header/>
      <Navigation/>
      <div style={{height: "200vh"}}></div>
    </React.Fragment>
  );
}

export default Home;
