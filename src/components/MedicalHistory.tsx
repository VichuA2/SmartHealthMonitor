import React from 'react';
import { ClipboardList } from 'lucide-react';

interface HistoryRecord {
  date: string;
  diagnosis: string;
  doctor: string;
  prescription: string;
}

interface MedicalHistoryProps {
  history: HistoryRecord[];
}

export function MedicalHistory({ history }: MedicalHistoryProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-700">Medical History</h3>
        <ClipboardList className="h-6 w-6 text-blue-500" />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Diagnosis
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Doctor
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Prescription
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {history.map((record, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {record.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {record.diagnosis}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {record.doctor}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {record.prescription}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}