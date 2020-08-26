import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CatService} from '../cat.store/cat.serive';
import { CatQuery } from './../cat.store/cat.query';
import { Location } from '@angular/common'

interface EdiCat {
    id: string;
    name: string;
    description: string;
    image: string;
    liked: boolean;
};

@Component({
  selector: 'app-redact',
  templateUrl: './redact.component.html',
  styleUrls: ['./redact.component.css']
})
export class RedactComponent implements OnInit {
  constructor(private rout: ActivatedRoute,
              private location: Location,
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
        this.location.back()
    };
};
