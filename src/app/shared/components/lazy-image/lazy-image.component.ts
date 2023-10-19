import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'share-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.scss']
})
export class LazyImageComponent implements OnInit {
  @Input() url!:string;
  @Input() alt:string = '';
  isLoaded: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if(!this.url) throw new Error('URL property is required');
  }

  onLoad(){
    this.isLoaded = true;
  }

}
