import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App/App.js';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
TimeAgo.addDefaultLocale(en)

ReactDOM.render(
    <App></App>,
    document.querySelector('#root')
)