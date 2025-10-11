const RucknahmeprotokollTable = () => (
  <div className="overflow-x-auto">
    <table className="w-full text-sm">
      <thead className="bg-gray-50 border-b">
        <tr>
          <th className="text-left p-3 font-medium text-gray-700">Date</th>
          <th className="text-left p-3 font-medium text-gray-700">Nummer</th>
          <th className="text-left p-3 font-medium text-gray-700">Description</th>
          <th className="text-left p-3 font-medium text-gray-700">Bh</th>
          <th className="text-left p-3 font-medium text-gray-700">Depot</th>
          <th className="text-left p-3 font-medium text-gray-700">User</th>
          <th className="text-left p-3 font-medium text-gray-700">Remark</th>
        </tr>
      </thead>
      <tbody>
        {Array(3).fill(null).map((_, i) => (
          <tr key={i} className="border-b hover:bg-gray-50">
            <td className="p-3">20.06.2025</td>
            <td className="p-3 text-red-500">116070462</td>
            <td className="p-3 text-blue-600">Kraftstofffilter, Service & Wartung</td>
            <td className="p-3 text-blue-600">6.584 Bh</td>
            <td className="p-3 text-orange-500">Depot 578</td>
            <td className="p-3">Boscar</td>
            <td className="p-3 text-green-600">{i % 2 === 0 ? 'Check I' : 'Reparatur I'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
export default RucknahmeprotokollTable;