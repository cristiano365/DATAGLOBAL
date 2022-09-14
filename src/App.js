import React, {Component} from 'react';
import {Routes, Route} from 'react-router-dom';

import AllCountry from './components/allCountry/AllCountry';
import CountryInfo from './components/countryInfo/CountryInfo';

import './App.css';

export default class App extends Component{
  render() {
    return (
      <>
        <div className='header'>
          <div className='container'>
            <h1>Search country you want!</h1>
          </div>
        </div>
        <div className='container'>
          <Routes>
            <Route path='/' element={<AllCountry/>} />
            <Route path='/country/:countryName' element={<CountryInfo/>} />
          </Routes>
        </div>
      </>
    );
  }
}
