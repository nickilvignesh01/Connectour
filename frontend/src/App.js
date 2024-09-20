import './App.css';
import './Style.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Places from './pages/Places';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer';
import Package from './pages/Packages';
import Register from './pages/Register'; 
import Login from './pages/Login';
import GoogleSignIn from './pages/GoogleSignIn';
import Adminhome from './pages/AdminHome';
import Logout from './pages/Logout'; // Make sure the path is correct
import { GoogleOAuthProvider } from '@react-oauth/google';

const clientId = '178167574374-21n9nm6rv8qcbaoobtqdbum29c9ajpba.apps.googleusercontent.com'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <GoogleOAuthProvider clientId={clientId}>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/places" element={<Places />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/packages" element={<Package />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/googlesignin" element={<GoogleSignIn />} />
            <Route path="/admin-dashboard" element={<Adminhome />} />
            <Route path="/logout" element={<Logout />} /> {/* Add Logout route */}
          </Routes>
        </GoogleOAuthProvider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;