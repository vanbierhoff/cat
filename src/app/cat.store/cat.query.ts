import { Cats } from './cat.models';
import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';
<<<<<<< HEAD
import { Observable} from 'rxjs'
import { CatStore , CatState } from './cat.store';
=======
import {combineLatest, Observable} from 'rxjs';
import { CatStore , CatState } from './cat.store';
import {map} from 'rxjs/operators';
>>>>>>> af29fb247e3400dcebb0c1be1ed0ee5d2d9ffac7
@Injectable({providedIn: 'root'})
export class CatQuery extends QueryEntity<CatState> {
    constructor(
        protected store: CatStore,
    ) {
        super(store);
    }
<<<<<<< HEAD

    cats$: Observable<Cats[]> = this.selectAll()

=======
    cats$: Observable<Cats[]> = this.selectAll();
    getEditCat(id: string): Cats {
      const Cat =  this.getEntity(id);
      return Cat;
    }
>>>>>>> af29fb247e3400dcebb0c1be1ed0ee5d2d9ffac7
}
