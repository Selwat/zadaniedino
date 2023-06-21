import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './views/Home';
import AllAlbums from './views/AllAlbums';
import AllSongs from './views/AllSongs';
import "./style.css";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AllAlbums" element={<AllAlbums />} />
          <Route path="/all-songs/:albumId" element={<AllSongs />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
