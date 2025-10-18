import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FormData {
  ersatzteilnummer: string;
  bezeichnung: string;
  herstellernummer: string;
  lieferant: string;
  produktgruppe: string;
  lagerstandVon: string;
  lagerstandBis: string;
  lagerort: string;
  zusatzinfo: string;
  volltextsuche: string;
  wortgruppe: string;
  nurMeineDokumente: boolean;
}

export default function QueryForm() {
  const [formData, setFormData] = useState<FormData>({
    ersatzteilnummer: '',
    bezeichnung: '',
    herstellernummer: '',
    lieferant: '',
    produktgruppe: '',
    lagerstandVon: '',
    lagerstandBis: '',
    lagerort: '',
    zusatzinfo: '',
    volltextsuche: '',
    wortgruppe: 'exakte Wortgruppe',
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
      ersatzteilnummer: '',
      bezeichnung: '',
      herstellernummer: '',
      lieferant: '',
      produktgruppe: '',
      lagerstandVon: '',
      lagerstandBis: '',
      lagerort: '',
      zusatzinfo: '',
      volltextsuche: '',
      wortgruppe: 'exakte Wortgruppe',
      nurMeineDokumente: true,
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      <div className=" bg-white rounded-lg p-10 border border-gray-200">
        <h1 className="text-2xl font-light text-gray-900 mb-10">Query</h1>

        <div>
          {/* Form Grid */}
          <div className="grid grid-cols-2 gap-x-20 gap-y-10 mb-10">
            {/* Row 1 */}
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">
                Ersatzteilnummer:
              </label>
              <input
                type="text"
                name="ersatzteilnummer"
                value={formData.ersatzteilnummer}
                onChange={handleInputChange}
                placeholder="Example"
                className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded text-sm text-gray-500 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-gray-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">
                Bezeichnung:
              </label>
              <input
                type="text"
                name="bezeichnung"
                value={formData.bezeichnung}
                onChange={handleInputChange}
                placeholder="Example"
                className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded text-sm text-gray-500 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-gray-400"
              />
            </div>

            {/* Row 2 */}
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">
                Herstellernummer:
              </label>
              <input
                type="text"
                name="herstellernummer"
                value={formData.herstellernummer}
                onChange={handleInputChange}
                placeholder="Example"
                className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded text-sm text-gray-500 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-gray-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">
                Lieferant:
              </label>
              <input
                type="text"
                name="lieferant"
                value={formData.lieferant}
                onChange={handleInputChange}
                placeholder="Example"
                className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded text-sm text-gray-500 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-gray-400"
              />
            </div>

            {/* Row 3 */}
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">
                Produktgruppe:
              </label>
              <input
                type="text"
                name="produktgruppe"
                value={formData.produktgruppe}
                onChange={handleInputChange}
                placeholder="Example"
                className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded text-sm text-gray-500 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-gray-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">
                Lagerstand:
              </label>
              <div className="flex gap-3 items-center">
                <input
                  type="date"
                  name="lagerstandVon"
                  value={formData.lagerstandVon}
                  onChange={handleInputChange}
                  className="flex-1 px-3 py-2 bg-gray-100 border border-gray-300 rounded text-sm text-gray-500 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-gray-400"
                />
                <span className="text-gray-500 text-sm font-medium">bis</span>
                <input
                  type="date"
                  name="lagerstandBis"
                  value={formData.lagerstandBis}
                  onChange={handleInputChange}
                  className="flex-1 px-3 py-2 bg-gray-100 border border-gray-300 rounded text-sm text-gray-500 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-gray-400"
                />
              </div>
            </div>

            {/* Row 4 */}
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">
                Lagerort:
              </label>
              <input
                type="text"
                name="lagerort"
                value={formData.lagerort}
                onChange={handleInputChange}
                placeholder="Example"
                className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded text-sm text-gray-500 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-gray-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">
                Zusatzinfo:
              </label>
              <input
                type="text"
                name="zusatzinfo"
                value={formData.zusatzinfo}
                onChange={handleInputChange}
                placeholder="Example"
                className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded text-sm text-gray-500 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-gray-400"
              />
            </div>

            {/* Row 5 - Full text search */}
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-800 mb-2">
                Volltextsuche:
              </label>
              <div className="flex gap-2 items-center">
                <input
                  type="text"
                  name="volltextsuche"
                  value={formData.volltextsuche}
                  onChange={handleInputChange}
                  placeholder="Choose or Type manually"
                  className="flex-1 px-3 py-2 bg-gray-100 border border-gray-300 rounded text-sm text-gray-500 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-gray-400"
                />
                <span className="text-gray-500 px-2">|</span>
                <div className="relative">
                  <select
                    name="wortgruppe"
                    value={formData.wortgruppe}
                    onChange={handleInputChange}
                    className="appearance-none px-3 py-2 bg-white border border-gray-300 rounded text-sm text-gray-800 focus:outline-none focus:border-gray-400 pr-8"
                  >
                    <option>exakte Wortgruppe</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-2.5 w-4 h-4 text-gray-600 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Checkbox */}
          <div className="mb-8">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="nurMeineDokumente"
                checked={formData.nurMeineDokumente}
                onChange={handleInputChange}
                className="w-4 h-4 rounded bg-white border-2 border-gray-300 cursor-pointer accent-orange-500"
              />
              <span className="text-sm text-gray-800">Nur meine Dokumente ( Test )</span>
            </label>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 justify-center">
            <button
              onClick={handleSubmit}
              className="px-12 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium rounded transition-colors"
            >
              Suchen
            </button>
            <button
              onClick={handleReset}
              className="px-12 py-2.5 bg-white hover:bg-gray-50 text-gray-900 text-sm font-medium rounded border-2 border-gray-400 transition-colors"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}