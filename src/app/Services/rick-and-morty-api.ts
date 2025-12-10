import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RickAndMortyListModel } from '../models/RickAndMortyModels/RickAndMortyListModel';
import { RickAndMortyDetailModel } from '../models/RickAndMortyModels/RickAndMortyDetailModel';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyApiService {

  private baseUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<{ results: RickAndMortyListModel[] }> {
    return this.http.get<{ results: RickAndMortyListModel[] }>(this.baseUrl);
  }

  getCharacter(id: number | string): Observable<RickAndMortyDetailModel> {
    return this.http.get<RickAndMortyDetailModel>(`${this.baseUrl}/${id}`);
  }
}
