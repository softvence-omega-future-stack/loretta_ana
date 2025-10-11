const SimpleDocTable = () => {
  const documents = Array(6).fill(null).map((_, i) => ({
    date: '20.06.2025',
    machineNumber: '116070462',
    description: 'Maschoffler, Kraftstofffilter, Service & Wartung durchgeführt...',
    size: '6.584 Bh',
    depot: 'Depot 578',
    user: 'Boscar',
    remark: i % 3 === 0 ? 'Service Telematics I' : i % 2 === 0 ? 'Check I' : 'Reparatur I'
  }));

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 border-b">
          <tr>
            <th className="text-left p-3 font-medium text-gray-700">Date</th>
            <th className="text-left p-3 font-medium text-gray-700">Maschine Nummer</th>
            <th className="text-left p-3 font-medium text-gray-700">Description</th>
            <th className="text-left p-3 font-medium text-gray-700">Stundenzählerstand</th>
            <th className="text-left p-3 font-medium text-gray-700">Letz Rückkehrte</th>
            <th className="text-left p-3 font-medium text-gray-700">User</th>
            <th className="text-left p-3 font-medium text-gray-700">Remark</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc, i) => (
            <tr key={i} className="border-b hover:bg-gray-50">
              <td className="p-3">{doc.date}</td>
              <td className="p-3 text-red-500">{doc.machineNumber}</td>
              <td className="p-3 text-blue-600">{doc.description}</td>
              <td className="p-3 text-blue-600">{doc.size}</td>
              <td className="p-3 text-orange-500">{doc.depot}</td>
              <td className="p-3">{doc.user}</td>
              <td className="p-3 text-green-600">{doc.remark}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SimpleDocTable;
