import { CatService } from './cat.store/cat.serive';
import { Cats } from './cat.store/cat.models';
import { CatQuery } from './cat.store/cat.query';
import { Injectable} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class controlCatService {
  constructor(
    private catService: CatService) { }


  like(card: Cats){
    const liked: boolean = !card.liked
    const update:Cats = {
      id: card.id,
     image: card.image,
     name: card.name,
     description:card.description,
     liked : liked
     }
      this.catService.toggleLike(update)
   }
}
