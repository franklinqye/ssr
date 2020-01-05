import React from 'react';
import { Helmet } from "react-helmet";
import '../custom.scss';
import { ListBlock, PageTemplate } from '../Components';


export default function AvailableServices() {
  return (
    <PageTemplate
      theme="secondary"
      >
      <Helmet>
        <title>SSR Supports - Available Services</title>
      </Helmet>
      <ListBlock 
        title="Available Services"
        dataSource="availableServices"
        theme="secondary"
        />
    </PageTemplate>
  );
}
