import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../services/gifs-service/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss']
})
export class ResultadosComponent implements OnInit {

  get resultados(){
    return this.gifsService.resultados;
  }

  constructor( private gifsService: GifsService) { }

  ngOnInit(): void {
  }

}
