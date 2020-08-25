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

}
