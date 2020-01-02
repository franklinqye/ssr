import React from 'react';
import '../custom.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Header, ListBlock, PageTemplate } from '../Components';


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
