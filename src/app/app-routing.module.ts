import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{AboutMeComponent} from './about-me/about-me.component';

const routes: Routes = [
  {path:'aboutme',component:AboutMeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

