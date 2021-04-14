import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Container/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import axios from 'axios'

axios.defaults.baseURL="http://localhost:3000/";

axios.interceptors.request.use(function(config){

        const token = localStorage.getItem('token') || null
        if(token){
            config.headers.Authorization = token
        }
        return config;
        },function(error){

        return Promise.reject(error)
})


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
