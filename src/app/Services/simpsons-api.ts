import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SimpsonsListModel } from '../models/Simpsons/SimpsonsListModel';
import { SimpsonsDetailModel } from '../models/Simpsons/SimpsonsDetailModel';

@Injectable({
  providedIn: 'root'
})
export class SimpsonsApiService {

  private baseUrl = 'https://thesimpsonsapi.com/api/characters';

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<SimpsonsListModel[] | any> {
    // según la API, puede devolver array directo
    return this.http.get<SimpsonsListModel[] | any>(this.baseUrl);
  }

  getCharacter(id: number | string): Observable<SimpsonsDetailModel> {
    return this.http.get<SimpsonsDetailModel>(`${this.baseUrl}/${id}`);
  }
}
