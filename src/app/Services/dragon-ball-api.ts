import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DragonBallListModel } from '../models/DragonBall/DragonBallListModel';
import { DragonBallDetailModel } from '../models/DragonBall/DragonBallDetailModel';

@Injectable({
  providedIn: 'root'
})
export class DragonBallApiService {

  private baseUrl = 'https://dragonball-api.com/api/characters';

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<DragonBallListModel[] | any> {
    return this.http.get<DragonBallListModel[] | any>(this.baseUrl);
  }

  getCharacter(id: number | string): Observable<DragonBallDetailModel> {
    return this.http.get<DragonBallDetailModel>(`${this.baseUrl}/${id}`);
  }
}
