const PrufungenInfoTable = () => (
  <div className="overflow-x-auto">
    <table className="w-full text-sm">
      <thead className="bg-gray-50 border-b">
        <tr>
          <th className="text-left p-3 font-medium text-gray-700">Vorbereitet am</th>
          <th className="text-left p-3 font-medium text-gray-700">Bezeichnung</th>
          <th className="text-left p-3 font-medium text-gray-700">MV Nr</th>
          <th className="text-left p-3 font-medium text-gray-700">Boel Nr</th>
          <th className="text-left p-3 font-medium text-gray-700">User</th>
          <th className="text-left p-3 font-medium text-gray-700">Status</th>
        </tr>
      </thead>
      <tbody>
        {Array(6).fill(null).map((_, i) => (
          <tr key={i} className="border-b hover:bg-gray-50">
            <td className="p-3">30.05.2025</td>
            <td className="p-3">Atlas Copco QAS60 Stromerzeuger 60 kVA</td>
            <td className="p-3 text-blue-600">5780029875</td>
            <td className="p-3 text-red-500">116070462</td>
            <td className="p-3 text-blue-600">Kadlod</td>
            <td className="p-3 text-green-600">Vorbereitet !</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);


export default PrufungenInfoTable;