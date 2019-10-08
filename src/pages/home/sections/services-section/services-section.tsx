import React from 'react';
import ServicesBlob from './blob';
import './services-section.css';
import mobile from './mobile.svg';
import infrastructure from './infrastructure.svg';

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
              <img className="services-icon" src={mobile} alt="" />
            </div>
            <h3>Software Design and Development</h3>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo
          </div>
          <div>
            <div className="services-icon-container">
              <img className="services-icon" src={infrastructure} alt="" />
            </div>
            <h3>Server and Cloud Migration</h3>  
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo
            </div>
          <div>
          <div className="services-icon-container">
              <img className="services-icon" src={infrastructure} alt="" />
            </div>
            <h3>Infrastructure Management</h3>  
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo
            </div>
            <div>
            <div className="services-icon-container">
              <img className="services-icon" src={mobile} alt="" />
            </div>
            <h3>Hosting and Cloud Services</h3>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo
          </div>
          <div>
            <div className="services-icon-container">
              <img className="services-icon" src={infrastructure} alt="" />
            </div>
            <h3>DNS Management</h3>  
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo
            </div>
          <div>
          <div className="services-icon-container">
              <img className="services-icon" src={infrastructure} alt="" />
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