import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FeatComponent } from './feat.component';

const ROUTES = [
  { path: '', component: FeatComponent }
];

@NgModule({
  imports:      [ RouterModule.forChild(ROUTES) ],
  declarations: [ FeatComponent ]
})
export class FeatModule { }
