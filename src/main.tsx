import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import HomePage from './pages/home/home';
import ContactPage from './pages/contact/contact';
import SponsorsPage from './pages/sponsors/sponsors';
import BiographyPage from './pages/biography/biography';
import PalmaresPage from './pages/palmares/palmares';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="sponsors" element={<SponsorsPage />} />
          <Route path="biography" element={<BiographyPage />} />
          <Route path="palmares" element={<PalmaresPage />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
