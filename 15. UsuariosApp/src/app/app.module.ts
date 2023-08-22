import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/dashboard/footer/footer.component';
import { NavbarComponent } from './components/dashboard/navbar/navbar.component';
import { ListUsuariosComponent } from './components/dashboard/list-usuarios/list-usuarios.component';
import { LayoutComponent } from './components/layout/layout.component';
import { CardUsuarioComponent } from './components/dashboard/list-usuarios/card-usuario/card-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent,
    NavbarComponent,
    ListUsuariosComponent,
    LayoutComponent,
    CardUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
