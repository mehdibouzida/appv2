import { Serializable } from './serializable';
import { User } from './user';
import { Conversation } from './conversation';

export class Message extends Serializable {
  sender: User;
  message: string;
  created_at: Date;
  conversation: Conversation;
  status: number;

  constructor(object?: any) {
    super();
    this.sender = new User();
    this.created_at = new Date();
    this.conversation = new Conversation();
    this.status = 0;
  }

  get date_string(): string {
    var res = this.created_at.toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' });
    return res;
  }

}
