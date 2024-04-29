export interface User {
  username: string;
  _id: string;
  friends: User[];
}
