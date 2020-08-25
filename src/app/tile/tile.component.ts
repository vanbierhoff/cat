import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CatService} from '../cat.store/cat.serive'
import { CatQuery } from './../cat.store/cat.query';
import {Cats} from '../cat.store/cat.models'
import { controlCatService  } from '../control-cat.service'


@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css'],
})
export class TileComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private catService: CatService,
    private catControl: controlCatService,
    private catQuery: CatQuery ) { }

  cards: Cats[];
  ngOnInit(): void {
    this.catQuery.cats$.subscribe(cardCat => this.cards = cardCat)
  }

  like(card: Cats){
    this.catControl.like(card)
 }

}
