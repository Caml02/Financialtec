import React from 'react';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import FinancialForm from './components/FinancialForm';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <div>
      <NavigationBar/>
      <AboutUs/>
      <Services/>
      <FinancialForm/>
      <Footer/>
    </div>
  );
}

export default App;
