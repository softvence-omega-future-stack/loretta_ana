export interface Machine {
  id: string;
  image: string;
  title: string;
  subgroup: string;
  boelsNr: string;
  serienNr: string;
  ext: string;
  intern: string;
  letzRuckname: string;
  wichtigInform: string;
  status: 'available' | 'maintenance' | 'rented';
}

export interface Document {
  date: string;
  machineNumber: string;
  description: string;
  size: string;
  depot: string;
  user: string;
  remark: string;
}
