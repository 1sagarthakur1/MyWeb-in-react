import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import App from './App';
// import First from './Pages/Home/First';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar/>
       {/* <First/> */}
       <App/>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
