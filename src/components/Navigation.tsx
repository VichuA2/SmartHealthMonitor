import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Activity, FileText, LogOut, Search } from 'lucide-react';

interface NavigationProps {
  onLogout: () => void;
}

export function Navigation({ onLogout }: NavigationProps) {
  const location = useLocation();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Activity className="h-8 w-8 text-blue-600" />
            <h1 className="ml-2 text-xl font-bold text-gray-900">
              Smart Health Monitor
            </h1>
          </div>
          <nav className="flex items-center space-x-6">
            <Link
              to="/search"
              className={`flex items-center text-gray-600 hover:text-blue-600 ${
                location.pathname === '/search' ? 'text-blue-600' : ''
              }`}
            >
              <Search className="h-5 w-5 mr-1" />
              Search
            </Link>
            <Link
              to="/dashboard"
              className={`flex items-center text-gray-600 hover:text-blue-600 ${
                location.pathname === '/dashboard' ? 'text-blue-600' : ''
              }`}
            >
              Dashboard
            </Link>
            <Link
              to="/reports"
              className={`flex items-center text-gray-600 hover:text-blue-600 ${
                location.pathname === '/reports' ? 'text-blue-600' : ''
              }`}
            >
              <FileText className="h-5 w-5 mr-1" />
              Reports
            </Link>
            <button
              onClick={onLogout}
              className="flex items-center text-gray-600 hover:text-red-600"
            >
              <LogOut className="h-5 w-5 mr-1" />
              Logout
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}