import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {
  trackId: any = '';
  track = {};
  trackinfo = {};
  loading = true;
  constructor(readonly api: ApiService, readonly dataService: DataService, readonly route: ActivatedRoute) { 
    this.route.params.subscribe((params: any) => {
      this.trackId = Number(params.id);
    });
  }

  ngOnInit() {
    this.api.getTrackInfo(this.trackId).subscribe(data => {
      this.track = data;
      this.loading = false;
    });

  }


}
