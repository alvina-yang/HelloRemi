import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import SignIn from './pages/SignIn';
import HomePage from './pages/HomePage';
import CreateAccount from './pages/CreateAccount';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="*" element={<SignIn />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
