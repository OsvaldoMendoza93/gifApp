import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {
  @ViewChild('txtSearch') txtSearch!:ElementRef<HTMLInputElement>;

  constructor(
    private gifsService: GifsService
  ) { }

  ngOnInit(): void {
  }

  search(){
    const valor = this.txtSearch.nativeElement.value;
    if(valor.trim().length === 0 ){
      return;
    }
    this.gifsService.searchGifs(valor);
    this.txtSearch.nativeElement.value = '';
  }

}
