import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashPage from './components/SplashPage';
import HomePage from './components/HomePage';
import Diseases from './components/Diseases';
import Hospitals from './components/Hospitals';
import Doctors from './components/Doctors';
import Appointment from './components/Appointment';
import About from './components/About';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import Settings from './components/Settings';
import PatientsList from './components/PatientsList';
import AddDoctor from './components/AddDoctor';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SplashPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/diseases" element={<Diseases />} />
          <Route path="/hospitals" element={<Hospitals />} />
          <Route path="/add-doctor" element={<AddDoctor />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/patients" element={<PatientsList />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;