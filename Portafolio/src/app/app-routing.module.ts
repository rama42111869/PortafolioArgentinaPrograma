import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { InicioComponent } from './components/inicio/inicio.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SobremiComponent } from './components/sobremi/sobremi.component';
import { FormacionComponent } from './components/formacion/formacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/inicio' },
  {
    path: 'main',
    component: MainComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/inicio']))
  },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {path: 'inicio',component: InicioComponent},
  {path: 'sobremi', component:SobremiComponent},
  {path: 'formacion',component:FormacionComponent},
  {path: 'experiencia', component: ExperienciaComponent},
  {path: 'tecnologias', component: TecnologiasComponent},
  ///Unisex-components
  {path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
