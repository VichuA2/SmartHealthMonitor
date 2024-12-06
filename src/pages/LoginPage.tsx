import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from '../components/LoginForm';

export function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (username: string, password: string) => {
    // Simulate login - In a real app, this would make an API call
    if (username && password) {
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <LoginForm onLogin={handleLogin} />
    </div>
  );
}