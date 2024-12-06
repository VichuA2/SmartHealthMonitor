import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchBar } from '../components/SearchBar';
import { Activity, Heart, ClipboardList, Brain } from 'lucide-react';

export function SearchPage() {
  const navigate = useNavigate();

  const handleSearch = (patientId: string) => {
    navigate(`/dashboard?id=${patientId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Smart Health Monitoring System
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Enter your Patient ID to access your health records
          </p>
          <div className="flex justify-center mb-12">
            <SearchBar onSearch={handleSearch} />
          </div>
          <a
            href="https://blynk.cloud/dashboard/378884/global/devices/1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Heart className="w-5 h-5 mr-2" />
            Live Pulse Rate Monitor
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <FeatureCard
            icon={Heart}
            title="Real-time Monitoring"
            description="Track vital signs in real-time with accurate pulse rate monitoring"
          />
          <FeatureCard
            icon={Brain}
            title="Smart Analytics"
            description="Advanced analytics to predict and prevent health issues"
          />
          <FeatureCard
            icon={ClipboardList}
            title="Medical Records"
            description="Secure storage and easy access to all your medical reports"
          />
        </div>
      </div>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}