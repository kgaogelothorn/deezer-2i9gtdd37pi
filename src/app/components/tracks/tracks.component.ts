import { Component, OnInit } from '@angular/core';
import { Track, Tracks } from 'src/config/interface';
import { ApiService } from '../../services/api.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})
export class TracksComponent implements OnInit {
  tracks: Tracks = [];
  constructor(readonly api: ApiService, readonly dataService: DataService) {
    this.dataService.data.subscribe((res: Tracks) => {
      this.tracks = res;
    });
   }
  ngOnInit() {
    this.api.getTracks().subscribe(res => {
      console.log(res);
    });
  }

}
