/**
 * Gender - gender for owner, or pets
 */
enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  UNKNOWN = 'UNKNOWN'
}

namespace Gender {

  /**
   * getGenderFromText - returns gender value from text
   *
   * @param {String} text  gender data text
   * @returns {string}
   */
  export function getGenderFromText(text: string) {
    const genderText = text.toUpperCase();

    switch (genderText) {
      case Gender.MALE:
      case Gender.FEMALE:
        return genderText;
      default:
        return Gender.UNKNOWN;
    }
  }
}

export { Gender };
