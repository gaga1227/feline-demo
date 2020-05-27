import { PetType } from './pet-type.enum';

export class Pet {
  name: string;
  type: PetType;

  constructor(name: string, type: PetType) {
    this.name = name;
    this.type = type;
  }
}
