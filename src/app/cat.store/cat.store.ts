import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Cats } from './cat.models';

export interface CatState extends EntityState<Cats> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'cat'
})
export class CatStore extends EntityStore<CatState> {

  constructor() {
    super();
  }
<<<<<<< HEAD

=======
>>>>>>> af29fb247e3400dcebb0c1be1ed0ee5d2d9ffac7
}
