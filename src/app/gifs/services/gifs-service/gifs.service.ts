import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Gif, SearchGifsResponse } from '../../interfaces/gifs-response.interface';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apiURL: string = environment.endpointURL
  private apiKey: string = environment.apiKey;
  private _historial: Array<string> = [];

  public resultados: Array<Gif> = []

  constructor(
    private http: HttpClient
  ) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || []; 
    this.resultados = JSON.parse(localStorage.getItem('resultado')!) || []; 
  }

  get historial(){
    return [...this._historial]
  }

  private organizeHistory(query:string){
    query = query.toLowerCase();
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }
  }

  searchGifs(query:string){
    this.organizeHistory(query)
    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', '10')
    .set('q', query)
    this.http.get<SearchGifsResponse>(`${this.apiURL}/search`,{ params } ).pipe(
      map(res => res.data)
    )
    .subscribe( (gifs) => {
      this.resultados = gifs
      localStorage.setItem('resultado', JSON.stringify(this.resultados));
    });
  }
}
