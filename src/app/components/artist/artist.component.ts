import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { map, mergeMap } from 'rxjs/operators';
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements AfterViewInit {
  artistId: any = '';
  artist = {};
  tracklist: any = [];
  constructor(readonly api: ApiService, readonly route: ActivatedRoute, readonly dataService: DataService) {
    this.route.params.subscribe((param: any) => {
      this.artistId = Number(param.id);
    });
  }
  ngAfterViewInit() {
    this.api.getArtist(this.artistId).subscribe(data => {
      this.artist = data;
      this.getTraclist(data);
    });
  }

  getTraclist(data) {
    this.api.getTracklist(data.tracklist.replace('limit=50', 'limit=5')).subscribe(
      (tracks: any) => {
        this.tracklist = tracks.data;
      }
    );
  }

}
