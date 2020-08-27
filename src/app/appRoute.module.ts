import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';
import { TileComponent  } from './tile/tile.component';
import {RedactComponent } from './redact/redact.component';
import {RouterModule, Routes} from '@angular/router';

const routers: Routes = [
  {path: 'card', component: CardComponent},
  {path: 'tile', component: TileComponent},
  {path: 'edit/:id', component: RedactComponent},
  {path: 'create', component: RedactComponent},
  {path: '**', redirectTo: 'card', pathMatch: 'full'}
];

@NgModule ({
imports: [RouterModule.forRoot(routers)],
exports: [RouterModule],
})

export class AppRouterModule {
}
