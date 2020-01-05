import React from 'react';
import { Helmet } from "react-helmet";
import '../custom.scss';
import { ListBlock, PageTemplate } from '../Components';

export default function OurTeam() {
  return (
    <PageTemplate
      theme="primary"
      >
      <Helmet>
        <title>SSR Supports - Our Team</title>
      </Helmet>
      <ListBlock 
        title="Our Team"
        dataSource="teamMembers"
        theme="primary"
        />
    </PageTemplate>
  );
}
