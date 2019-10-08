import React from 'react';
import './customer-section.css';
import devshop from './logo.png';

export interface ICompanyCard {
  name: string;
  image : string;
}

export const CompanyCard = ( props: ICompanyCard) => {
  const { name, image,} = props;
  return (
    <div className="company-card">
      <img className="company-card-image" src={image} alt={ name + " logo"} />
    </div>
  )
}

const clients: ICompanyCard[] = [
  { name: "Lead Construction", image: devshop},
  { name: "MK Group", image: devshop},
  { name: "Devshop", image: devshop}
];

const CustomersSection: React.FunctionComponent = () => {
  return (
    <section className="customers-component">
    <div className="customers-wrapper wrapper">
      <h1 className="section-heading">You'll be in good company.</h1>
      <p>Many companies already trust the Devshop to deliver their software needs</p>
      <div className="customer-logos-grid">
        {clients.map( client => (
          <div key={client.name}  className="customers-grid-item">
            <CompanyCard {...client}/>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default CustomersSection;