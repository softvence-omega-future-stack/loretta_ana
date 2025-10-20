export type ActionStatus = "Service Telematics!" | "Reparatur!" | "Check!";

export type WorkLog = {
  id: string;
  date: string;
  machineTitle: string;
  boelsNumber: string;
  wert: number;
  technician: string;
  depot: string;
  actionStatus: ActionStatus;
  serialNumber?: string;
  purchaseDate?: string;
  internalDepotDays?: string;
  lastServiceDate?: string;
  workStatus?: string;
  statusText?: string;
  repairDescription?: string;
  repairDate?: string;
  workHours?: string;
  lastMVNumber?: string;
  documents?: Array<{
    id: string;
    number: string;
    name: string;
    supplier: string;
    depot: string;
    listPrice: string;
    purchasePrice: string;
    image: string;
  }>;
  files?: Array<{
    id: string;
    date: string;
    name: string;
    size: string;
    icon: string;
  }>;
};
