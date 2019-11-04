import React from 'react';
import ServicesBlob from './blob';
import './services-section.css';
import infrastructure from './infrastructure.svg';
import design from './design.svg';
import dns from './dns.svg';
import analytics from './analytics.svg';
import softwaredev from './dev.svg';
import seo from './seo.svg';

const ServicesSection: React.FunctionComponent = () => {
  return (
    <section className="services-component">
      <div className="services-wrapper">
        <div className="services-grid-item">
          <div className="services-grid-wrapper">
            <h1 className="section-heading">End to End Software Services </h1>
            <p>Reinvent the way your organisation operates. Put software at the core of this reinvention with the assurance of years of experience to get you started and keep you going.</p>
            <p>Make innovation a continous process for your organisation, leverage on knowledge that is driving many organisations to meet their objectives with greater efficiency</p>
            <p>Realise real value from your investment in software to discover business insights to empower your decision-making.</p>
            <a className="action-button" href="mailto:info@devshop.co.zw">Contact Us</a>
          </div>
        </div>
        <div className="services-grid-item">
          <ServicesBlob />
        </div>
      </div>
      <div className="services-details-wrapper">
        <div className="services-card">
          <div>
            <div className="services-icon-container">
              <img className="services-icon" src={design} alt="" />
            </div>
            <h3>Software Design</h3>
            Transform business process into software solutions that makes the best of the practise you have masterd over time. 
          </div>
          <div>
            <div className="services-icon-container">
              <img className="services-icon" src={softwaredev} alt="" />
            </div>
            <h3>Software Development</h3>  
            Business processes delivered through quality and efficient software solution. Stand on the shoulders of years of experience and reliable delivery.
            </div>
          <div>
          <div className="services-icon-container">
              <img className="services-icon" src={infrastructure} alt="" />
            </div>
            <h3>Managed Infrastructure</h3>  
            Develop applications without concering yourself with the overhead associated with infrastructure provisioning and management.
            </div>
            <div>
            <div className="services-icon-container">
              <img className="services-icon" src={seo} alt="" />
            </div>
            <h3>Search Optimisation</h3>
            Be at the forefront of the conversations and reach potential customers and clients ahead of your competitors. 
          </div>
          <div>
            <div className="services-icon-container">
              <img className="services-icon" src={dns} alt="" />
            </div>
            <h3>DNS Management</h3>  
            Improve perfomance and uptime of your global software services to ensure they are always available when needed.
            </div>
          <div>
          <div className="services-icon-container">
              <img className="services-icon" src={analytics} alt="" />
            </div>
            <h3>Software Consultancy</h3>  
             Leverage on a wealth of experience in key  areas to make the most of your investment in software solutions.
            </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection;