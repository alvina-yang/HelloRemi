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
import SignInPatient from './pages/patient/SignInPatient';
import PatientHomePage from './pages/patient/PatientHomePage';
import MemberProfilePage from './pages/patient/MemberProfilePage';
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
        <Route path="/signin-patient" element={<SignInPatient />}/>
        <Route path="/patient-home" element={<PatientHomePage/>}/>
        <Route path="/member-profile" element={<MemberProfilePage />} />
        <Route path="*" element={<SignIn />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
