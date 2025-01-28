import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from '../pages/Index';
import Contact from '../pages/Contact';
import Donation from '../pages/Donation';
import Documentation from '../pages/Documentation';
import API from '../pages/API';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/api" element={<API />} />
      <Route path="/documentation" element={<Documentation />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/donation" element={<Donation />} />
    </Routes>
  );
};

export default AppRoutes;
