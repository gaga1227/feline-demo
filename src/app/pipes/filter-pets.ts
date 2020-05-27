import { Pipe, PipeTransform } from '@angular/core';
import { Pet } from '../models/pet';
import { PetType } from '../models/pet-type.enum';

@Pipe({
  name: 'filterPets',
  pure: false
})

export class FilterPetsPipe implements PipeTransform {
  transform(array: Array<Pet>, petTypeText: string = ''): Array<Pet> {
    let result;
    const petType = PetType.getPetTypeFromText(petTypeText);

    if (petType === PetType.UNKNOWN) {
      if (petTypeText === '') {
        // return all pets on empty filter
        result = [...array];
      } else {
        // return nothing is filter pet type is unknown
        return [];
      }
    }

    // filter pets based on filter pet type text
    if (petTypeText !== '') {
      result = array.filter((pet: Pet) => {
        return pet.type === petType;
      });
    }

    // default sort pets based on name alphabetically
    result.sort((petA: Pet, petB: Pet) => {
      return petA.name >= petB.name ? 1 : -1;
    });

    return result;
  }
}
