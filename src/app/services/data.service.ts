import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data = new ReplaySubject();
  artistData = new ReplaySubject();
  constructor() { }
}
