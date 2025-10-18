import React from "react";

const fileRows = [
  {
    date: "12/27/2021 09:32 AM",
    file: "1060_20250122_083213.jpg",
    size: "178 KB",
  },
  {
    date: "04/09/2025 11:59 AM",
    file: "1060_20250122_083213.jpg",
    size: "519 KB",
  },
  {
    date: "04/09/2025 11:59 AM",
    file: "1060_20250122_083213.jpg",
    size: "519 KB",
  },
];

const ProtocolFiles: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="text-left py-3 px-4 font-semibold text-gray-700">
                Dateianhang
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">
                Files
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">
                File Size
              </th>
            </tr>
          </thead>
          <tbody>
            {fileRows.map((row, idx) => (
              <tr
                key={idx}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="py-3 px-4 text-gray-600">{row.date}</td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50'%3E%3Crect width='50' height='50' fill='%23F3F4F6'/%3E%3C/svg%3E"
                      alt="file"
                      className="w-8 h-8 rounded"
                    />
                    <span className="text-gray-900 font-medium">
                      {row.file}
                    </span>
                  </div>
                </td>
                <td className="py-3 px-4 text-gray-600">{row.size}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProtocolFiles;
