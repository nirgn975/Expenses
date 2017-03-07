import { Category } from './category';
import { User } from '../../../models/user';

export interface Transaction {
  _id: string;
  amount: number;
  date: string;
  type: string;
  description: string;
  category: Category;
  user: User;
  __v: number;
  coordinates: Array<number>;
}
