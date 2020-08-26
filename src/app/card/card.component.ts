
import {Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
<<<<<<< HEAD
import {CatService} from '../cat.store/cat.serive'
import { CatQuery } from './../cat.store/cat.query';
import {Cats} from '../cat.store/cat.models'
import { controlCatService  } from '../control-cat.service'
=======
import {CatService} from '../cat.store/cat.serive';
import { CatQuery } from './../cat.store/cat.query';
import {Cats} from '../cat.store/cat.models';
import { controlCatService  } from '../control-cat.service';
>>>>>>> af29fb247e3400dcebb0c1be1ed0ee5d2d9ffac7

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})

export class CardComponent implements OnInit {

<<<<<<< HEAD
  constructor(private route: ActivatedRoute,
    private catService: CatService,
    private catControl: controlCatService ,
    private catQuery: CatQuery ) { }
=======
    constructor(private route: ActivatedRoute,
                private catService: CatService,
                private catControl: controlCatService,
                private catQuery: CatQuery) {
    }
>>>>>>> af29fb247e3400dcebb0c1be1ed0ee5d2d9ffac7


    toggleActiveClass: true;
   cards: Cats[];

   ngOnInit(): void {
<<<<<<< HEAD
     debugger
    this.catQuery.cats$.subscribe(cardCat => this.cards = cardCat)
   }

   like(card: Cats){
      this.catControl.like(card)
   }



=======
    this.catQuery.cats$.subscribe(cardCat => this.cards = cardCat);
   }

   like(card: Cats): void {
      this.catControl.like(card);
   }
>>>>>>> af29fb247e3400dcebb0c1be1ed0ee5d2d9ffac7
}
