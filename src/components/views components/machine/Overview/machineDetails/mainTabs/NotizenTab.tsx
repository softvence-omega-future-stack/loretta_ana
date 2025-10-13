const NotizenTab = () => (
  <div className="bg-white rounded shadow p-6">
    <div className="mb-6 flex items-center justify-center p-12">
      <div className="text-center">
        <img src="/frame.jpg" alt="QR-Code" className="w-full h-full object-contain"/>
        <p className="text-sm font-semibold">QR-Code Doku (Service)</p>
      </div>
    </div>
    <h3 className="text-xl font-semibold mb-4">Zugeordnete Dokumente</h3>
  </div>
);

export default NotizenTab;
