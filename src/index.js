import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './index.css';

import { getChainOptions, WalletProvider } from '@terra-money/wallet-provider';

const TWITTER_HANDLE = 'hashequilibrium';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

getChainOptions().then((chainOptions) => {
  console.log(chainOptions)
  ReactDOM.render(
    <React.StrictMode>
      <WalletProvider {...chainOptions}>
        <div className="App-header">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />} />
            </Routes>
          </BrowserRouter>

          <div className="footer-container">
            <img
              alt="Twitter Logo"
              className="twitter-logo"
              src="/twitter-logo.svg"
            />
            <a
              className="footer-text"
              href={TWITTER_LINK}
              target="_blank"
              rel="noreferrer"
            >{`Made by @${TWITTER_HANDLE}`}</a>
          </div>
        </div>
        </WalletProvider>
    </React.StrictMode>,
    document.getElementById('root')
  );
});