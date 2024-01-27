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
import CreateNewStory from './pages/CreateNewStory';
import EditStory from './pages/EditStory';
import CurrentStories from './pages/CurrentStories';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/create-new-story" element={<CreateNewStory />} />
        <Route path="/edit-story" element={<EditStory />} />
        <Route path="/current-stories" element={<CurrentStories />} />
        <Route path="*" element={<SignIn />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
