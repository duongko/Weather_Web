import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WeatherHour from './LeftContent/WeatherHour';
import WeatherLeft from './LeftContent/WeatherLeft';
import WeatherRight from './conponent/RightContent/WeatherRight';
import Weather5days from './LeftContent/Weather5days';
import Weatherchart from './LeftContent/Weatherchart';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>



        <Route path="/" element={<App />} >
          <Route
            path="Weather-left"
            element={<WeatherLeft />}
          >

            <Route path="Weather-left/weatherhour" element={<WeatherHour />}>
              <Route path="Weather-left/weatherhour/Weather5days" element={<Weather5days />} />
              <Route path="Weather-left/weatherhour/Weatherchart" element={<Weatherchart />} />
              <Route index element={<Weatherchart />} />

            </Route>


          </Route >
          <Route
            path="weather-right"
            element={<WeatherRight />}
          />


        </Route >

      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
