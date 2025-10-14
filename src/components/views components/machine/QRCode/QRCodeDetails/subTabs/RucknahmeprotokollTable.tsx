const RucknahmeprotokollTable = () => {
  const data = [
    {
      prepared: '11.06.2025',
      boelNr: '116070462',
      designation: 'Atlas Copco QAS60 Stromerzeuger 60 kVA schallgedämpft',
      lastReturn: 'Depot 578',
      bh: '6.593',
      status: 'Vermietbereit !',
      takenOver: 'Iovans',
      indicatorColor: 'green',
    },
    {
      prepared: '11.06.2025',
      boelNr: '116070462',
      designation: 'Atlas Copco QAS60 Stromerzeuger 60 kVA schallgedämpft',
      lastReturn: 'Depot 578',
      bh: '6.593',
      status: 'Vermietbereit !',
      takenOver: 'Iovans',
      indicatorColor: 'green',
    },
    {
      prepared: '11.06.2025',
      boelNr: '116070462',
      designation: 'Atlas Copco QAS60 Stromerzeuger 60 kVA schallgedämpft',
      lastReturn: 'Depot 578',
      bh: '6.593',
      status: 'Vermietbereit !',
      takenOver: 'Iovans',
      indicatorColor: 'red',
    },
  ];

  return (
    <div className="w-full overflow-x-auto border border-gray-100 rounded">
      <table className="min-w-full text-xs sm:text-sm bg-white">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            <th className="text-left p-3 font-medium text-gray-700 whitespace-nowrap">Vorbereitet am</th>
            <th className="text-left p-3 font-medium text-gray-700 whitespace-nowrap">Boel Nr</th>
            <th className="text-left p-3 font-medium text-gray-700 whitespace-nowrap">Bezeichnung</th>
            <th className="text-left p-3 font-medium text-gray-700 whitespace-nowrap">Letz.Rücknahme</th>
            <th className="text-left p-3 font-medium text-gray-700 whitespace-nowrap">BH</th>
            <th className="text-left p-3 font-medium text-gray-700 whitespace-nowrap">Gerät Status</th>
            <th className="text-left p-3 font-medium text-gray-700 whitespace-nowrap">Übernommen</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr
              key={i}
              className="hover:bg-gray-50 transition-colors"
            >
              <td className="p-3 whitespace-nowrap">
                <div className="flex items-center gap-6">
                  <div className={`w-6 h-6 rounded ${
                    row.indicatorColor === 'green' ? 'bg-green-500' : 'bg-red-500'
                  }`}></div>
                  <span className="text-blue-600">{row.prepared}</span>
                </div>
              </td>
              <td className="p-3 text-red-500 font-medium whitespace-nowrap">{row.boelNr}</td>
              <td className="p-3 text-gray-900 min-w-[300px]">{row.designation}</td>
              <td className="p-3 text-blue-600 whitespace-nowrap">{row.lastReturn}</td>
              <td className="p-3 text-blue-600 whitespace-nowrap">{row.bh}</td>
              <td className="p-3 text-green-600 font-medium whitespace-nowrap">{row.status}</td>
              <td className="p-3 text-blue-600 whitespace-nowrap">{row.takenOver}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RucknahmeprotokollTable;