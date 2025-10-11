const SchadensmeldungTable = () => {
  const incidents = [
    { date: '02.06.2025', number: '116070462', description: 'GPS ausgebaut', location: '1225 Wien', status: 'Repariert !', user: 'Bocsar' },
    { date: '20.09.2022', number: '116070462', description: 'Batterie erneuert, statt 110A 95 A', location: '2263 Dürnkrut', status: 'Abgerechnet', user: 'Bocsar' },
    { date: '20.09.2022', number: '116070462', description: 'Batterie erneuert, statt 110A 95 A', location: '2263 Dürnkrut', status: 'Repariert !', user: 'Bocsar' },
    { date: '20.09.2022', number: '116070462', description: 'Gerät geprüft, Problem bei Wasserpumpe', location: '2263 Dürnkrut', status: 'Abgerechnet', user: 'Bocsar' }
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 border-b">
          <tr>
            <th className="text-left p-3 font-medium text-gray-700">Am:</th>
            <th className="text-left p-3 font-medium text-gray-700">Boels-Nummer</th>
            <th className="text-left p-3 font-medium text-gray-700">Schadensbeschreibung</th>
            <th className="text-left p-3 font-medium text-gray-700">Kostenstelle</th>
            <th className="text-left p-3 font-medium text-gray-700">Reparaturstatus</th>
            <th className="text-left p-3 font-medium text-gray-700">User</th>
          </tr>
        </thead>
        <tbody>
          {incidents.map((incident, i) => (
            <tr key={i} className="border-b hover:bg-gray-50">
              <td className="p-3">{incident.date}</td>
              <td className="p-3 text-red-500">{incident.number}</td>
              <td className="p-3">{incident.description}</td>
              <td className="p-3">{incident.location}</td>
              <td className="p-3 text-green-600">{incident.status}</td>
              <td className="p-3">{incident.user}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SchadensmeldungTable;
