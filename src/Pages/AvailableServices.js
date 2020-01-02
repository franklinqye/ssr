import React from 'react';
import '../custom.scss';
import { ListBlock, PageTemplate } from '../Components';


export default function AvailableServices() {
  return (
    <PageTemplate
      theme="secondary"
      >
      <ListBlock 
        title="Available Services"
        dataSource="availableServices"
        theme="secondary"
        />
    </PageTemplate>
  );
}
