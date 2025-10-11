import SimpleDocTable from "./SimpleDocTable";

const FilesTab = () => {
  const files = [
    {
      date: "12/27/2021 09:32 AM",
      name: "Stromerzeuger.jpg",
      type: "image",
      size: "179 KB",
    },
    {
      date: "04/06/2025 11:58 AM",
      name: "Prufdatablatt.pdf",
      type: "pdf",
      size: "519 KB",
    },
  ];

  return (
    <div className="bg-white rounded shadow p-6">
      <div className="mb-6">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="w-12 p-3"></th>
              <th className="text-left p-3 font-medium text-gray-700">
                Dateiname
              </th>
              <th className="text-left p-3 font-medium text-gray-700">Files</th>
              <th className="text-left p-3 font-medium text-gray-700">
                File Size
              </th>
            </tr>
          </thead>
          <tbody>
            {files.map((file, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="p-3">
                  <input type="checkbox" className="w-4 h-4" />
                </td>
                <td className="p-3">{file.date}</td>
                <td className="p-3">
                  <div className="flex items-center gap-2">
                    {file.type === "image" ? (
                      <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center text-white text-xs font-bold">
                        JPG
                      </div>
                    ) : (
                      <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center text-white text-xs font-bold">
                        PDF
                      </div>
                    )}
                    <a href="#" className="text-blue-600 hover:underline">
                      {file.name}
                    </a>
                  </div>
                </td>
                <td className="p-3">{file.size}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h3 className="text-xl font-semibold mb-4">Zugeordnete Dokumente</h3>
      <SimpleDocTable />
    </div>
  );
};

export default FilesTab;
