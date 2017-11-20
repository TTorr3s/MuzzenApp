import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { Error404Component } from './components/error404.component';
import { LoginComponent } from './components/login.component';

// Rutas
import { routing, appRoutingProviders } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
