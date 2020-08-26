import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
<<<<<<< HEAD
=======
import {CatService} from '../cat.store/cat.serive';
import { CatQuery } from './../cat.store/cat.query';

interface EdiCat {
    id: string;
    name: string;
    description: string;
    image: string;
    liked: boolean;
}
>>>>>>> af29fb247e3400dcebb0c1be1ed0ee5d2d9ffac7

@Component({
  selector: 'app-redact',
  templateUrl: './redact.component.html',
  styleUrls: ['./redact.component.css']
})
export class RedactComponent implements OnInit {

<<<<<<< HEAD
  constructor(private rout: ActivatedRoute) { }
   name: string;
   gett: string;
  ngOnInit(): void {
    this.name = this.rout.snapshot.params.id
  }

=======
  constructor(private rout: ActivatedRoute,
              private catService: CatService,
              private catQuery: CatQuery) { }
   cat: EdiCat;
    id: string;
    name;
    image;
    description;
  ngOnInit(): void {
   this.id = this.rout.snapshot.params.id;
   this.cat = this.catQuery.getEditCat(this.id);
   this.id = this.cat.id;
   this.name = this.cat.name;
   this.image = this.cat.image;
   this.description = this.cat.description;
  }

    editCat(): void {
        const cat: EdiCat = {
            id: this.id,
            name: this.name,
            image: this.image,
            description: this.description,
            liked: false
        };
        this.catService.editCat(this.cat.id, cat);
        window.history.back();
    }

>>>>>>> af29fb247e3400dcebb0c1be1ed0ee5d2d9ffac7
}
