import React from 'react';
import { Heart } from 'lucide-react';

interface PulseGraphProps {
  currentPulse: number;
}

export function PulseGraph({ currentPulse }: PulseGraphProps) {
  const getPulseStatus = (pulse: number) => {
    if (pulse < 60) return 'Low';
    if (pulse > 100) return 'High';
    return 'Normal';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Low':
        return 'text-yellow-600';
      case 'High':
        return 'text-red-600';
      default:
        return 'text-green-600';
    }
  };

  const status = getPulseStatus(currentPulse);

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-700">Current Pulse Rate</h3>
        <Heart className="h-6 w-6 text-red-500" />
      </div>
      <div className="text-center">
        <div className="text-5xl font-bold mb-2">{currentPulse}</div>
        <div className="text-gray-500">BPM</div>
        <div className={`mt-2 font-medium ${getStatusColor(status)}`}>
          {status} Heart Rate
        </div>
      </div>
    </div>
  );
}