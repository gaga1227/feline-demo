import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPetsPipe } from '../../pipes/filter-pets';
import { OwnerCategoryComponent } from './owner-category.component';
import { Pet } from '../../models/pet';
import { Gender } from '../../models/gender.enum';
import { PetComponent } from '../pet/pet.component';
import { Owner } from '../../models/owner';
import { PetType } from '../../models/pet-type.enum';
import { SimpleChange } from '@angular/core';

describe('OwnerCategoryComponent', () => {
  let component: OwnerCategoryComponent;
  let fixture: ComponentFixture<OwnerCategoryComponent>;
  let testOwners: Array<Owner>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        OwnerCategoryComponent,
        PetComponent,
        FilterPetsPipe
      ]
    }).compileComponents();

    testOwners = [
      new Owner('Alice', Gender.FEMALE, 32, [
        new Pet('woof', PetType.DOG),
        new Pet('meow', PetType.CAT)
      ]),
      new Owner('Bob', Gender.FEMALE, 14, [
        new Pet('neal', PetType.DOG),
        new Pet('norry', PetType.CAT),
        new Pet('chips', PetType.FISH)
      ])
    ];
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component and update component view models', () => {
    // initial values
    _verifyViewModels(Gender.UNKNOWN, 0);

    // update input
    component.genderCategory = 'female';
    component.ngOnInit();

    // verify new updates
    _verifyViewModels(Gender.FEMALE, 0);

    // update owner input
    component.owners = testOwners;
    component.ngOnChanges({
      'owners': new SimpleChange([], testOwners, false)
    });

    // verify new updates
    _verifyViewModels(Gender.FEMALE, 5);
  });

  it('should not update owners pet view model if is invalid', () => {
    component.ngOnChanges({});

    // verify new updates
    _verifyViewModels(Gender.UNKNOWN, 0);
  });

  it('should return all owners all pets when target gender is unknown', () => {
    // update owner input
    component.owners = testOwners;
    component.ngOnChanges({
      'owners': new SimpleChange([], testOwners, false)
    });

    // verify new updates
    _verifyViewModels(Gender.UNKNOWN, 5);
  });

  // utils
  function _verifyViewModels(gender: Gender, ownersPetsCount: number) {
    expect(component).toBeDefined();
    expect(component.targetGender).toBe(gender);
    expect(component.targetOwnersPets).toBeDefined();
    expect(component.targetOwnersPets.length).toBe(ownersPetsCount);
  }
});
