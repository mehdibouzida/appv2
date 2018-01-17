import { Serializable } from './serializable';
import { Address } from './address';

export class User extends Serializable {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  avatar: string;
  address: Address;
  birthDate: Date;

  constructor(object = null, id : string = null) {
    super();
    if(id != null) this.id = id;
    if (object != null) {
      this.firstName= object.firstName;
      this.lastName= object.lastName;
      this.email= object.email;
      this.phoneNumber= object.phoneNumber;
      this.avatar= object.avatar;
      this.address= object.address;
      this.birthDate = object.birthate;
      this.address = new Address(object.address);
    }
  }

  /**
   * Check if user profile has all necessary information
   * -> firstName, lastName, phoneNumber, address
   * @readonly
   * @type {boolean}
   * @memberOf User
   */
  isProfileComplete(): boolean {
    console.log("------------current user---------------");
    console.log(this);
    console.log("---------------------------");
    console.log("Firstname");
    console.log(this.firstName);
    console.log("lastName");
    console.log(this.lastName);
    console.log("email");
    console.log(this.email);
    console.log("phoneNumber");
    console.log(this.phoneNumber);
    if (this.firstName != null && this.firstName != "" &&
      this.lastName != null && this.lastName != "" &&
      this.phoneNumber != null && this.phoneNumber != "" && this.address != null) {
      console.log("isProfileComplete true");
      return true;
    }
    else {
      console.log("isProfileComplete false");
      return false;
    }
  }
}
