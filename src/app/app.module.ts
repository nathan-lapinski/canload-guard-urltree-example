import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TargetComponent } from './target.component';

import { CanLoadGuard } from './can-load.guard';

const ROUTES = [
  { path: 'feat', canLoad: [ CanLoadGuard ], loadChildren: './feat/feat.module#FeatModule'},
  { path: 'target', component: TargetComponent }
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(ROUTES) ],
  declarations: [ AppComponent, TargetComponent ],
  providers:    [ CanLoadGuard ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
