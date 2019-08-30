import React from 'react';
import Header from '../../components/header/header';
import CustomersSection from './sections/customers-section/customers-section';


const Home: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <Header/>
      <CustomersSection/>
      <div style={{height: "200vh"}}></div>
    </React.Fragment>
  );
}

export default Home;
