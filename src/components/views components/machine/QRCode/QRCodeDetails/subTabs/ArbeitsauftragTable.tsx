const ArbeitsauftragTable = () => (
  <div className="overflow-x-auto">
    <table className="w-full text-sm border-collapse">
      <thead className="bg-gray-50">
        <tr className="border-b">
          <th className="px-4 py-3 text-left text-gray-600 font-medium text-xs">Date</th>
          <th className="px-4 py-3 text-left text-gray-600 font-medium text-xs">Maschine Nummer</th>
          <th className="px-4 py-3 text-left text-gray-600 font-medium text-xs">Description</th>
          <th className="px-4 py-3 text-left text-gray-600 font-medium text-xs">Stundenzählerstand</th>
          <th className="px-4 py-3 text-left text-gray-600 font-medium text-xs">Letz Rücknahme</th>
          <th className="px-4 py-3 text-left text-gray-600 font-medium text-xs">User</th>
          <th className="px-4 py-3 text-left text-gray-600 font-medium text-xs">Remark</th>
        </tr>
      </thead>
      <tbody>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <tr key={i} className="border-b hover:bg-gray-50">
            <td className="px-4 py-3 text-xs">20.06.2025</td>
            <td className="px-4 py-3 text-xs text-red-600">116070462</td>
            <td className="px-4 py-3 text-xs text-blue-600">Motorölfilter, Kraftstofffilter, Service & Wartung durchgeführ I...</td>
            <td className="px-4 py-3 text-xs">6.594 Bh</td>
            <td className="px-4 py-3 text-xs text-orange-600">Depot 578</td>
            <td className="px-4 py-3 text-xs">Boeser</td>
            <td className="px-4 py-3 text-xs text-green-600">Service Telematics I</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
export default ArbeitsauftragTable;