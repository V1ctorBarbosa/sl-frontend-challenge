import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { RelayEnvironmentProvider } from "react-relay";
import Environment from "./RelayEnvironment";


ReactDOM.render(
  <RelayEnvironmentProvider environment={Environment}>
    <Suspense fallback={<h1>Loading...</h1>}>
      <App />
    </Suspense>
  </RelayEnvironmentProvider>, 
  document.getElementById('root')
);
