import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  constructor(readonly api: ApiService, readonly route: ActivatedRoute) { }
   artist = {};
  ngOnInit() {
    const artistId =   this.route.snapshot.queryParams.returnUrl;
    this.api.getArtist(artistId).subscribe(res => {
      this.artist = res;
      console.log(res);
   });
  }

}
