import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchInputComponent } from './search/components/search-input/search-input.component';
import { SearchListComponent } from './search/components/search-list/search-list.component';
import { SearchContainerComponent } from './search/container/search-container/search-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { FavHolderComponent } from './fav-holder/fav-holder.component';



@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    SearchListComponent,
    SearchContainerComponent,
    FavHolderComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule, BrowserAnimationsModule,MatIconModule,MatToolbarModule,MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
