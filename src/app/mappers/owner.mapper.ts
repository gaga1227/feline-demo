import { Owner } from '../models/owner';
import { Pet } from '../models/pet';
import { Gender } from '../models/gender.enum';
import { PetType } from '../models/pet-type.enum';

export class OwnerMapper {

  /**
   * transform - map owner response data object list to list of Owner
   *
   * @returns {Array<Owner>}
   */
  static transform(data: any[]) {
    const ownersData = [...data];
    const dataLength = ownersData.length;
    const owners: Array<Owner> = [];

    for (let i = 0; i < dataLength; i++) {
      const {name, gender, age, pets} = ownersData[i];
      const petsData = Array.isArray(pets) ? pets : [];
      const ownerPets = [];
      const petsDataLength = petsData.length;

      for (let j = 0; j < petsDataLength; j++) {
        const petData = petsData[j];
        ownerPets.push(new Pet(petData.name, PetType.getPetTypeFromText(petData.type)));
      }

      owners.push(new Owner(name, Gender.getGenderFromText(gender), age, ownerPets));
    }

    return owners;
  }
}
