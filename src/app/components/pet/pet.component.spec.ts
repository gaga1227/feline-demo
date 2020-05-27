import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetComponent } from './pet.component';
import { PetType } from '../../models/pet-type.enum';
import { Pet } from '../../models/pet';

describe('PetComponent', () => {
  let component: PetComponent;
  let fixture: ComponentFixture<PetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PetComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component and update component view models', () => {
    // initial values
    _verifyPet('', '');

    // update input
    component.pet = new Pet('Alex', PetType.DOG);
    component.ngOnInit();

    // verify new updates
    _verifyPet('Alex', '🐶');
  });

  // utils
  function _verifyPet(name: string, typeText: string) {
    expect(component).toBeDefined();
    expect(component.name).toBe(name);
    expect(component.typeText).toBe(typeText);
  }
});
