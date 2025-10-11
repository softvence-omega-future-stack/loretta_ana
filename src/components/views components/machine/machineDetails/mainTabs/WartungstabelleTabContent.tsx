const WartungstabelleTabContent = () => {
  const maintenanceData = [
    { material: 'Motoröllfilter', part: 'SQ 742', number: 'SP 43564' },
    { material: 'Luftfilter außen', part: 'SA 170988', number: 'SL 61390' },
    { material: 'Luftfilter Innen', part: 'SA 170989', number: 'SL 93391' },
    { material: 'Dieselfilter', part: 'SN 904530', number: 'SK 36470' }
  ];

  return (
    <div className="bg-white rounded shadow p-6">
      <div className="mb-6">
        <p className="text-sm mb-4">
          <span className="font-semibold">W = Wachseln</span> | 
          <span className="font-semibold"> P = Prüfung</span> | 
          <span className="font-semibold"> E = Einsetzen</span>
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border">
            <thead className="bg-gray-50">
              <tr>
                <th className="border p-2 text-left">Wartungsmaterial</th>
                <th className="border p-2 text-left">Part</th>
                <th className="border p-2 text-left">Number</th>
                <th className="border p-2">100</th>
                <th className="border p-2">250</th>
                <th className="border p-2">500</th>
                <th className="border p-2">1000</th>
                <th className="border p-2">1500</th>
              </tr>
            </thead>
            <tbody>
              {maintenanceData.map((row, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="border p-2">{row.material}</td>
                  <td className="border p-2">{row.part}</td>
                  <td className="border p-2 text-blue-600">{row.number}</td>
                  <td className="border p-2 text-center text-green-600">W</td>
                  <td className="border p-2 text-center text-green-600">W</td>
                  <td className="border p-2"></td>
                  <td className="border p-2 text-center text-green-600">W</td>
                  <td className="border p-2 text-center text-green-600">W</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WartungstabelleTabContent;