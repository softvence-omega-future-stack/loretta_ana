import React from "react";
import type { WorkLog } from "../types";

const FilesTab: React.FC<{ workLog: WorkLog }> = ({ workLog }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            <th className="text-left p-3 text-sm font-medium text-gray-600 w-12">
              <input type="checkbox" className="rounded" />
            </th>
            <th className="text-left p-3 text-sm font-medium text-gray-600">Dateianhang</th>
            <th className="text-left p-3 text-sm font-medium text-gray-600">Files</th>
            <th className="text-left p-3 text-sm font-medium text-gray-600">File Size</th>
          </tr>
        </thead>
        <tbody>
          {(workLog.files || []).map((file) => (
            <tr key={file.id} className="border-b border-gray-200 hover:bg-gray-50">
              <td className="p-3">
                <input type="checkbox" className="rounded" />
              </td>
              <td className="p-3 text-sm">{file.date}</td>
              <td className="p-3">
                <img
                  src={file.icon}
                  alt={file.name}
                  className="w-10 h-10 rounded object-cover flex-shrink-0 inline-block mr-2"
                />
                <span className="text-sm">{file.name}</span>
              </td>
              <td className="p-3 text-sm">{file.size}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FilesTab;
