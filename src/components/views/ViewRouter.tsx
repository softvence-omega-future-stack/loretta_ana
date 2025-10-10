// import MachineOverview from "./machines/MachineOverview";
// import QRCodeView from "./machines/QRCodeView";
// import ProductionDashboard from "./production/ProductionDashboard";
// import MaintenanceScheduled from "./maintenance/MaintenanceScheduled";
// import InventoryStock from "./inventory/InventoryStock";
// import ReportsDaily from "./reports/ReportsDaily";
// import ProfileView from "./user/ProfileView";
// import SettingsView from "./user/SettingsView";
// import NotificationsView from "./user/NotificationsView";
// import LoginView from "./user/LoginView";
// import DefaultView from "./DefaultView";

// const ViewRouter = ({ path }: { path: string }) => {
//   if (path === "/login") return <LoginView />;
//   if (path === "/profile") return <ProfileView />;
//   if (path === "/settings") return <SettingsView />;
//   if (path === "/notifications") return <NotificationsView />;

//   const parts = path.split("/").filter(Boolean);
//   if (parts.length >= 2) {
//     const view = parts[1];
//     switch (view) {
//       case "overview": return <MachineOverview />;
//       case "qrcode": return <QRCodeView />;
//       case "prod-dashboard": return <ProductionDashboard />;
//       case "maint-scheduled": return <MaintenanceScheduled />;
//       case "inv-current": return <InventoryStock />;
//       case "rep-daily": return <ReportsDaily />;
//       default: return <DefaultView view={view} />;
//     }
//   }
//   return <MachineOverview />;
// };

// export default ViewRouter;

import MachineOverview from "./machines/MachineOverview";

