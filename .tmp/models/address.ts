import { Serializable } from './serializable';

export class Address extends Serializable {
  address: string;
  postalCode: string;
  city: string;
  country: string;
  //phone_number: string;
  coords: any;

  constructor(object = null) {
    super(object);
    if(object != null) {
      this.address = object.address;
      this.postalCode = object.postalCode;
      this.city = object.city;
      this.country = object.country;
      this.coords = object.coords;
    }
  }

  public get toString() {
    if(this.address == null || this.postalCode == null || this.city == null) {
      return null;
    }
    else {
      return this.address + ", " + this.postalCode + " " + this.city + ", " + this.country;
    }
  }
  
}
