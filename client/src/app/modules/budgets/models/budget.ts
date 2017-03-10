import { Category } from '../../../models/category';
import { User } from '../../../models/user';

export interface Budget {
  _id: string;
  name: string;
  limit: number;
  currentAmount: number;
  categories: Array<Category>;
  users: Array<User>;
  __v: number;
}
