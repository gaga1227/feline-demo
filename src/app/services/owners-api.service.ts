import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnersApiService {

  // endpoint constant
  readonly GET_OWNERS_ENDPOINT = 'assets/owners.json';

  constructor(private httpClient: HttpClient) {
  }

  public getOwners(): Observable<any> {
    return this.httpClient.get(this.GET_OWNERS_ENDPOINT);
  }
}
