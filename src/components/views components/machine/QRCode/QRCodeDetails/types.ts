export type QrCode = {
  id: string;
  image: string;
  title: string;
  subgroup: string;
  boelsNr: string;
  serienNr: string;
  importantInfo: string;
  status: "active" | "expired" | "pending";
};

