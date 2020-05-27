import { Gender } from './gender.enum';
import { Pet } from './pet';

export class Owner {
  name: string;
  gender: Gender;
  age: number;
  pets: Array<Pet>;

  constructor(name: string, gender: Gender, age: number, pets: Array<Pet>) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.pets = pets;
  }
}
