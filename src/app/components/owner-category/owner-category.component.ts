import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Owner } from '../../models/owner';
import { Gender } from '../../models/gender.enum';
import { Pet } from '../../models/pet';

@Component({
  selector: 'app-owner-category',
  templateUrl: './owner-category.component.html',
  styleUrls: ['./owner-category.component.scss']
})
export class OwnerCategoryComponent implements OnInit, OnChanges {

  @Input() owners: Array<Owner> = [];
  @Input() genderCategory = 'n/a';

  targetGender = Gender.UNKNOWN;
  targetOwnersPets: Array<Pet> = [];

  constructor() {
  }

  ngOnInit(): void {
    this.targetGender = Gender.getGenderFromText(this.genderCategory);
  }

  ngOnChanges(changes: SimpleChanges) {
    // if owners input data is updated
    if (changes.owners !== undefined) {
      this.updateTargetOwners();
    }
  }

  /**
   * updateTargetOwners - returns a list of owners based on gender
   */
  updateTargetOwners() {
    const ownerDataList = this.owners;
    let targetOwners: Array<Owner> = [];

    // if no target gender specified, output all owners
    if (this.targetGender === Gender.UNKNOWN) {
      targetOwners = [...ownerDataList];
    } else {
      // otherwise find matching owners with target gender
      const ownerDataLength = ownerDataList.length;

      for (let i = 0; i < ownerDataLength; i++) {
        const owner = ownerDataList[i];
        const ownerGender = Gender.getGenderFromText(owner.gender);
        if (ownerGender === this.targetGender) {
          targetOwners.push(owner);
        }
      }
    }

    this.targetOwnersPets = this.getPetsFromTargetOwners(targetOwners);
  }

  /**
   * getPetsFromTargetOwners - get sorted pets from target owner list
   * @param targetOwners
   */
  getPetsFromTargetOwners(targetOwners: Array<Owner>) {
    const targetOwnersPets = targetOwners.reduce(
      (accumulator: Array<Pet>, currentValue: Owner): Array<Pet> => {
        return accumulator.concat(currentValue.pets);
      }, []);

    return targetOwnersPets.sort();
  }
}
