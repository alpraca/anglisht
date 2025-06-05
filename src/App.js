import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import StudentDashboard from './pages/StudentDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import ExplorePage from './pages/ExplorePage';
import './App.css';

function App() {
  const [currentRole, setCurrentRole] = useState('student');

  useEffect(() => {
    // Load role from localStorage
    const savedRole = localStorage.getItem('userRole');
    if (savedRole) {
      setCurrentRole(savedRole);
    }
  }, []);

  const handleRoleChange = (role) => {
    setCurrentRole(role);
    localStorage.setItem('userRole', role);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            path="/" 
            element={
              <LandingPage 
                currentRole={currentRole} 
                onRoleChange={handleRoleChange} 
              />
            } 
          />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
