import { Routes } from '@angular/router';
import { AnimalesComponent } from './animales/animales.component';
import { CitasComponent } from './citas/citas.component';
import { InicioComponent } from './inicio/inicio.component';

export const routes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'animales', component: AnimalesComponent },
  { path: 'citas', component: CitasComponent }
];
