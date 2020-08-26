import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { CatService } from '../cat.store/cat.serive';
import { CatQuery } from './../cat.store/cat.query';
import { Location } from '@angular/common'


export interface EditCat {
  id: string;
  name: string;
  description: string;
  image: string;
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




  patternCat: RegExp = /^[A-Z](\s?)([Aa-z\s]{2,10})$/;
  patternUrl: RegExp = /^(https?:\/\/)\.?([a-z\S]{1,90})\.(jpg|jpeg)$/g;

  form: FormGroup;
  cat: EditCat;

  typeButton: 'Сохранить изменения' | 'Добавить кота'
  // страница может редактировать кота или добавлять кота
  howPage: 'edit' | 'create'
  ngOnInit(): void {
    // В зависимости от пути определяем функционал страницы редактирвоание ил добавление
    const path: string = this.rout.snapshot.routeConfig.path

    switch (path) {
      case 'create':
        this.howPage = 'create'
        this.typeButton = 'Добавить кота'
        break;

      case 'edit/:id':
        this.howPage = 'edit'
        const id = this.rout.snapshot.params.id
        this.cat = { ...this.catQuery.getEditCat(id) };
        this.typeButton = 'Сохранить изменения'
        break;

    }
    this.form = new FormGroup({
      name: new FormControl(this.cat?.name || '', [
        Validators.required,
        Validators.pattern(this.patternCat)
      ]),
      image: new FormControl(this.cat?.image || '', [
        Validators.required,
        Validators.pattern(this.patternUrl)
      ]),
      description: new FormControl(this.cat?.description || '')
    })
    console.log(this.form.value);


  }

  editCat(): void {
    const cat: EditCat = {
      id: this.form.value.name,
      name: this.form.value.name,
      image: this.form.value.image,
      description: this.form.value.description,
    };
    if (this.howPage === 'edit') {
      this.catService.editCat(this.cat.id, cat);

    } else {
      this.catService.addCat(cat)
    }
    this.location.back()

  };
};
