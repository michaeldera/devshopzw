import React from 'react';
import Header from '../../components/header/header';
import CustomersSection from './sections/customers-section/customers-section';
import Footer from '../../components/footer/footer';


const Home = () => {

  return (
    <React.Fragment>
      <Header/>
      <CustomersSection/>
      <div style={{height: "200vh"}}>
      </div>
      <Footer/>
    </React.Fragment>
  );
}

export default Home;