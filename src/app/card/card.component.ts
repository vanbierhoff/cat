
import {Component, OnInit } from '@angular/core';
import { CatQuery } from './../cat.store/cat.query';
import {Cats} from '../cat.store/cat.models';
import { CatService } from './../cat.store/cat.serive';


@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})

export class CardComponent implements OnInit {

    constructor(  private catService: CatService,
      private catQuery: CatQuery) {
    };
    toggleActiveClass: true;
   cards: Cats[];
   ngOnInit(): void {
    this.catQuery.cats$.subscribe(cardCat => this.cards = cardCat);
   };
   like(card: Cats): void {
      this.catService.toggleLike(card);
   };
};
