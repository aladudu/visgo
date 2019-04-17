import React ,{Fragment}from 'react';
import ReactDOM from 'react-dom';
import {GlobalStyle} from "./reset";
import App from './App';


ReactDOM.render(
    <Fragment>
        <App />
        <GlobalStyle/>
    </Fragment>
    
, document.getElementById('root'));


