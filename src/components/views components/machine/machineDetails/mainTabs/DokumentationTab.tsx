import SimpleDocTable from "./SimpleDocTable";

const DokumentationTab = () => (
  <div className="bg-white rounded shadow p-6">
    <div className="mb-6">
      <p className="text-sm font-semibold mb-2">
        Betriebsanweisung:{" "}
        <a href="#" className="text-blue-600 hover:underline">
          pdf
        </a>
      </p>
      <p className="text-sm font-semibold">
        Stickerplan:{" "}
        <a href="#" className="text-blue-600 hover:underline">
          pdf
        </a>
      </p>
    </div>
    <h3 className="text-xl font-semibold mb-4">Zugeordnete Dokumente</h3>
    <SimpleDocTable />
  </div>
);

export default DokumentationTab;
