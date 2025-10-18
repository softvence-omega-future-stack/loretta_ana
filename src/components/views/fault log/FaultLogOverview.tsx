import React, { useState } from "react";
import { Truck } from "lucide-react";

// ==========================================
// Types
// ==========================================
type ExpenseStatus = 
  | "Provisorisch Rep.!" 
  | "Telefonisch erledigt!" 
  | "Repariert !" 
  | "Gerät Austauschen !";

type ExpenseItem = {
  id: string;
  date: string;
  number: string;
  description: string;
  location: string;
  status: ExpenseStatus;
  bocsar: string;
  kst: string;
};

// ==========================================
// ExpenseRow Component (Reusable)
// ==========================================
type ExpenseRowProps = {
  item: ExpenseItem;
};

const ExpenseRow: React.FC<ExpenseRowProps> = ({ item }) => {
  const getStatusColor = (status: ExpenseStatus) => {
    switch (status) {
      case "Provisorisch Rep.!":
        return "text-yellow-600";
      case "Telefonisch erledigt!":
        return "text-blue-600";
      case "Repariert !":
        return "text-green-600";
      case "Gerät Austauschen !":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-200 hover:bg-gray-50 transition-colors text-sm">
      {/* Truck Icon */}
      <div className="flex-shrink-0">
        <Truck size={18} className="text-gray-700" />
      </div>

      {/* Date */}
      <div className="flex-shrink-0 w-20">
        <span className="text-gray-700">Am: </span>
        <span className="text-blue-600 font-medium">{item.date}</span>
      </div>

      {/* Number */}
      <div className="flex-shrink-0 w-24">
        <span className="text-red-600 font-medium">{item.number}</span>
      </div>

      {/* Description */}
      <div className="flex-1 min-w-0">
        <span className="text-gray-700">{item.description}</span>
      </div>

      {/* Location */}
      <div className="flex-shrink-0 w-28">
        <span className="text-blue-600 font-medium">{item.location}</span>
      </div>

      {/* Status Label */}
      <div className="flex-shrink-0">
        <span className="text-gray-700">Abgerechnet:</span>
      </div>

      {/* Status Value */}
      <div className="flex-shrink-0 w-40">
        <span className={`font-semibold ${getStatusColor(item.status)}`}>
          {item.status}
        </span>
      </div>

      {/* Bocsar */}
      <div className="flex-shrink-0 w-16">
        <span className="text-blue-600 font-medium cursor-pointer hover:underline">
          {item.bocsar}
        </span>
      </div>

      {/* Kst */}
      <div className="flex-shrink-0 w-20">
        <span className="text-gray-700">Kst.: </span>
        <span className="text-green-600 font-medium">{item.kst}</span>
      </div>
    </div>
  );
};

// ==========================================
// Main FaultLogOverview Component
// ==========================================
const FaultLogOverview: React.FC = () => {
  const [expenses] = useState<ExpenseItem[]>([
    {
      id: "1",
      date: "02.06.2025",
      number: "116070462",
      description: "GPS ausgebaut",
      location: "1225 Wien",
      status: "Provisorisch Rep.!",
      bocsar: "Bocsar",
      kst: ""
    },
    {
      id: "2",
      date: "20.09.2022",
      number: "116070462",
      description: "Batterie erneuert, statt 110A 95 A",
      location: "2263 Dürnkrut",
      status: "Telefonisch erledigt!",
      bocsar: "Bocsar",
      kst: "kd"
    },
    {
      id: "3",
      date: "20.09.2022",
      number: "116070462",
      description: "Batterie erneuert, statt 110A 95 A",
      location: "2263 Dürnkrut",
      status: "Repariert !",
      bocsar: "Bocsar",
      kst: "int"
    },
    {
      id: "4",
      date: "20.09.2022",
      number: "116070462",
      description: "Batterie erneuert, statt 110A 95 A",
      location: "2263 Dürnkrut",
      status: "Repariert !",
      bocsar: "Bocsar",
      kst: "int"
    },
    {
      id: "5",
      date: "20.09.2022",
      number: "116070462",
      description: "Batterie erneuert, statt 110A 95 A",
      location: "2263 Dürnkrut",
      status: "Gerät Austauschen !",
      bocsar: "Bocsar",
      kst: "int"
    },
    {
      id: "6",
      date: "20.09.2022",
      number: "116070462",
      description: "Batterie erneuert, statt 110A 95 A",
      location: "2263 Dürnkrut",
      status: "Repariert !",
      bocsar: "Bocsar",
      kst: "int"
    },
    {
      id: "7",
      date: "20.09.2022",
      number: "116070462",
      description: "Batterie erneuert, statt 110A 95 A",
      location: "2263 Dürnkrut",
      status: "Repariert !",
      bocsar: "Bocsar",
      kst: "int"
    },
    {
      id: "8",
      date: "20.09.2022",
      number: "116070462",
      description: "Batterie erneuert, statt 110A 95 A",
      location: "2263 Dürnkrut",
      status: "Repariert !",
      bocsar: "Bocsar",
      kst: "int"
    },
    {
      id: "9",
      date: "20.09.2022",
      number: "116070462",
      description: "Batterie erneuert, statt 110A 95 A",
      location: "2263 Dürnkrut",
      status: "Repariert !",
      bocsar: "Bocsar",
      kst: "int"
    },
    {
      id: "10",
      date: "20.09.2022",
      number: "116070462",
      description: "Batterie erneuert, statt 110A 95 A",
      location: "2263 Dürnkrut",
      status: "Repariert !",
      bocsar: "Bocsar",
      kst: "int"
    },
    {
      id: "11",
      date: "20.09.2022",
      number: "116070462",
      description: "Batterie erneuert, statt 110A 95 A",
      location: "2263 Dürnkrut",
      status: "Repariert !",
      bocsar: "Bocsar",
      kst: "int"
    },
    {
      id: "12",
      date: "20.09.2022",
      number: "116070462",
      description: "Batterie erneuert, statt 110A 95 A",
      location: "2263 Dürnkrut",
      status: "Gerät Austauschen !",
      bocsar: "Bocsar",
      kst: "int"
    },
    {
      id: "13",
      date: "02.06.2025",
      number: "116070462",
      description: "GPS ausgebaut",
      location: "1225 Wien",
      status: "Provisorisch Rep.!",
      bocsar: "Bocsar",
      kst: ""
    },
    {
      id: "14",
      date: "20.09.2022",
      number: "116070462",
      description: "Batterie erneuert, statt 110A 95 A",
      location: "2263 Dürnkrut",
      status: "Gerät Austauschen !",
      bocsar: "Bocsar",
      kst: "int"
    },
    {
      id: "15",
      date: "20.09.2022",
      number: "116070462",
      description: "Batterie erneuert, statt 110A 95 A",
      location: "2263 Dürnkrut",
      status: "Gerät Austauschen !",
      bocsar: "Bocsar",
      kst: "int"
    },
    {
      id: "16",
      date: "20.09.2022",
      number: "116070462",
      description: "Batterie erneuert, statt 110A 95 A",
      location: "2263 Dürnkrut",
      status: "Gerät Austauschen !",
      bocsar: "Bocsar",
      kst: "int"
    },
    {
      id: "17",
      date: "20.09.2022",
      number: "116070462",
      description: "Batterie erneuert, statt 110A 95 A",
      location: "2263 Dürnkrut",
      status: "Gerät Austauschen !",
      bocsar: "Bocsar",
      kst: "int"
    },
    {
      id: "18",
      date: "20.09.2022",
      number: "116070462",
      description: "Batterie erneuert, statt 110A 95 A",
      location: "2263 Dürnkrut",
      status: "Gerät Austauschen !",
      bocsar: "Bocsar",
      kst: "int"
    },
    {
      id: "19",
      date: "20.09.2022",
      number: "116070462",
      description: "Batterie erneuert, statt 110A 95 A",
      location: "2263 Dürnkrut",
      status: "Repariert !",
      bocsar: "Bocsar",
      kst: "int"
    },
    {
      id: "20",
      date: "20.09.2022",
      number: "116070462",
      description: "Batterie erneuert, statt 110A 95 A",
      location: "2263 Dürnkrut",
      status: "Repariert !",
      bocsar: "Bocsar",
      kst: "int"
    },
    {
      id: "21",
      date: "20.09.2022",
      number: "116070462",
      description: "Batterie erneuert, statt 110A 95 A",
      location: "2263 Dürnkrut",
      status: "Repariert !",
      bocsar: "Bocsar",
      kst: "int"
    }
  ]);

  return (
    <div className="min-h-screen">
      <div className="w-full">
        {/* Results List */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          {expenses.map((expense) => (
            <ExpenseRow key={expense.id} item={expense} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaultLogOverview;