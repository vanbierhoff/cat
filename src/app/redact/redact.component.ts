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
    name:string;
    image:string;
    description:string;
    typeButton: 'Сохранить изменения' | 'Добавить кота'
    // страница может редактировать кота или добавлять кота
    howPage : 'edit' | 'create'
  ngOnInit(): void {
    // В зависимости от пути определяем функционал страницы редактирвоание ил добавление
    const path:string = this.rout.snapshot.routeConfig.path
     switch (path) {

      case 'create':
      this.howPage = 'create'
      this.typeButton = 'Добавить кота'
        break;

        case 'edit/:id' :
          this.howPage = 'edit'
          this.id = this.rout.snapshot.params.id;
          this.cat = this.catQuery.getEditCat(this.id);
          this.id = this.cat.id;
          this.name = this.cat.name;
          this.image = this.cat.image;
          this.description = this.cat.description;
          this.typeButton = 'Сохранить изменения'
          break;

     }



  }

    editCat(): void {
        const cat: EdiCat = {
            id: this.id,
            name: this.name,
            image: this.image,
            description: this.description,
            liked: false
        };
        if (this.howPage === 'edit') {
          this.catService.editCat(this.cat.id, cat);

        } else {
            this.catService.addCat(cat)
        }
        this.location.back()

    };

    addCat():void {

    }
};
