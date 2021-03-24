import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import routing
import { AppRoutingModule } from './app-routing.module';

// Imports
import { HttpClientModule } from "@angular/common/http";

// Imports components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
