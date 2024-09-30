import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IntlProvider } from 'react-intl';
import localEnMessages from './locales/en';
import localEsMessages from './locales/es.json';

const root = ReactDOM.createRoot(document.getElementById('root'));

const userLang = navigator.language 
const messages = userLang === "en" ? localEnMessages : localEsMessages;

root.render(
    <IntlProvider locale={userLang} messages={messages}>
        <App />
    </IntlProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
