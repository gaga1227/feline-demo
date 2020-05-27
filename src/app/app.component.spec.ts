import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { OwnersApiService } from './services/owners-api.service';

import { getOwnersResponse } from './shared/fixtures/owners-api.fixture';

describe('AppComponent', () => {
  let httpMock: HttpTestingController;
  let req: TestRequest;

  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let ownersApiService: OwnersApiService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        OwnersApiService
      ],
      imports: [
        HttpClientTestingModule
      ],
      schemas: [NO_ERRORS_SCHEMA] // not to error on unknown elements and attributes
    }).compileComponents();
  }));

  beforeEach(() => {
    ownersApiService = TestBed.get(OwnersApiService);
    httpMock = TestBed.get(HttpTestingController);

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // verify initial component states
    _verifyInitialStates();

    // verify initial owners data load request and return mock data
    req = httpMock.expectOne(ownersApiService.GET_OWNERS_ENDPOINT);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should load remote owners data and update component states', () => {
    req.flush(getOwnersResponse);
    _verifyCustomStates(true, false, 2, 'loading pet owners complete');
  });

  it('should load request error update component states', () => {
    req.error(new ErrorEvent('500'));
    _verifyCustomStates(false, true, 0, 'error loading pet owners');
  });

  // utils
  function _verifyCustomStates(isLoaded: boolean, isLoadError: boolean, ownersLength: number, announcement: string) {
    expect(component.isOwnerDataLoaded).toBe(isLoaded);
    expect(component.isOwnerDataLoadError).toBe(isLoadError);
    expect(component.owners.length).toBe(ownersLength);
    expect(component.announcementContent).toBe(announcement);
  }

  function _verifyInitialStates() {
    _verifyCustomStates(false, false, 0, 'loading pet owners in progress');
  }
});
