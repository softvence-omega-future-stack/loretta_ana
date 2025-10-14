const AusgabeprotokollTable = () => {
  const data = [
    {
      date: '30.05.2025',
      designation: 'Atlas Copco QAS60 Stromerzeuger 60 kVA schallgedämpft',
      mvNumber: '5780029875',
      boelNumber: '116070462',
      user: 'Kadlod',
      status: 'Vorbereitet !',
    },
    {
      date: '30.05.2025',
      designation: 'Atlas Copco QAS60 Stromerzeuger 60 kVA schallgedämpft',
      mvNumber: '5780029875',
      boelNumber: '116070462',
      user: 'Kadlod',
      status: 'Vorbereitet !',
    },
    {
      date: '30.05.2025',
      designation: 'Atlas Copco QAS60 Stromerzeuger 60 kVA schallgedämpft',
      mvNumber: '5780029875',
      boelNumber: '116070462',
      user: 'Kadlod',
      status: 'Vorbereitet !',
    },
    {
      date: '30.05.2025',
      designation: 'Atlas Copco QAS60 Stromerzeuger 60 kVA schallgedämpft',
      mvNumber: '5780029875',
      boelNumber: '116070462',
      user: 'Kadlod',
      status: 'Vorbereitet !',
    },
    {
      date: '30.05.2025',
      designation: 'Atlas Copco QAS60 Stromerzeuger 60 kVA schallgedämpft',
      mvNumber: '5780029875',
      boelNumber: '116070462',
      user: 'Kadlod',
      status: 'Vorbereitet !',
    },
    {
      date: '30.05.2025',
      designation: 'Atlas Copco QAS60 Stromerzeuger 60 kVA schallgedämpft',
      mvNumber: '5780029875',
      boelNumber: '116070462',
      user: 'Kadlod',
      status: 'Vorbereitet !',
    },
  ];

  return (
    <div className="w-full overflow-x-auto border border-gray-100 rounded">
      <table className="min-w-full text-xs sm:text-sm bg-white">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            <th className="text-left p-3 font-medium text-gray-700 whitespace-nowrap">Vorbereitet am</th>
            <th className="text-left p-3 font-medium text-gray-700 whitespace-nowrap">Bezeichnung</th>
            <th className="text-left p-3 font-medium text-gray-700 whitespace-nowrap">MV Nr</th>
            <th className="text-left p-3 font-medium text-gray-700 whitespace-nowrap">Boel Nr</th>
            <th className="text-left p-3 font-medium text-gray-700 whitespace-nowrap">User</th>
            <th className="text-left p-3 font-medium text-gray-700 whitespace-nowrap">Status</th>
            <th className="text-center p-3 font-medium text-gray-700 whitespace-nowrap"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr
              key={i}
              className="hover:bg-gray-50 transition-colors"
            >
              <td className="p-3 text-green-600 whitespace-nowrap">{row.date}</td>
              <td className="p-3 text-gray-900 min-w-[300px]">{row.designation}</td>
              <td className="p-3 text-blue-600 whitespace-nowrap">{row.mvNumber}</td>
              <td className="p-3 text-red-500 font-medium whitespace-nowrap">{row.boelNumber}</td>
              <td className="p-3 text-blue-600 whitespace-nowrap">{row.user}</td>
              <td className="p-3 text-green-600 font-medium whitespace-nowrap">{row.status}</td>
              <td className="p-3 text-center">
                <button className="text-gray-600 hover:text-gray-900 transition-colors"> 
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AusgabeprotokollTable;