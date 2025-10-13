import React from 'react';

import type { Document } from './types';

interface DocumentsTableProps {
  documents: Document[];
}

const DocumentsTable: React.FC<DocumentsTableProps> = ({ documents }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-50">
            <th className="text-left p-4 font-semibold text-gray-700 border-b">Datum</th>
            <th className="text-left p-4 font-semibold text-gray-700 border-b">Maschine Nummer</th>
            <th className="text-left p-4 font-semibold text-gray-700 border-b">Description</th>
            <th className="text-left p-4 font-semibold text-gray-700 border-b">Stundenkilometerstand</th>
            <th className="text-left p-4 font-semibold text-gray-700 border-b">Letz Rücknahme</th>
            <th className="text-left p-4 font-semibold text-gray-700 border-b">User</th>
            <th className="text-left p-4 font-semibold text-gray-700 border-b">Remark</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc, idx) => (
            <tr key={idx} className="border-b hover:bg-gray-50">
              <td className="p-4">{doc.date}</td>
              <td className="p-4 text-red-500 font-medium">{doc.machineNumber}</td>
              <td className="p-4">
                <a href="#" className="text-blue-600 hover:underline">
                  {doc.description}
                </a>
              </td>
              <td className="p-4 text-blue-600">{doc.size}</td>
              <td className="p-4 text-orange-500">{doc.depot}</td>
              <td className="p-4">{doc.user}</td>
              <td className="p-4 text-green-600">{doc.remark}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DocumentsTable;
