import React, { useState } from 'react';
import { ReportUpload } from '../components/ReportUpload';
import { ReportsList } from '../components/ReportsList';

export function ReportsPage() {
  const [reports, setReports] = useState([
    {
      id: '1',
      type: 'scan',
      description: 'Chest X-Ray',
      date: '2024-03-15',
      fileUrl: '#',
    },
    {
      id: '2',
      type: 'prescription',
      description: 'Monthly Medication',
      date: '2024-03-10',
      fileUrl: '#',
    },
  ]);

  const handleUpload = (file: File, type: string, description: string) => {
    // Simulate file upload - In a real app, this would make an API call
    const newReport = {
      id: String(reports.length + 1),
      type,
      description,
      date: new Date().toISOString().split('T')[0],
      fileUrl: URL.createObjectURL(file),
    };
    setReports([newReport, ...reports]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid md:grid-cols-2 gap-6">
        <ReportUpload onUpload={handleUpload} />
        <ReportsList reports={reports} />
      </div>
    </div>
  );
}