const WissensdatenbankTable = () => {
  const data = [
    {
      date: '12.01.2024',
      boelNumber: '11607',
      designation: 'Atlas Copco QAS60 Stromerzeuger 60 kVA schallgedämpft',
      issue: 'Motor springt nicht an !!',
      solution: 'Bei Einspritzpumpe unbedingt Abstellmagnet kontrollieren !!!',
      user: 'malins',
    },
  ];

  return (
    <div className="w-full overflow-x-auto border border-gray-100 rounded">
      <table className="min-w-full text-xs sm:text-sm bg-white">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            <th className="text-left p-3 font-medium text-gray-700 whitespace-nowrap">Datum</th>
            <th className="text-left p-3 font-medium text-gray-700 whitespace-nowrap">Info</th>
            <th className="text-left p-3 font-medium text-gray-700 whitespace-nowrap">Problem</th>
            <th className="text-left p-3 font-medium text-gray-700 whitespace-nowrap">Lösung</th>
            <th className="text-left p-3 font-medium text-gray-700 whitespace-nowrap">User</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr
              key={i}
              className="hover:bg-gray-50 transition-colors"
            >
              <td className="p-3 whitespace-nowrap">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-900">Datum: {row.date}</span>
                </div>
              </td>
              <td className="p-3 min-w-[250px]">
                <span className="text-blue-600 font-medium">{row.boelNumber}</span>
                <span className="text-gray-900"> {row.designation}</span>
              </td>
              <td className="p-3 text-red-600 font-medium whitespace-nowrap min-w-[200px]">
                {row.issue}
              </td>
              <td className="p-3 text-green-600 font-medium min-w-[300px]">
                {row.solution}
              </td>
              <td className="p-3 text-blue-600 whitespace-nowrap">
                {row.user}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WissensdatenbankTable;