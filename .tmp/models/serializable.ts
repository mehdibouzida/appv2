export abstract class Serializable {
  id : string;
  createdAt: number;

  constructor(object = null) {
    if(object == null) {
      this.id = null;
      this.createdAt = null;
    }
    else {
      this.id = object.id;
      this.createdAt = object.createdAt;
    }
  }
}
