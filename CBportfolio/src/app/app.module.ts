import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { IndexComponent } from './components/index/index.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    LogoutComponent,
    SobreMiComponent,
    ExperienciaComponent,
    EducacionComponent,
    ProyectosComponent,
    HabilidadesComponent,
    HobbiesComponent,
    IndexComponent,
    Pagina404Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