const ViewRouter = ({ path }: { path: string }) => {
  if (path === "/login") return <p>Login View component</p>;

  const parts = path.split("/").filter(Boolean);
  if (parts.length >= 2) {
    const view = parts[1];
    switch (view) {
      // Machines
      case "machines-overview":
        return <MachineOverview />;
      case "machines-qrcode":
        return <p>Machine QR Code</p>;
      case "machines-overdue":
        return <p>Machine Overdue</p>;
      case "machines-search":
        return <p>Machine Search</p>;
      case "machines-manual":
        return <p>Machine Manual</p>;
      case "machines-team":
        return <p>Machine Team</p>;
      case "machines-access":
        return <p>Machine Access</p>;
      case "machines-issue":
        return <p>Machine Issue</p>;
      case "machines-trucklimit":
        return <p>Machine Trucklimit</p>;
      case "machines-workshop":
        return <p>Machine Workshop</p>;
      case "machines-folder":
        return <p>Machine Folder</p>;

      // Output Log
      case "output-overview":
        return <p>Output Overview</p>;
      case "output-expenses":
        return <p>Output Expenses</p>;
      case "output-boels-home":
        return <p>Output Boels Home</p>;
      case "output-boels-intranet":
        return <p>Output Boels Intranet</p>;
      case "output-hifi-filter":
        return <p>Output Hifi Filter</p>;

      // Spare Parts
      case "spare-overview":
        return <p>Spare Overview</p>;
      case "spare-wh-depot-578":
        return <p>Spare WH Depot 578</p>;
      case "spare-wh-depot-1061":
        return <p>Spare WH Depot 1061</p>;
      case "spare-query":
        return <p>Spare Query</p>;
      case "spare-et-petrol-engines":
        return <p>Spare ET Petrol Engines</p>;
      case "spare-sf-filter":
        return <p>Spare SF Filter</p>;
      case "spare-kohler-enginers":
        return <p>Spare Kohler Enginers</p>;
      case "spare-hifi-filter":
        return <p>Spare Hifi Filter</p>;
      case "spare-skyjack":
        return <p>Spare Skyjack</p>;
      case "spare-honda-engines":
        return <p>Spare Honda Engines</p>;

      // Work log
      case "worklog-overview":
        return <p>Worklog Overview</p>;
      case "worklog-query":
        return <p>Worklog Query</p>;

      // Boels Inspection
      case "boels-test-report":
        return <p>Boels Test Report</p>;
      case "boels-query":
        return <p>Boels Query</p>;
      case "boels-home":
        return <p>Boels Home</p>;
      case "boels-intranet":
        return <p>Boels Intranet</p>;
      case "boels-hifi-filter":
        return <p>Boels Hifi Filter</p>;

      // Fault log
      case "faultlog-overview":
        return <p>Faultlog Overview</p>;
      case "faultlog-query":
        return <p>Faultlog Query</p>;
      case "faultlog-boels-home":
        return <p>Faultlog Boels Home</p>;
      case "faultlog-boels-intranet":
        return <p>Faultlog Boels Intranet</p>;
      case "faultlog-hifi-filter":
        return <p>Faultlog Hifi Filter</p>;
      case "faultlog-bomag":
        return <p>Faultlog Bomag</p>;
      case "faultlog-skyjack":
        return <p>Faultlog Skyjack</p>;

      // Return protocol
      case "return-overview":
        return <p>Return Overview</p>;
      case "return-fuel-log":
        return <p>Return Fuel Log</p>;
      case "return-fuel-list":
        return <p>Return Fuel List</p>;
      case "return-return":
        return <p>Return Return</p>;
      case "return-issue-return":
        return <p>Return Issue Return</p>;

      // Priority & Replist
      case "priority-priorities":
        return <p>Priority Priorities</p>;
      case "priority-repliste-workshop":
        return <p>Priority Repliste Workshop</p>;
      case "priority-live-info-board":
        return <p>Priority Live Info Board</p>;

      // Damage Report
      case "damage-overview":
        return <p>Damage Overview</p>;
      case "damage-query":
        return <p>Damage Query</p>;
      case "damage-evaluation":
        return <p>Damage Evaluation</p>;
      case "damage-boels-home":
        return <p>Damage Boels Home</p>;
      case "damage-boels-intranet":
        return <p>Damage Boels Intranet</p>;
      case "damage-hifi-filter":
        return <p>Damage Hifi Filter</p>;
      case "damage-skyjack":
        return <p>Damage Skyjack</p>;

      // Examinations Information
      case "examinations-checklist":
        return <p>Examinations Checklist</p>;

      // Fault Report
      case "faultreport-overview":
        return <p>Faultreport Overview</p>;
      case "faultreport-customer-contact":
        return <p>Faultreport Customer Contact</p>;
      case "faultreport-picklist":
        return <p>Faultreport Picklist</p>;
      case "faultreport-google-maps":
        return <p>Faultreport Google Maps</p>;

      // Preparation Protocol
      case "preparation-open":
        return <p>Preparation Open</p>;
      case "preparation-completed":
        return <p>Preparation Completed</p>;
      case "preparation-info-board-tv":
        return <p>Preparation Info Board TV</p>;
      case "preparation-search":
        return <p>Preparation Search</p>;

      // Fault Report QR Code Documentation
      case "faultqr-overview":
        return <p>Fault QR Overview</p>;
      case "faultqr-search":
        return <p>Fault QR Search</p>;

      // Documentation
      case "doc-by-type":
        return <p>Document by Type</p>;
      case "doc-machine-number":
        return <p>Document by Machine Number</p>;
      case "doc-query":
        return <p>Document by Query</p>;
      case "doc-public-area":
        return <p>Document by Public Area</p>;

      // ACM Documentation
      case "acm-overview":
        return <p>ACM Overview</p>;

      // Knowledge Base
      case "knowledge-by-subgroups":
        return <p>Knowledge by Subgroups</p>;
      case "knowledge-my-folder":
        return <p>Knowledge My Folder</p>;

      // Test Report PDF
      case "testpdf-overview":
        return <p>Test Report Overview</p>;
      case "testpdf-search-for-pdf":
        return <p>Test Report Search for PDF</p>;

      // TPG Test Report
      case "tpg-overview":
        return <p>TPG Overview</p>;
      case "tpg-public-area":
        return <p>TPG Public Area</p>;

      // Fuel Extraction Internal
      case "fuel-overview":
        return <p>Fuel Overview</p>;
      case "fuel-public-area":
        return <p>Fuel Public Area</p>;

      default:
        return <p>Default View component for {view}</p>;
    }
  }
  return <MachineOverview />;
};

export default ViewRouter;
