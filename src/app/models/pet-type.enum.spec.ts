import { PetType } from './pet-type.enum';

describe('PetTypeEnum', () => {

  beforeEach(() => {
  });

  it('should getPetTypeFromText return matching enum value', () => {
    // defined types
    expect(PetType.getPetTypeFromText('dog')).toBe(PetType.DOG);
    expect(PetType.getPetTypeFromText('DOg')).toBe(PetType.DOG);
    expect(PetType.getPetTypeFromText('cat')).toBe(PetType.CAT);
    expect(PetType.getPetTypeFromText('CAT')).toBe(PetType.CAT);
    expect(PetType.getPetTypeFromText('fISH')).toBe(PetType.FISH);
    expect(PetType.getPetTypeFromText('Fish')).toBe(PetType.FISH);

    // unknown types
    expect(PetType.getPetTypeFromText('pig')).toBe(PetType.UNKNOWN);
    expect(PetType.getPetTypeFromText('monkey')).toBe(PetType.UNKNOWN);
    expect(PetType.getPetTypeFromText('')).toBe(PetType.UNKNOWN);
  });

  it('should getPetTypeEmoji return pet type emoji text', () => {
    // defined types
    expect(PetType.getPetTypeEmoji(PetType.DOG)).toBe('🐶');
    expect(PetType.getPetTypeEmoji(PetType.CAT)).toBe('🐱');
    expect(PetType.getPetTypeEmoji(PetType.FISH)).toBe('🐟');

    // unknown types
    expect(PetType.getPetTypeEmoji(PetType.UNKNOWN)).toBe('👽');
  });
});
