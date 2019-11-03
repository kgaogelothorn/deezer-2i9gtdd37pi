import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from './services/api.service';
import { Tracks } from 'src/config/interface';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'musicdb-app';
  search: FormGroup;
  tracks: Tracks = [];
  constructor(readonly api: ApiService,
              readonly dataService: DataService) {}
  ngOnInit() {
    this.search = new FormGroup({
       track: new FormControl(null, Validators.required),
    });

    this.api.search('eminem').subscribe((data) => {
      this.setData(data);
    });

    this.search.valueChanges.subscribe(value => {
      this.searchTrack();
    });
  }

  searchTrack() {
    if (this.search.valid) {
      const value = this.search.controls.track.value;
      this.api.search(value).subscribe((data: any) => {
        this.setData(data);
       });
    } else {
      alert('Please add two or more characters');
    }
  }

  setData(data) {
    this.tracks = [];
    data.data.forEach((element: any) => {
      const track = {
         id: element.id,
         title: element.title,
         album: element.album,
         duration: element.duration,
         artist: element.artist,
         albumArt: element.album.cover_big
      };
      this.tracks.push(track);
 });
    this.dataService.data.next(this.tracks);
  }
}
