/**
 * PetType - pet biological type
 */
enum PetType {
  DOG = 'DOG',
  CAT = 'CAT',
  FISH = 'FISH',
  UNKNOWN = 'UNKNOWN',
}

namespace PetType {

  /**
   * getPetTypeFromText - returns pet type value from text
   *
   * @param {String} text  pet type data text
   * @returns {string}
   */
  export function getPetTypeFromText(text: string) {
    const petTypeText = text.toUpperCase();

    switch (petTypeText) {
      case PetType.DOG:
      case PetType.CAT:
      case PetType.FISH:
        return petTypeText;
      default:
        return PetType.UNKNOWN;
    }
  }

  /**
   * getPetTypeEmoji - returns pet type emoji text
   *
   * @param {PetType} petType  pet type data
   * @returns {string}
   */
  export function getPetTypeEmoji(petType: PetType) {
    switch (petType) {
      case PetType.DOG:
        return '🐶';
      case PetType.CAT:
        return '🐱';
      case PetType.FISH:
        return '🐟';
      default:
        return '👽';
    }
  }
}

export { PetType };
