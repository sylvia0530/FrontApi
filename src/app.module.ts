import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MunicipalitesComponent } from './app/components/municipalites/municipalites.component';
import { ManuelsComponent } from './app/components/manuels/manuels.component';
import { EvenementsComponent } from './app/components/evenements/evenements.component';
import { GalleriesComponent } from './app/components/galleries/galleries.component';
import { ContactsComponent } from './app/components/contacts/contacts.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path:'municipalites',component:MunicipalitesComponent},
  {path:'manuels',component:ManuelsComponent},
  {path:'evenements',component:EvenementsComponent},
  {path:'galleries',component:GalleriesComponent},
  {path:'contacts',component:ContactsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    MunicipalitesComponent,
    ManuelsComponent,
    EvenementsComponent,
    GalleriesComponent,
    ContactsComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule] ,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
