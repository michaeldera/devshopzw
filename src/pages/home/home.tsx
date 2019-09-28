import React from 'react';
import Header from '../../components/header/header';
import CustomersSection from './sections/customers-section/customers-section';
import Footer from '../../components/footer/footer';
import Navigation from '../../components/navigation/navigation';


const Home = () => {

  return (
    <React.Fragment>
      <Header/>
      <Navigation/>
      <CustomersSection/>
      <div style={{height: "200vh"}}>
      </div>
      <Footer/>
    </React.Fragment>
  );
}

export default Home;