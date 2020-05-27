import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { OwnerCategoryComponent } from './components/owner-category/owner-category.component';
import { PetComponent } from './components/pet/pet.component';
import { FilterPetsPipe } from './pipes/filter-pets';

@NgModule({
  declarations: [
    AppComponent,
    OwnerCategoryComponent,
    PetComponent,
    FilterPetsPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [], // use '@Injectable providedIn' now
  bootstrap: [AppComponent]
})
export class AppModule {
}
