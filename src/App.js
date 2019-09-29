import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import store from './store';
import WeatherCart from './components/weatherCart'

function App() {
    return (
      <Provider store={store}>
        <WeatherCart/>
      </Provider>
  );
}

export default App;
