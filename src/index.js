import React from 'react';
import ReactDom from 'react-dom';
import CounterApp from './CounterApp';
import '../src/index.css'





const divRoot = document.querySelector('#root');


ReactDom.render(<CounterApp  />, divRoot);