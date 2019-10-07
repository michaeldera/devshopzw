import React from 'react';
import ServicesBlob from './blob';

const ServicesSection: React.FunctionComponent = () => {
  return (
    <section className="services-component">
    <div className="services-wrapper wrapper">
      
      <h1 className="section-heading">Join several organisations that already trust us</h1>
      <ServicesBlob/>
    </div>
  </section>
  )
}

export default ServicesSection;