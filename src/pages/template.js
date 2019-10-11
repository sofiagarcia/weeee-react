import React from 'react';
import { Header }  from '../components';


const PageTemplate = ({ children }) =>
  <div className="page">
    <Header />
    {children}
  </div>

export default PageTemplate
