import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FormData {
  seriennummer: string;
  reparaturbeschreibung: string;
  artikelnummer: string;
  datumVon: string;
  datumBis: string;
  boelsInspectionVon: string;
  boelsInspectionBis: string;
  techniker: string;
  auftragsart: string;
  freieSuchbegriffe: string;
  begriffe: string;
  nurMeineDokumente: boolean;
}

export default function WorklogQuery() {
  const [formData, setFormData] = useState<FormData>({
    seriennummer: '',
    reparaturbeschreibung: '',
    artikelnummer: '',
    datumVon: '',
    datumBis: '',
    boelsInspectionVon: '',
    boelsInspectionBis: '',
    techniker: 'Choose One',
    auftragsart: 'Choose One',
    freieSuchbegriffe: '',
    begriffe: 'einen der Begriffe',
    nurMeineDokumente: true,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleReset = () => {
    setFormData({
      seriennummer: '',
      reparaturbeschreibung: '',
      artikelnummer: '',
      datumVon: '',
      datumBis: '',
      boelsInspectionVon: '',
      boelsInspectionBis: '',
      techniker: 'Choose One',
      auftragsart: 'Choose One',
      freieSuchbegriffe: '',
      begriffe: 'einen der Begriffe',
      nurMeineDokumente: true,
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      <div className="bg-white p-6 rounded-md border border-gray-200">
        <h1 className="text-2xl font-normal text-gray-900 mb-12">Query</h1>

        <div className="border border-gray-200 rounded-lg p-8">
          {/* Form Grid */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-8">
            {/* Row 1 */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Seriennummer:
              </label>
              <input
                type="text"
                name="seriennummer"
                value={formData.seriennummer}
                onChange={handleInputChange}
                placeholder="Example"
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Reparaturbeschreibung:
              </label>
              <input
                type="text"
                name="reparaturbeschreibung"
                value={formData.reparaturbeschreibung}
                onChange={handleInputChange}
                placeholder="Example"
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-500"
              />
            </div>

            {/* Row 2 */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Artikelnummer:
              </label>
              <input
                type="text"
                name="artikelnummer"
                value={formData.artikelnummer}
                onChange={handleInputChange}
                placeholder="Type date"
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                &nbsp;
              </label>
              <div className="flex gap-2 items-center">
                <input
                  type="text"
                  placeholder="Type date"
                  className="flex-1 px-3 py-2 bg-white border border-gray-300 rounded text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-500"
                />
                <span className="text-gray-500 text-sm font-medium">bis</span>
                <input
                  type="text"
                  placeholder="Type date"
                  className="flex-1 px-3 py-2 bg-white border border-gray-300 rounded text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-500"
                />
              </div>
            </div>

            {/* Row 3 */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Datum:
              </label>
              <div className="flex gap-2 items-center">
                <div className="relative flex-1">
                  <input
                    type="date"
                    name="datumVon"
                    value={formData.datumVon}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded text-sm text-gray-600 focus:outline-none focus:ring-1 focus:ring-orange-500"
                  />
                  {/* <Calendar className="absolute right-3 top-2.5 w-4 h-4 text-orange-500 pointer-events-none" /> */}
                </div>
                <span className="text-gray-500 text-sm font-medium">bis</span>
                <div className="relative flex-1">
                  <input
                    type="date"
                    name="datumBis"
                    value={formData.datumBis}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded text-sm text-gray-600 focus:outline-none focus:ring-1 focus:ring-orange-500"
                  />
                  {/* <Calendar className="absolute right-3 top-2.5 w-4 h-4 text-orange-500 pointer-events-none" /> */}
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Boels Inspection Durchgeführt:
              </label>
              <div className="flex gap-2 items-center">
                <div className="relative flex-1">
                  <input
                    type="date"
                    name="boelsInspectionVon"
                    value={formData.boelsInspectionVon}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded text-sm text-gray-600 focus:outline-none focus:ring-1 focus:ring-orange-500"
                  />
                  {/* <Calendar className="absolute right-3 top-2.5 w-4 h-4 text-orange-500 pointer-events-none" /> */}
                </div>
                <span className="text-gray-500 text-sm font-medium">bis</span>
                <div className="relative flex-1">
                  <input
                    type="date"
                    name="boelsInspectionBis"
                    value={formData.boelsInspectionBis}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded text-sm text-gray-600 focus:outline-none focus:ring-1 focus:ring-orange-500"
                  />
                  {/* <Calendar className="absolute right-3 top-2.5 w-4 h-4 text-orange-500 pointer-events-none" /> */}
                </div>
              </div>
            </div>

            {/* Row 4 */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Techniker:
              </label>
              <div className="relative">
                <select
                  name="techniker"
                  value={formData.techniker}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded text-sm text-gray-600 focus:outline-none focus:ring-1 focus:ring-orange-500 appearance-none pr-8"
                >
                  <option>Choose One</option>
                </select>
                <ChevronDown className="absolute right-2 top-2.5 w-4 h-4 text-gray-600 pointer-events-none" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Auftragsart:
              </label>
              <div className="relative">
                <select
                  name="auftragsart"
                  value={formData.auftragsart}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded text-sm text-gray-600 focus:outline-none focus:ring-1 focus:ring-orange-500 appearance-none pr-8"
                >
                  <option>Choose One</option>
                </select>
                <ChevronDown className="absolute right-2 top-2.5 w-4 h-4 text-gray-600 pointer-events-none" />
              </div>
            </div>

            {/* Row 5 */}
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Freie Suchbegriffe:
              </label>
              <div className="flex gap-3 items-center">
                <input
                  type="text"
                  name="freieSuchbegriffe"
                  value={formData.freieSuchbegriffe}
                  onChange={handleInputChange}
                  placeholder="Type manually"
                  className="flex-1 px-3 py-2 bg-white border border-gray-300 rounded text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-500"
                />
                <span className="text-gray-500">|</span>
                <div className="relative min-w-fit">
                  <select
                    name="begriffe"
                    value={formData.begriffe}
                    onChange={handleInputChange}
                    className="appearance-none px-3 py-2 bg-white border border-gray-300 rounded text-sm text-gray-600 focus:outline-none focus:ring-1 focus:ring-orange-500 pr-8"
                  >
                    <option>einen der Begriffe</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-2.5 w-4 h-4 text-gray-600 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Checkbox */}
          <div className="mt-8 mb-8">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="nurMeineDokumente"
                checked={formData.nurMeineDokumente}
                onChange={handleInputChange}
                className="w-4 h-4 rounded bg-white border border-gray-300 cursor-pointer accent-orange-500"
              />
              <span className="text-sm text-gray-900">Nur meine Dokumente ( Test )</span>
            </label>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 justify-center">
            <button
              onClick={handleSubmit}
              className="px-8 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium rounded transition-colors"
            >
              Suchen
            </button>
            <button
              onClick={handleReset}
              className="px-8 py-2 bg-white hover:bg-gray-50 text-gray-900 text-sm font-medium rounded border border-gray-400 transition-colors"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}