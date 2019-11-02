import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../../config/config';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  options = {headers: {'Content-type': 'application/json'}};
  baseApi = Config.api;
  constructor(readonly http: HttpClient) { }


  search(data) {
    return this.http.get(`${this.baseApi}/search?q=${data}`);
  }
  getTracks() {
    return this.http.get(this.baseApi, this.options);
  }
}
