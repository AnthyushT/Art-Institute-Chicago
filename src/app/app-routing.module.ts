import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DisplayComponent } from './Components/display/display.component';
import { HomeComponent } from './Components/home/home.component';
import { ExploreComponent } from './Components/explore/explore.component';
import { FavouritesComponent } from './Components/favourites/favourites.component';

const routes: Routes = [
  {
    path:'display',
    component: DisplayComponent,
  },
  {
    path:'',
    component: HomeComponent
  },
  {
    path : "display/:id",
    component : ExploreComponent
  },
  {
    path: "favourites",
    component : FavouritesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
