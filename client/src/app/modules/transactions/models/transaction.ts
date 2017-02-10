export interface Transaction {
  _id: string;
  amount: number;
  date: string;
  type: string;
  description: string;
  category: string;
  __v: number;
  coordinates: string;
}
