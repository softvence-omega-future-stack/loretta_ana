const AusgabeprotokollTable = () => {
  const outputs = [
    { icon: '✓', color: 'green' },
    { icon: '✓', color: 'green' },
    { icon: '✗', color: 'red' }
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 border-b">
          <tr>
            <th className="w-12 p-3"></th>
            <th className="text-left p-3 font-medium text-gray-700">Datum</th>
            <th className="text-left p-3 font-medium text-gray-700">Boel Nr</th>
            <th className="text-left p-3 font-medium text-gray-700">Beschreibung</th>
            <th className="text-left p-3 font-medium text-gray-700">Depot</th>
            <th className="text-left p-3 font-medium text-gray-700">Bh</th>
            <th className="text-left p-3 font-medium text-gray-700">Status</th>
            <th className="text-left p-3 font-medium text-gray-700">User</th>
          </tr>
        </thead>
        <tbody>
          {outputs.map((output, i) => (
            <tr key={i} className="border-b hover:bg-gray-50">
              <td className="p-3">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold ${
                  output.color === 'green' ? 'bg-green-500' : 'bg-red-500'
                }`}>
                  {output.icon}
                </div>
              </td>
              <td className="p-3">11.06.2025</td>
              <td className="p-3 text-red-500">116070462</td>
              <td className="p-3">Atlas Copco QAS60 Stromerzeuger</td>
              <td className="p-3 text-blue-600">Depot 578</td>
              <td className="p-3 text-blue-600">6.593</td>
              <td className="p-3 text-green-600">Vermietbereit !</td>
              <td className="p-3 text-blue-600">Iovans</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AusgabeprotokollTable;