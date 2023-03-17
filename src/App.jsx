import React from 'react';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import FinancialForm from './components/FinancialForm';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <div>
      <LandingPage/>
      <AboutUs/>
      <Services/>
      <FinancialForm/>
      <Footer/>
    </div>
  );
}

export default App;
