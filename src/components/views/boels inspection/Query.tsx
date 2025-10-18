import React, { useState } from 'react';
import { ChevronDown} from 'lucide-react';

interface FormData {
  artDerPruefung: string;
  geprueftVon: string;
  maschinenummer: string;
  geprueftInDepot: string;
  zeitraumVon: string;
  zeitraumBis: string;
  nurMeineDokumente: boolean;
}

export default function BoelsInspectionQuery() {
  const [formData, setFormData] = useState<FormData>({
    artDerPruefung: 'Choose One',
    geprueftVon: '',
    maschinenummer: '',
    geprueftInDepot: 'Choose One',
    zeitraumVon: '',
    zeitraumBis: '',
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
      artDerPruefung: 'Choose One',
      geprueftVon: '',
      maschinenummer: '',
      geprueftInDepot: 'Choose One',
      zeitraumVon: '',
      zeitraumBis: '',
      nurMeineDokumente: true,
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h1 className="text-2xl font-normal text-gray-900 mb-8">Query</h1>

        <div>
          {/* Form Grid */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-10">
            {/* Row 1 */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-3">
                Art der Prüfung:
              </label>
              <div className="relative">
                <select
                  name="artDerPruefung"
                  value={formData.artDerPruefung}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded text-sm text-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-500 appearance-none pr-8"
                >
                  <option>Choose One</option>
                </select>
                <ChevronDown className="absolute right-2 top-2.5 w-4 h-4 text-gray-600 pointer-events-none" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-3">
                Geprüft von:
              </label>
              <input
                type="text"
                name="geprueftVon"
                value={formData.geprueftVon}
                onChange={handleInputChange}
                placeholder="Example"
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-500"
              />
            </div>

            {/* Row 2 */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-3">
                Maschine Nummer:
              </label>
              <input
                type="text"
                name="maschinenummer"
                value={formData.maschinenummer}
                onChange={handleInputChange}
                placeholder="Example"
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-3">
                Geprüft in Depot:
              </label>
              <div className="relative">
                <select
                  name="geprueftInDepot"
                  value={formData.geprueftInDepot}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded text-sm text-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-500 appearance-none pr-8"
                >
                  <option>Choose One</option>
                </select>
                <ChevronDown className="absolute right-2 top-2.5 w-4 h-4 text-gray-600 pointer-events-none" />
              </div>
            </div>

            {/* Row 3 */}
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-900 mb-3">
                Zeitraum:
              </label>
              <div className="flex gap-3 items-center">
                <div className="relative flex-1">
                  <input
                    type="date"
                    name="zeitraumVon"
                    value={formData.zeitraumVon}
                    onChange={handleInputChange}
                    placeholder="Choose date"
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-500"
                  />
                  {/* <Calendar className="absolute right-3 top-2.5 w-4 h-4 text-orange-500 pointer-events-none" /> */}
                </div>
                <span className="text-gray-500 text-sm font-medium">bis</span>
                <div className="relative flex-1">
                  <input
                    type="date"
                    name="zeitraumBis"
                    value={formData.zeitraumBis}
                    onChange={handleInputChange}
                    placeholder="Choose date"
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-500"
                  />
                  {/* <Calendar className="absolute right-3 top-2.5 w-4 h-4 text-orange-500 pointer-events-none" /> */}
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