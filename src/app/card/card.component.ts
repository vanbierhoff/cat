import {Component, Input,  Output, EventEmitter } from '@angular/core';
import { Cats } from '../app.component';


@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})

export class CardComponent {
    toggleActiveClass: true;
    @Input() cards: Cats;
    @Output() like = new EventEmitter ()

    toggleLike(card): void {
       card.liked = !card.liked;
       console.log( card + 'Clik JOB');
    }

}
