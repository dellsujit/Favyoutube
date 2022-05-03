import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavHolderComponent } from './fav-holder/fav-holder.component';
import { AppComponent } from './app.component';
import { SearchContainerComponent } from './search/container/search-container/search-container.component';
const routes: Routes = [
  {path:'',redirectTo:'Search',pathMatch:'full'},
  {path:'Fav',component:FavHolderComponent},
  {path:'Search',component:SearchContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
