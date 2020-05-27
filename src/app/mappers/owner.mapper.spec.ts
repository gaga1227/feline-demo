import { TestBed } from '@angular/core/testing';

import { OwnerMapper } from './owner.mapper';
import { Owner } from '../models/owner';
import { getOwnersResponse } from '../shared/fixtures/owners-api.fixture';
import { Gender } from '../models/gender.enum';
import { Pet } from '../models/pet';
import { PetType } from '../models/pet-type.enum';

describe('OwnerMapper', () => {

  beforeEach(() => {
  });

  it('should map response data into Owners', () => {
    const owners: Array<Owner> = OwnerMapper.transform(getOwnersResponse);

    // verify list
    expect(owners.length).toBe(2);

    // verify individual items
    verifyMappedItem1(owners[0]);
    // verifyMappedItem2(owners[1]);
  });
});

// utils
function verifyMappedItem1(item: Owner) {
  expect(item.name).toBe('Bob');
  expect(item.gender).toBe(Gender.MALE);
  expect(item.age).toBe(23);
  expect(item.pets).toBeDefined();
  expect(item.pets.length).toBe(2);

  // verify pets
  verifyPet(item.pets[0], 'Garfield', PetType.CAT);
  verifyPet(item.pets[1], 'Fido', PetType.DOG);
}

function verifyMappedItem2(item: Owner) {
  expect(item.name).toBe('Jennifer');
  expect(item.gender).toBe(Gender.FEMALE);
  expect(item.age).toBe(18);
  expect(item.pets).toBeDefined();
  expect(item.pets.length).toBe(0);
}

function verifyPet(item: Pet, petName: string, petType: PetType) {
  expect(item.name).toBe(petName);
  expect(item.type).toBe(petType);
}
