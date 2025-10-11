import SimpleDocTable from "./SimpleDocTable";

const ZubehorTab = () => (
  <div className="bg-white rounded shadow p-6">
    <div className="mb-6">
      <p className="text-sm mb-4">
        <span className="font-semibold">QR-Code:</span> JA
      </p>
      <p className="text-sm mb-4">
        <span className="font-semibold">Prüfprotokoll geladen:</span> JA
      </p>
    </div>
    <h3 className="text-xl font-semibold mb-4">Zugeordnete Dokumente</h3>
    <SimpleDocTable />
  </div>
);

export default ZubehorTab;
