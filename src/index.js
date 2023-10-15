import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar/>
       <App/>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
