import { AppRouterModule } from './appRoute.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {CardComponent} from './card/card.component';
import { TileComponent } from './tile/tile.component';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from 'src/environments/environment';
import {RedactComponent } from './redact/redact.component'

@NgModule({
  declarations: [
    AppComponent,
     CardComponent,
     TileComponent,
     RedactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouterModule,
    environment.production ? [] : AkitaNgDevtools.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
