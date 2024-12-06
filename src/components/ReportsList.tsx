import React from 'react';
import { FileText, Download } from 'lucide-react';

interface Report {
  id: string;
  type: string;
  description: string;
  date: string;
  fileUrl: string;
}

interface ReportsListProps {
  reports: Report[];
}

export function ReportsList({ reports }: ReportsListProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h3 className="text-lg font-semibold text-gray-700 mb-6">Medical Reports</h3>
      <div className="space-y-4">
        {reports.map((report) => (
          <div
            key={report.id}
            className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
          >
            <div className="flex items-center">
              <FileText className="h-6 w-6 text-blue-500" />
              <div className="ml-4">
                <h4 className="text-sm font-medium text-gray-900">{report.description}</h4>
                <p className="text-sm text-gray-500">
                  {report.type} • {report.date}
                </p>
              </div>
            </div>
            <a
              href={report.fileUrl}
              download
              className="flex items-center text-blue-600 hover:text-blue-800"
            >
              <Download className="h-5 w-5" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}