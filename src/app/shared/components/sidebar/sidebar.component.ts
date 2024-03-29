import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs-service/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  get historial(): string[]{
    return this.gifsService.historial;
  }

  constructor(
    private gifsService: GifsService
  ) { }

  ngOnInit(): void {
  }

  buscar(query: string){
    this.gifsService.searchGifs(query);
  }


}
