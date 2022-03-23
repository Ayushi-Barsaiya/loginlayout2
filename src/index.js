import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Students from './components/Students';
import AddStudents from './components/AddStudents';

const routing = (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/students" element={<Students />} />
      {/* <Route path="/viewStudents" element={<ViewStudents />} /> */}
      <Route path="/addStudents" element={<AddStudents />} />
    </Routes>
  </BrowserRouter>
)

ReactDOM.render(
  routing,
  document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
