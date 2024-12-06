import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { LoginPage } from './pages/LoginPage';
import { SearchPage } from './pages/SearchPage';
import { Dashboard } from './components/Dashboard';
import { ReportsPage } from './pages/ReportsPage';

export default function App() {
  const handleLogout = () => {
    // Implement logout logic here
    window.location.href = '/';
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/*"
            element={
              <>
                <Navigation onLogout={handleLogout} />
                <Routes>
                  <Route path="/search" element={<SearchPage />} />
                  <Route path="/dashboard" element={<Dashboard patientId="123" />} />
                  <Route path="/reports" element={<ReportsPage />} />
                  <Route path="*" element={<Navigate to="/search" replace />} />
                </Routes>
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}