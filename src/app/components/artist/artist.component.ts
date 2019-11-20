import { Component, AfterViewInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';

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
      this.getTracklist(data);

    });
  }
  getTracklist(data) {
    this.api.getTracklist(data.tracklist.replace('limit=50', 'limit=g')).subscribe((tracks: any) => {
      this.tracklist = tracks.data;
    })
  }

}
