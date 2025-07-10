import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Home from './pages/Home';
import AcademyDetail from './pages/AcademyDetail';
import Departments from './components/Departments';
import Favorite from './components/Favorite';
import StudentDetail from './components/StudentDetail';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import BannerSlider from './components/BannerSlider';
import Event from './pages/Event';
import Character from './pages/Character';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />
        <Route
          path="/academy/:academyId"
          element={
            <PageWrapper>
              <AcademyDetail />
            </PageWrapper>
          }
        />
        <Route
          path="/departments"
          element={
            <PageWrapper>
              <Departments />
            </PageWrapper>
          }
        />
        <Route
          path="/favorites"
          element={
            <PageWrapper>
              <Favorite />
            </PageWrapper>
          }
        />
        <Route
          path="/student/:studentId"
          element={
            <PageWrapper>
              <StudentDetail />
            </PageWrapper>
          }
        />
        <Route
          path="/event"
          element={
            <PageWrapper>
              <Event />
            </PageWrapper>
          }
        />
        <Route
          path="/character" 
          element={<Character />} 
        />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
      </Routes>
    </AnimatePresence>
  );
}

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 50, scale: 0.8 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: -50, scale: 0.8 }}
    transition={{ duration: 0.6, ease: 'easeInOut' }}
    style={{ minHeight: '100vh' }}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <AnimatedRoutes />
      <BannerSlider />
      <Footer />
    </Router>
  );
}