import { Cats } from './cat.models';
import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import {combineLatest, Observable} from 'rxjs';
import { CatStore , CatState } from './cat.store';
import {map} from 'rxjs/operators';
@Injectable({providedIn: 'root'})
export class CatQuery extends QueryEntity<CatState> {
    constructor(
        protected store: CatStore,
    ) {
        super(store);
    }
    cats$: Observable<Cats[]> = this.selectAll();
    getEditCat(id: string): Cats {
      const Cat =  this.getEntity(id);
      return Cat;
    }
}
