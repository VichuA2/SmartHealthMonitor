import React from 'react';
import { PulseGraph } from './PulseGraph';
import { MedicalHistory } from './MedicalHistory';

interface DashboardProps {
  patientId: string;
}

export function Dashboard({ patientId }: DashboardProps) {
  // Simulated data for demonstration
  const currentPulse = 75;
  const medicalHistory = [
    {
      date: '2024-03-15',
      diagnosis: 'Regular Checkup',
      doctor: 'Dr. Smith',
      prescription: 'Vitamins',
    },
    {
      date: '2024-02-28',
      diagnosis: 'Mild Fever',
      doctor: 'Dr. Johnson',
      prescription: 'Paracetamol',
    },
    {
      date: '2024-01-15',
      diagnosis: 'Annual Physical',
      doctor: 'Dr. Williams',
      prescription: 'None',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Patient ID: {patientId}</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <PulseGraph currentPulse={currentPulse} />
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Quick Stats</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="text-sm text-gray-500">Avg. Pulse Rate</div>
                <div className="text-xl font-semibold text-blue-600">72 BPM</div>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="text-sm text-gray-500">Last Check</div>
                <div className="text-xl font-semibold text-green-600">2h ago</div>
              </div>
            </div>
          </div>
        </div>
        <MedicalHistory history={medicalHistory} />
      </div>
    </div>
  );
}