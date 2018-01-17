import { Serializable } from './serializable';
import { User } from './user';
import { Message } from './message';

export class Conversation extends Serializable {
  users: Array<User>;
  messages: Array<Message>;

  constructor() {
    super();
    this.messages = new Array<Message>();
    this.users = Array<User>();
  }
  
}
