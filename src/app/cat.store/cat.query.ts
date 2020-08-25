import { Cats } from './cat.models';
import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import { Observable} from 'rxjs'
import { CatStore , CatState } from './cat.store';
@Injectable({providedIn: 'root'})
export class CatQuery extends QueryEntity<CatState> {
    constructor(
        protected store: CatStore,
    ) {
        super(store);
    }

    cats$: Observable<Cats[]> = this.selectAll()

}
