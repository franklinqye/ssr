import React from 'react';
import '../custom.scss';
import { Header, CallToAction, ListBlock, PageTemplate } from '../Components';



export default function Home() {
  return (
    <PageTemplate
      theme="primary"
      >
      <Header 
        title="Scientific, Safety & Regulatory Affairs Consulting" 
        theme="primary"
        />

      <CallToAction 
        title="Providing Professional, Scientific Consulting Services Since 2011"
        displayType="contactInfo"
        theme="secondary"
        >
        SSR Supports has the expertise to prepare your company for full compliance to the regulations imposed by US and European regulatory authorities. We provide quality services for both drug and medical device developers from product design, confirmation, validation, registration to post-market surveillance. Our goals are to save time and money for mature and larger device and drug companies, and to guide less mature and smaller companies through all the regulatory pathways to product registration. <br/>
      </CallToAction>

      <ListBlock 
        title="Available Services"
        dataSource="availableServices"
        maxLength={3}
        maxLengthLink={'/available-services'}
        theme="accent"
        />

      <CallToAction 
        title="Get in Touch"
        buttonTitle="Contact Us"
        buttonDest="/contact-us"
        theme="secondary"
        />
    </PageTemplate>
  );
}
