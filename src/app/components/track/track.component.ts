import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {
  trackId: any = '';
  track = {};
  trackinfo = {};
  constructor(readonly api: ApiService, readonly route: ActivatedRoute, readonly dataService: DataService) { 
    this.route.params.subscribe((params: any) => {
      this.trackId = Number(params.id);
    });
  }

  ngOnInit() {
    this.api.getTrackInfo(this.trackId).subscribe(data => {
      this.track = data;
    });

  }
}
