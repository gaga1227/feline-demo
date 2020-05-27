import { Gender } from './gender.enum';

describe('GenderEnum', () => {

  beforeEach(() => {
  });

  it('should getGenderFromText return matching enum value', () => {
    // defined types
    expect(Gender.getGenderFromText('male')).toBe(Gender.MALE);
    expect(Gender.getGenderFromText('mALE')).toBe(Gender.MALE);
    expect(Gender.getGenderFromText('FEmale')).toBe(Gender.FEMALE);
    expect(Gender.getGenderFromText('fEMaLe')).toBe(Gender.FEMALE);

    // unknown types
    expect(Gender.getGenderFromText('n/a')).toBe(Gender.UNKNOWN);
    expect(Gender.getGenderFromText('')).toBe(Gender.UNKNOWN);
  });
});
