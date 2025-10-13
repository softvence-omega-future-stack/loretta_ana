const SchadensmeldungTable = () => {
  const incidents = [
    {
      date: "02.06.2025",
      number: "116070462",
      description: "GPS ausgebaut",
      location: "1225 Wien",
      totalPrice: "€ 340,00",
      status: "Repariert!",
      billed: "Ja",
      sum: "€ 340,00",
      user: "Bocsar",
    },
    {
      date: "02.06.2025",
      number: "116070462",
      description: "GPS ausgebaut",
      location: "1225 Wien",
      totalPrice: "€ 340,00",
      status: "Repariert!",
      billed: "Ja",
      sum: "€ 340,00",
      user: "Bocsar",
    },
    {
      date: "02.06.2025",
      number: "116070462",
      description: "GPS ausgebaut",
      location: "1225 Wien",
      totalPrice: "€ 340,00",
      status: "Repariert!",
      billed: "Ja",
      sum: "€ 340,00",
      user: "Bocsar",
    },
  ];

  return (
    <div className="overflow-x-auto bg-white rounded shadow border border-gray-100">
      <table className="w-full text-sm min-w-[900px] rounded">
        <thead className="bg-gray-50 border-b">
          <tr>
            <th className="text-left p-3 font-medium text-gray-700 whitespace-nowrap">Am</th>
            <th className="text-left p-3 font-medium text-gray-700 whitespace-nowrap">Boels-Nummer</th>
            <th className="text-left p-3 font-medium text-gray-700 whitespace-nowrap">Schadensbeschreibung</th>
            <th className="text-left p-3 font-medium text-gray-700 whitespace-nowrap">Kostenstelle</th>
            <th className="text-left p-3 font-medium text-gray-700 whitespace-nowrap">ET-Listenpreis gesamt</th>
            <th className="text-left p-3 font-medium text-gray-700 whitespace-nowrap">Reparaturstatus</th>
            <th className="text-left p-3 font-medium text-gray-700 whitespace-nowrap">Abgerechnet</th>
            <th className="text-left p-3 font-medium text-gray-700 whitespace-nowrap">Kalk. Summe</th>
          </tr>
        </thead>

        <tbody>
          {incidents.map((incident, i) => (
            <tr key={i} className="hover:bg-gray-50">
              <td className="p-3 text-gray-700">{incident.date}</td>
              <td className="p-3 text-red-500 font-medium">{incident.number}</td>
              <td className="p-3 text-gray-800">{incident.description}</td>
              <td className="p-3 text-red-500">{incident.location}</td>
              <td className="p-3 text-gray-800">{incident.totalPrice}</td>
              <td className="p-3 text-green-600 font-medium">{incident.status}</td>
              <td className="p-3 text-gray-800">{incident.billed}</td>
              <td className="p-3 text-blue-600 font-semibold">{incident.sum}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SchadensmeldungTable;
