import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  url = 'https://api.artic.edu/api/v1/artworks?page=2&limit=20';
  constructor(private _http: HttpClient) { }

  getArtList(): Observable<any> {
    return this._http.get(this.url);
  }

  getSpecificArt(id:number):Observable<any> {
    return this._http.get(`https://api.artic.edu/api/v1/artworks/${id}`);
  }

  getFavouriteArt(id:number):Observable<any> {
    return this._http.get(`https://api.artic.edu/api/v1/artworks/${id}`);
  }

}
