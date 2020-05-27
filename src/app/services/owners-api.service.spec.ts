import { async, inject, TestBed } from '@angular/core/testing';

import { OwnersApiService } from './owners-api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { getOwnersResponse } from '../shared/fixtures/owners-api.fixture';

describe('OwnersAPIService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OwnersApiService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should return owners data when call getOwners()', async(inject(
    [HttpTestingController, OwnersApiService],
    (httpMock: HttpTestingController, ownersAPIService: OwnersApiService) => {

      // call service method
      ownersAPIService.getOwners().subscribe(data => {
        // verify partial mocked data
        expect(data.length).toBe(2);
        expect(data[0].name).toBe(getOwnersResponse[0].name);
        expect(data[0].gender).toBe(getOwnersResponse[0].gender);
        expect(data[0].age).toBe(getOwnersResponse[0].age);
        expect(data[0].pets).toBe(getOwnersResponse[0].pets);
        expect(data[1].name).toBe(getOwnersResponse[1].name);
        expect(data[1].gender).toBe(getOwnersResponse[1].gender);
        expect(data[1].age).toBe(getOwnersResponse[1].age);
        expect(data[1].pets).toBe(getOwnersResponse[1].pets);
      });

      // assert request
      const req = httpMock.expectOne(ownersAPIService.GET_OWNERS_ENDPOINT);
      expect(req.request.method).toEqual('GET');

      // return mock data
      req.flush(getOwnersResponse);
    })));
});
