import { Category } from './category';

export interface Transaction {
  _id: string;
  amount: number;
  date: string;
  type: string;
  description: string;
  category: Category;
  user: string;
  __v: number;
  coordinates: Array<number>;
}
