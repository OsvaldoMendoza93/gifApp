import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Gif, SearchGifsResponse } from '../interfaces/gifs-response.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apiURL: string = environment.endpointURL
  private apiKey: string = environment.apiKey;
  private _historial: string[] = [];

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

  searchGifs(query:string){
    query = query.trim().toLowerCase(); // trim borra espacios en blanco adelnate y atras, pasa el query a minusculas
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }
    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', '10')
    .set('q', query)
    this.http.get<SearchGifsResponse>(`${this.apiURL}/search`,{ params } )
    .subscribe( (res) => {
      this.resultados = res.data
      localStorage.setItem('resultado', JSON.stringify(this.resultados));
    });
  }
}
