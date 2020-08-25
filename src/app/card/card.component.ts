
import {Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CatService} from '../cat.store/cat.serive';
import { CatQuery } from './../cat.store/cat.query';
import {Cats} from '../cat.store/cat.models';
import { controlCatService  } from '../control-cat.service';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})

export class CardComponent implements OnInit {

    constructor(private route: ActivatedRoute,
                private catService: CatService,
                private catControl: controlCatService,
                private catQuery: CatQuery) {
    }


    toggleActiveClass: true;
   cards: Cats[];

   ngOnInit(): void {
    this.catQuery.cats$.subscribe(cardCat => this.cards = cardCat);
   }

   like(card: Cats): void {
      this.catControl.like(card);
   }
}
