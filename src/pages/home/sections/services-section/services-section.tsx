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
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p>
            <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
            <p>Wed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
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
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo
          </div>
          <div>
            <div className="services-icon-container">
              <img className="services-icon" src={softwaredev} alt="" />
            </div>
            <h3>Software Development</h3>  
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo
            </div>
          <div>
          <div className="services-icon-container">
              <img className="services-icon" src={infrastructure} alt="" />
            </div>
            <h3>Server and Cloud</h3>  
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo
            </div>
            <div>
            <div className="services-icon-container">
              <img className="services-icon" src={seo} alt="" />
            </div>
            <h3>Search Optimisation</h3>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo
          </div>
          <div>
            <div className="services-icon-container">
              <img className="services-icon" src={dns} alt="" />
            </div>
            <h3>DNS Management</h3>  
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo
            </div>
          <div>
          <div className="services-icon-container">
              <img className="services-icon" src={analytics} alt="" />
            </div>
            <h3>Software Consultancy</h3>  
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo
            </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection;