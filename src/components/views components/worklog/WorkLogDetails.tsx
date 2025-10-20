import UniversalDropdown from "@/common/dropdown/UniversalDropdown";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import type { WorkLog } from "./types";
import ErsatzteilInformation from "./tabs/ErsatzteilInformation";
import FilesTab from "./tabs/FilesTab";
import AssignedDocuments from "./tabs/AssignedDocuments";

type WorkLogDetailProps = {
  workLog: WorkLog;
  onBack: () => void;
};

const WorkLogDetails: React.FC<WorkLogDetailProps> = ({ workLog, onBack }) => {
  const [activeTab, setActiveTab] = useState("Ersatzteil-Information");

  const mainTabs = [
    { id: "Ersatzteil-Information", label: "Ersatzteil-Information" },
    { id: "files", label: null, icon: true },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <button
          onClick={onBack}
          className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 transition-colors w-fit"
        >
          <img src="/back.svg" alt="Back" className="w-5 h-5 sm:w-6 sm:h-6" /> Back
        </button>

        <UniversalDropdown
          trigger={
            <button className="border border-gray-300 rounded px-3 py-1.5 text-sm bg-white w-full sm:w-auto focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-nowrap">
              Dokument <ChevronDown size={16} className="inline-block" />
            </button>
          }
          align="center"
        >
          <button className="block w-full text-left p-2 text-gray-200 hover:bg-gray-700">
            Dokument
          </button>
        </UniversalDropdown>
      </div>

      <hr className="border-gray-300 mb-6" />

      {/* Tabs */}
      <div className="mb-6 -mx-4 sm:mx-0">
        <div className="overflow-x-auto px-4 sm:px-0">
          <div className="flex gap-2 pb-2 sm:pb-0 min-w-max sm:min-w-0 sm:flex-wrap">
            {mainTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-2 text-sm rounded whitespace-nowrap transition-colors flex-shrink-0 flex items-center gap-1 ${
                  activeTab === tab.id
                    ? "bg-orange-100 text-orange-600 border border-orange-300"
                    : "bg-gray-100 text-gray-700 border border-gray-200 hover:bg-orange-50"
                }`}
              >
                {tab.icon ? (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="inline-block"
                  >
                    <path d="M10 13a5 5 0 0 0 7.07 0l1.41-1.41a5 5 0 0 0-7.07-7.07L9.93 5.93" />
                    <path d="M14 11a5 5 0 0 0-7.07 0L5.51 12.41a5 5 0 0 0 7.07 7.07L14.07 18.07" />
                  </svg>
                ) : (
                  tab.label
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === "Ersatzteil-Information" && <ErsatzteilInformation workLog={workLog} />}
      {activeTab === "files" && <FilesTab workLog={workLog} />}

      {/* Assigned Documents */}
      <AssignedDocuments workLog={workLog} />
    </div>
  );
};

export default WorkLogDetails;
