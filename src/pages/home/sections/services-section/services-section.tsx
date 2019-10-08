import React from 'react';
import ServicesBlob from './blob';
import './services-section.css'

const ServicesSection: React.FunctionComponent = () => {
  return (
    <section className="services-component">
    <div className="services-wrapper wrapper">
      <div className="services-grid-item">
        <h1 className="section-heading">Join several organisations that already trust us</h1>
      </div>
      <div className="services-grid-item">
        <ServicesBlob/>
      </div>   
    </div>
  </section>
  )
}

export default ServicesSection;