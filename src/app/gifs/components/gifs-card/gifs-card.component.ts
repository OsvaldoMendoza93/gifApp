import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs-response.interface';

@Component({
  selector: 'app-gifs-card',
  templateUrl: './gifs-card.component.html',
  styleUrls: ['./gifs-card.component.scss']
})
export class GifsCardComponent implements OnInit {
  @Input() gif!:Gif

  constructor() { }

  ngOnInit(): void {
    if(!this.gif) throw new Error('Gif property is required')
  }

}
