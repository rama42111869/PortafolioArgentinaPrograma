import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { InicioComponent } from './components/inicio/inicio.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MinicarruselComponent } from './components/minicarrusel/minicarrusel.component';
import { LineComponent } from './components/line/line.component';

import { WhasappComponent } from './components/whasapp/whasapp.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CardsComponent } from './components/cards/cards.component';


import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { SobremiComponent } from './components/sobremi/sobremi.component';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';
import { FormacionComponent } from './components/formacion/formacion.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Minicarrusel2Component } from './components/minicarrusel2/minicarrusel2.component';

@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
    InicioComponent,
    PageNotFoundComponent,
    FooterComponent,
    CarrouselComponent,
    MinicarruselComponent,

    LineComponent,

    WhasappComponent,
    PaginationComponent,
    CardsComponent,
    ExperienciaComponent,
    SobremiComponent,
    TecnologiasComponent,
    FormacionComponent,
    HomeComponent,
    NavbarComponent,
    Minicarrusel2Component,
  ],
  imports: [
    NgxPaginationModule,
    MdbCarouselModule,
    MdbCollapseModule,
    FormsModule,
    MatSliderModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,

    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
