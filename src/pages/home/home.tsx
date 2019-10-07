import React from 'react';
import Header from '../../components/header/header';
import CustomersSection from './sections/customers-section/customers-section';
import Footer from '../../components/footer/footer';
import ServicesSection from './sections/services-section/services-section';


const Home = () => {

  return (
    <React.Fragment>
      <Header/>
      <ServicesSection/>
      <CustomersSection/>
      <div style={{height: "200vh"}}>
      </div>
      <Footer/>
    </React.Fragment>
  );
}

export default Home;