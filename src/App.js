import './App.css';
import { base_api } from './constant'
import LatestUpdate from './components/latest-update/LatestUpdate';
import Navigation from './components/navigation/Navigation';
import React from 'react';
import StateDistrict from './components/state-district/StateDistrict';
import Footer from './components/footer/Footer';
import Credit from './components/credit/Credit';

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <div className="App container">
        <Credit />
        <LatestUpdate baseAPI={base_api} />
        <StateDistrict />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
