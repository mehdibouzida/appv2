import { Serializable } from './serializable';
import { User } from './user';
import { Dish } from './dish';

export class Order extends Serializable {
  userId: User;
  totalPrice: number;
  dishId: string;
  quantity: number;
  dish: Dish;
  
  constructor(object = null) {
    super(object);
    if(object != null) {
      this.dishId = object.dishId;
      this.userId = object.userId;
      this.quantity = object.quantity;
      this.totalPrice = object.totalPrice;
    }
  }

}
