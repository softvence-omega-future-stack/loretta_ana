import React from "react";
import type { WorkLog } from "../types";

export type Document = {
  id: string;
  number: string;
  name: string;
  supplier: string;
  depot: string;
  listPrice: string;
  purchasePrice: string;
  image: string;
};

type AssignedDocumentsProps = {
  workLog: WorkLog;
};

const AssignedDocuments: React.FC<AssignedDocumentsProps> = ({ workLog }) => {
  const documents = workLog.documents || [];

  return (
    <div className="w-full mt-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-lg">Zugeordnete Dokumente</h3>
        <button className="text-orange-500 hover:text-orange-600 transition-colors">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        </button>
      </div>

      {/* Category Label */}
      <div className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded text-sm font-medium mb-4">
        Ersatzteile ({documents.length})
      </div>

      {/* Table Wrapper */}
      <div className="border border-gray-200 rounded-lg bg-gray-50 overflow-x-auto">
        <div className="min-w-[800px]">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 px-4 py-3 border-b border-gray-200 bg-gray-50 sticky top-0 z-10">
            <div className="col-span-3 flex items-center">
              <span className="text-xs text-gray-500 font-medium">
                Nummer / Bezeichnung
              </span>
            </div>
            <div className="col-span-2 flex items-center">
              <span className="text-xs text-gray-500 font-medium">
                Lieferant
              </span>
            </div>
            <div className="col-span-3 flex items-center">
              <span className="text-xs text-gray-500 font-medium">
                Lagerort / Lagerstand
              </span>
            </div>
            <div className="col-span-4 flex justify-end items-center pr-2">
              <span className="text-xs text-gray-500 font-medium text-right">
                Listenpreis / Einkaufspreis
              </span>
            </div>
          </div>

          {/* Document Rows */}
          <div className="divide-y divide-gray-100">
            {documents.length > 0 ? (
              documents.map((doc) => (
                <div
                  key={doc.id}
                  className="grid grid-cols-12 gap-4 px-4 py-3 items-center bg-white hover:border hover:border-orange-300 rounded-md m-2 transition-colors"
                >
                  {/* Left: Image + Number + Name */}
                  <div className="col-span-3 flex items-start gap-3">
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="w-10 h-10 rounded object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-blue-600">
                        {doc.number}
                      </div>
                      <div className="text-xs text-gray-600">{doc.name}</div>
                    </div>
                  </div>

                  {/* Supplier */}
                  <div className="col-span-2">
                    <span className="text-sm text-gray-900 font-semibold">
                      {doc.supplier}
                    </span>
                  </div>

                  {/* Depot + Stock */}
                  <div className="col-span-3">
                    <div className="text-sm text-blue-600 font-semibold">
                      {doc.depot}
                    </div>
                    <div className="text-xs text-green-600 font-medium">13</div>
                  </div>

                  {/* Prices */}
                  <div className="col-span-4 flex justify-end items-center pr-2">
                    <div className="text-right">
                      <div className="text-sm text-green-600 font-semibold">
                        {doc.listPrice}
                      </div>
                      <div className="text-sm text-red-600 font-semibold">
                        {doc.purchasePrice}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                Keine Dokumente verfügbar
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignedDocuments;
