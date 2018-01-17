import { Address } from './address';
import { Serializable } from './serializable';
//import { User } from './user';
//import { Order } from './order';

export class Dish extends Serializable {
  name: string;
  description: string;
  price: number;
  photo: string;
  sellerId: number;

  
  /**
   * Date et heure de début au format ISO (2016-11-14T16:56)
   * 
   * @type {string}
   * @memberOf Dish
   */
  dateStart: string;

  /**
   * Date et heure de fin au format ISO (2016-11-14T16:56)
   * 
   * @type {string}
   * @memberOf Dish
   */
  dateEnd: string;
  portionsNumber: number;
  orderedPortionsNumber: number;
  address: Address;
  //portionsLeft: number;
  //distance: string;

  constructor(object = null) {
    super(object);
    if(object == null) {
      this.name = null;
      this.description = null;
      this.price = null;
      this.photo = null;
      this.dateStart = null;
      this.dateEnd = null;
      this.address = new Address();
      this.orderedPortionsNumber = +0;
      this.portionsNumber = null;
      this.sellerId = null;
    }
    else {
      this.name = object.name;
      this.description = object.description;
      this.price = object.price;
      this.photo = object.photo;
      this.dateStart = object.dateStart;
      this.dateEnd = object.dateEnd;
      this.address = new Address(object.address);
      this.orderedPortionsNumber = object.orderedPortionsNumber;
      this.portionsNumber = object.portionsNumber;
      this.sellerId = object.sellerId;
    }
  }

  get dateString(): string {
    var res = new Date(Date.parse(this.dateStart)).toLocaleDateString();
    return res;
  }

  get timeStartString(): string {
    var res = new Date(Date.parse(this.dateStart)).toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit', timeZone: "UTC" });
    return res;
  }

  get timeEndString(): string {
    var res = new Date(Date.parse(this.dateEnd)).toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit', timeZone: "UTC" });
    return res;
  }

  get portionsLeftNumber(): number {
    var res = this.portionsNumber - this.orderedPortionsNumber;
    return res;
  }
}
