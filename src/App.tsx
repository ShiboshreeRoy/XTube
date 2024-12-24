import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Sidebar from './components/Layout/Sidebar';
import Home from './pages/Home';
import Watch from './pages/Watch';
import Search from './pages/Search';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="pt-16 flex">
          <Sidebar />
          <main className="ml-64 flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/watch/:videoId" element={<Watch />} />
              <Route path="/search" element={<Search />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;