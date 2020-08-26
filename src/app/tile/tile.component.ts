import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatQuery } from './../cat.store/cat.query';
import {Cats} from '../cat.store/cat.models';
import { CatService } from './../cat.store/cat.serive';



@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css'],
})
export class TileComponent implements OnInit {

  constructor(  private catService: CatService,
                private catQuery: CatQuery) {
  }

  cards: Cats[];
  ngOnInit(): void {
    this.catQuery.cats$.subscribe(cardCat => this.cards = cardCat);
  }
  like(card: Cats): void {
    this.catService.toggleLike(card);
 };

}
