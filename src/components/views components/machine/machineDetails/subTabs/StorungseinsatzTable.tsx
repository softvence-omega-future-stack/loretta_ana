const StorungseinsatzTable = () => (
  <div className="overflow-x-auto">
    <table className="w-full text-sm">
      <thead className="bg-gray-50 border-b">
        <tr>
          <th className="text-left p-3 font-medium text-gray-700">Boels-Nummer</th>
          <th className="text-left p-3 font-medium text-gray-700">Bezeichnung</th>
          <th className="text-left p-3 font-medium text-gray-700">Elektroprüfung</th>
          <th className="text-left p-3 font-medium text-gray-700">Extern</th>
          <th className="text-left p-3 font-medium text-gray-700">ESC-366</th>
          <th className="text-left p-3 font-medium text-gray-700">Safety-Check</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b hover:bg-gray-50 bg-green-50">
          <td className="p-3 text-green-600">11607</td>
          <td className="p-3">Stromerzeuger 60kVA schallgedämpft</td>
          <td className="p-3 text-blue-600">ÖVE E 8701</td>
          <td className="p-3">Extern</td>
          <td className="p-3 text-blue-600">ESC-366</td>
          <td className="p-3 text-red-500">Safety-Check-Electrical</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default StorungseinsatzTable;
