import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Cats } from '../app.component';
 
@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {
  toggleCard = false;
  constructor() { }
  @Input() cards: Cats;
  @Output() like = new EventEmitter ()

  ngOnInit(): void {
  }
  toggleLike(card): void {
    card.liked = !card.liked;
    console.log( card + 'Clik JOB');
  }
}
