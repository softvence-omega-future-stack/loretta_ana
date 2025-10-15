import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Overdue = () => {
  const [subgroupFrom, setSubgroupFrom] = useState("");
  const [subgroupTo, setSubgroupTo] = useState("");
  const [boelsDepot, setBoelsDepot] = useState("");

  const [e57aFrom, setE57aFrom] = useState<Date | null>(new Date("2025-08-07"));
  const [e57aTo, setE57aTo] = useState<Date | null>(null);
  const [externOveFrom, setExternOveFrom] = useState<Date | null>(new Date("2025-08-07"));
  const [externOveTo, setExternOveTo] = useState<Date | null>(null);
  const [tpgFrom, setTpgFrom] = useState<Date | null>(null);
  const [tpgTo, setTpgTo] = useState<Date | null>(null);
  const [internFrom, setInternFrom] = useState<Date | null>(null);
  const [internTo, setInternTo] = useState<Date | null>(null);

  const handleSearch = () => console.log("Searching...");
  const handleReset = () => {
    setSubgroupFrom("");
    setSubgroupTo("");
    setBoelsDepot("");
    setE57aFrom(new Date("2025-08-07"));
    setE57aTo(null);
    setExternOveFrom(new Date("2025-08-07"));
    setExternOveTo(null);
    setTpgFrom(null);
    setTpgTo(null);
    setInternFrom(null);
    setInternTo(null);
  };

  return (
    <div className="flex flex-col w-full p-7 sm:p-8 border bg-white border-gray-300 rounded-xl shadow-sm">
      <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-800">Overdue</h2>

      <p className="text-sm text-gray-600 mb-3">
        Schreiben Sie die Subgruppe der betreffenden Geräte bitte links in BEIDE Felder, z.B.:
      </p>

      {/* Checkbox List */}
      <div className="flex flex-wrap gap-4 mb-4 text-sm">
        {[
          "11607 für Elektroprüfung ÖVE",
          "13191 für Intern §§",
          "16011 für §57a",
          "12986 für TPG-Hebetechnik §78",
        ].map((label, i) => (
          <label key={i} className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4 accent-orange-500" defaultChecked />
            <span>{label}</span>
          </label>
        ))}
      </div>

      <p className="text-sm text-gray-600 mb-6">
        und in das rechte Datumsfeld das heutige Datum
      </p>

      {/* Input Form Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Left Column */}
        <div className="space-y-5">
          <LabeledInput
            label="Subgruppe:"
            leftValue={subgroupFrom}
            rightValue={subgroupTo}
            onLeftChange={setSubgroupFrom}
            onRightChange={setSubgroupTo}
          />

          <LabeledDateRange
            label="§57a gültig bis:"
            from={e57aFrom}
            to={e57aTo}
            setFrom={setE57aFrom}
            setTo={setE57aTo}
          />

          <LabeledDateRange
            label="TPG-Hebetechnik §78 gültig bis:"
            from={tpgFrom}
            to={tpgTo}
            setFrom={setTpgFrom}
            setTo={setTpgTo}
          />
        </div>

        {/* Right Column */}
        <div className="space-y-5">
          <SingleInput
            label="Boels Depot:"
            value={boelsDepot}
            onChange={setBoelsDepot}
          />

          <LabeledDateRange
            label="Elektro ÖVE E8701/E8001 gültig bis:"
            from={externOveFrom}
            to={externOveTo}
            setFrom={setExternOveFrom}
            setTo={setExternOveTo}
          />

          <LabeledDateRange
            label="Intern §§11 gültig bis:"
            from={internFrom}
            to={internTo}
            setFrom={setInternFrom}
            setTo={setInternTo}
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-4">
        <button
          onClick={handleSearch}
          className="px-8 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors font-medium shadow-sm"
        >
          Suchen
        </button>
        <button
          onClick={handleReset}
          className="px-8 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors font-medium"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

/* ------------------- Reusable Components ------------------- */

interface LabeledInputProps {
  label: string;
  leftValue: string;
  rightValue: string;
  onLeftChange: (value: string) => void;
  onRightChange: (value: string) => void;
}

const LabeledInput = ({
  label,
  leftValue,
  rightValue,
  onLeftChange,
  onRightChange,
}: LabeledInputProps) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
    <div className="flex gap-2 items-center">
      <input
        type="text"
        value={leftValue}
        onChange={(e) => onLeftChange(e.target.value)}
        placeholder="Example"
        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"
      />
      <span className="text-gray-600">bis</span>
      <input
        type="text"
        value={rightValue}
        onChange={(e) => onRightChange(e.target.value)}
        placeholder="Example"
        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"
      />
    </div>
  </div>
);

interface LabeledDateRangeProps {
  label: string;
  from: Date | null;
  to: Date | null;
  setFrom: (date: Date | null) => void;
  setTo: (date: Date | null) => void;
}

const LabeledDateRange = ({
  label,
  from,
  to,
  setFrom,
  setTo,
}: LabeledDateRangeProps) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
    <div className="flex gap-2 items-center">
      <DateField date={from} onChange={setFrom} />
      <span className="text-gray-600">bis</span>
      <DateField date={to} onChange={setTo} />
    </div>
  </div>
);

interface SingleInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const SingleInput = ({ label, value, onChange }: SingleInputProps) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Example"
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"
    />
  </div>
);

/* ✅ FIXED: Calendar icon now appears *inside* the date input field */
interface DateFieldProps {
  date: Date | null;
  onChange: (date: Date | null) => void;
}

const DateField = ({ date, onChange }: DateFieldProps) => (
  <div className="relative flex-1">
    <DatePicker
      selected={date}
      onChange={onChange}
      dateFormat="d-MMM-yyyy"
      placeholderText="Choose date"
      className="w-full px-3 py-2 pr-9 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 text-gray-700 cursor-pointer"
      calendarClassName="rounded-lg shadow-lg border border-gray-200"
      popperPlacement="bottom-start"
    />
  </div>
);

export default Overdue;
