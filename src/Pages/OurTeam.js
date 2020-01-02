import React from 'react';
import '../custom.scss';
import { ListBlock, PageTemplate } from '../Components';

export default function OurTeam() {
  return (
    <PageTemplate
      theme="primary"
      >
      <ListBlock 
        title="Our Team"
        dataSource="teamMembers"
        theme="primary"
        />
    </PageTemplate>
  );
}
