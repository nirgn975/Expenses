import { User } from './user';

export interface Feed {
  _id: string;
  __v: number;
  date: string;
  messageTitle: string;
  messageBody: string;
  user: User;
}
