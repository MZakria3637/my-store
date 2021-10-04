import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductAlertComponent } from './product-list/product-alert/product-alert.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
@NgModule({
  declarations: [
     AppComponent,
     ProductListComponent,
    TopBarComponent,
     ProductAlertComponent,
     ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
