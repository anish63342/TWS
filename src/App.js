import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Demo from './pages/demo';
import WhyUs from './pages/whyUs';
import PersonalStyling from './pages/personalStyling';
import EventStyling from './pages/eventStyling';
import WeddingStyling from './pages/weddingStyling';

// Combined component for the main page
const MainPage = () => {
  return (
    <>
      <Home />
      <About />
      <Services />
      <Demo />
      <WhyUs />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/personal-styling" element={<PersonalStyling />} />
          <Route path="/event-styling" element={<EventStyling />} />
          <Route path="/wedding-styling" element={<WeddingStyling />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
