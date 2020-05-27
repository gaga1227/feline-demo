import { TestBed } from '@angular/core/testing';

import { Owner } from './owner';
import { Gender } from './gender.enum';
import { PetType } from './pet-type.enum';
import { Pet } from './pet';

describe('Owner', () => {

  beforeEach(() => {
  });

  it('should populate assigned values when constructed', () => {
    const name = 'John';
    const gender = Gender.MALE;
    const age = 23;
    const pets = [new Pet('dory', PetType.FISH), new Pet('goofy', PetType.DOG)];
    const owner = new Owner(name, gender, age, pets);

    expect(owner.name).toBe(name);
    expect(owner.age).toBe(age);
    expect(owner.pets).toBeDefined();
    expect(owner.pets.length).toBeDefined(2);
  });
});
