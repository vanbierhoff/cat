import {Component, OnInit} from '@angular/core';
import { CatService } from './cat.store/cat.serive';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor( private catService: CatService) {}


    ngOnInit(): void {
      this.catService.initCat();
    }
}
