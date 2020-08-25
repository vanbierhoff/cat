import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-redact',
  templateUrl: './redact.component.html',
  styleUrls: ['./redact.component.css']
})
export class RedactComponent implements OnInit {

  constructor(private rout: ActivatedRoute) { }
   name: string;
   gett: string;
  ngOnInit(): void {
    this.name = this.rout.snapshot.params.id
  }

}
