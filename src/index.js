import React from 'react';
import ReactDOM from 'react-dom/client';
import HumanTwo from './HumanTwo';
import HumanOne from './HumanOne';
import HumanThree from './HumanThree';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HumanOne/>
    <HumanTwo/>
    <HumanThree/>
  </React.StrictMode>
);


