import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';


import { store } from './toolkit/store';

// ## Sentry Tracking ##
// import * as Sentry from "@sentry/react";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Provider store={store}>

      <HelmetProvider>
        <App />
      </HelmetProvider>

    </Provider>
  </StrictMode>

);
