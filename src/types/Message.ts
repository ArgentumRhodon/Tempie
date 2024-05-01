export interface Message {
  _id: string;
  chatID: string;
  senderID: string;
  senderName: string;
  text: string;
  createdAt: Date;
}
