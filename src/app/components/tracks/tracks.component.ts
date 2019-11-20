import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Track, Tracks } from 'src/config/interface';
import { ApiService } from '../../services/api.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})
export class TracksComponent implements OnInit, AfterViewInit {
  tracks: Tracks = [];
  constructor(readonly api: ApiService,
              readonly dataService: DataService,
              readonly router: Router) {
  
   }
  ngOnInit() {}

ngAfterViewInit() {
  this.dataService.data.subscribe((res: Tracks) => {
    this.tracks = res;
 });
}
}
