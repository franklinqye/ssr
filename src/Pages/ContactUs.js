import React from 'react';
import '../custom.scss';

import { Header, CallToAction, PageTemplate } from '../Components';


export default function ContactUs() {
  return (
    <PageTemplate
      theme="primary"
      >
      <Header 
        title="Contact us."
        theme="primary"
        />
      <CallToAction 
        displayType="contactForum"
        theme="secondary"
        >
        <p className="mb-5">
          Reach out with any questions and learn how SSR Supports can help your company save time and money. 
        </p>
        {/*<ContactBlock />*/}
      </CallToAction>
    </PageTemplate>
  );
}
