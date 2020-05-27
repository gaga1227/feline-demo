import { Component, OnInit, Output } from '@angular/core';
import { OwnersApiService } from './services/owners-api.service';
import { Owner } from './models/owner';
import { OwnerMapper } from './mappers/owner.mapper';

@Component({
  selector: 'app-feline-demo',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  // remote owner data loading states
  @Output() isOwnerDataLoaded = false;
  @Output() isOwnerDataLoadError = false;

  // owners array mapped from remote API data
  @Output() owners: Array<Owner> = [];

  // for accessibility live announcements
  announcementContent = '';

  constructor(private ownersApi: OwnersApiService) {
  }

  ngOnInit() {
    this._loadRemoteOwners();
  }

  /**
   * _loadRemoteOwners - load remote owners from API service
   *
   * @private
   * @return {void}
   */
  private _loadRemoteOwners() {
    this._makeAnnouncement('loading pet owners in progress');
    this.ownersApi.getOwners()
      .subscribe(
        (data: any[]) => {
          this.isOwnerDataLoadError = false;
          this.owners = OwnerMapper.transform(data);

          const ownersCount = this.owners.length;
          this._makeAnnouncement(`${ownersCount} owner${ownersCount > 1 ? 's' : ''} loaded and displayed`);
        },
        errorResponse => {
          this.isOwnerDataLoadError = true;
          this._makeAnnouncement('error loading pet owners');
        },
        () => {
          this.isOwnerDataLoaded = true;
          this._makeAnnouncement('loading pet owners complete');
        });
  }

  /**
   * _makeAnnouncement - method to update aria-live property value
   *
   * @param {string} text
   * @private
   * @return {void}
   */
  private _makeAnnouncement(text = '') {
    this.announcementContent = text;
  }
}
