import { TestBed } from '@angular/core/testing';

import { PetType } from './pet-type.enum';
import { Pet } from './pet';

describe('Pet', () => {

  beforeEach(() => {
  });

  it('should populate assigned values when constructed', () => {
    const name = 'Felix';
    const type = PetType.CAT;
    const pet = new Pet(name, type);

    expect(pet.name).toBe(name);
    expect(pet.type).toBe(type);
  });
});
