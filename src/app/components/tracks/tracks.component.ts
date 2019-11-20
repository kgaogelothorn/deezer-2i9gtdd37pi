import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Tracks } from '../../../config/interface';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})
export class TracksComponent implements OnInit, AfterViewInit {
  tracks: Tracks = [];
  loading = true;

  constructor(readonly dataService: DataService) {
   }

  ngOnInit() {
     this.dataService.data.subscribe((res: Tracks) => {
      this.tracks = res;
      this.loading = false;
    });
  }

ngAfterViewInit() {

}
}
