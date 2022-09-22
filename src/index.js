import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Material/App';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
// import { BrowserRouter } from 'react-router-dom';
import common_vn from "../src/Material/lang/vn";
import common_en from "../src/Material/lang/en";

i18next.init({
  interpolation: { escapeValue: false },  // React already does escaping
  lng: 'en',                              // language to use
  resources: {
    en: {
      common: common_en               // 'common' is our custom namespace
    },
    vn: {
      common: common_vn
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    {/* </BrowserRouter> */}
  </React.StrictMode >,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();