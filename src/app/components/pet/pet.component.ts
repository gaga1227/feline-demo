import { Component, Input, OnInit } from '@angular/core';
import { Pet } from '../../models/pet';
import { PetType } from '../../models/pet-type.enum';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetComponent implements OnInit {

  @Input() pet: Pet = null;

  name = '';
  typeText = '';

  constructor() {
  }

  ngOnInit() {
    // update internal component vars from Pet
    if (this.pet !== null) {
      this.name = this.pet.name;
      this.typeText = PetType.getPetTypeEmoji(this.pet.type);
    }
  }
}
