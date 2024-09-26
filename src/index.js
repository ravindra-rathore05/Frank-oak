import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './component/pages/Home';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import HomePageFinal from './component/pages/Home';
import Footer from './component/comon component/Footer';


let router = createBrowserRouter([

  {
    path: '/',
    element: <HomePageFinal/>
  },
  {
    path: '/footer',
    element: <Footer/>
  },
  

]) ;



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
   
  </React.StrictMode>
);


reportWebVitals();
