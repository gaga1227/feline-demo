import { FilterPetsPipe } from './filter-pets';
import { Pet } from '../models/pet';
import { PetType } from '../models/pet-type.enum';

describe('FilterPets', () => {
  let pipe: FilterPetsPipe;
  const pets = [
    new Pet('B: cat 1', PetType.CAT),
    new Pet('A: cat 2', PetType.CAT),
    new Pet('Y: dog 1', PetType.DOG),
    new Pet('X: dog 2', PetType.DOG),
    new Pet('Z: fish', PetType.FISH),
    new Pet('M: pig', PetType.UNKNOWN)
  ];

  beforeEach(() => {
    pipe = new FilterPetsPipe();
  });

  it('should filter pets based on pet type input and sort alphabetically', () => {
    let filteredPets;

    // cats
    filteredPets = pipe.transform(pets, 'cat');
    // verify cats
    expect(filteredPets.length).toBe(2);
    expect(filteredPets[0].name).toBe('A: cat 2');
    expect(filteredPets[1].name).toBe('B: cat 1');

    // dogs
    filteredPets = pipe.transform(pets, 'DOG');
    // verify dogs
    expect(filteredPets.length).toBe(2);
    expect(filteredPets[0].name).toBe('X: dog 2');
    expect(filteredPets[1].name).toBe('Y: dog 1');

    // empty filter type, returns all
    filteredPets = pipe.transform(pets, '');
    expect(filteredPets.length).toBe(6);
    expect(filteredPets[0].name).toBe('A: cat 2');
    expect(filteredPets[5].name).toBe('Z: fish');

    // invalid type, returns none
    filteredPets = pipe.transform(pets, 'bird');
    expect(filteredPets).toBeDefined();
    expect(filteredPets.length).toBe(0);
  });
});
