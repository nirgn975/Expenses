import { User } from './user';

export interface Feed {
  _id: string;
  __v: number;
  date: string;
  message_title: string;
  message_body: string;
  user: User;
}
