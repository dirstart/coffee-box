import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CoffeeGuide from './pages/CoffeeGuide';
import HealthProfile from './pages/HealthProfile';
import AskAI from './pages/AskAI';

function App() {
  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guide" element={<CoffeeGuide />} />
          <Route path="/profile" element={<HealthProfile />} />
          <Route path="/ai" element={<AskAI />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;