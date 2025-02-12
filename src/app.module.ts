import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app/app.component';
import { MunicipalitesComponent } from './app/components/municipalites/municipalites.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MunicipalitesEditComponent } from './app/components/municipalites-edit/municipalites-edit.component';
import { ManuelsComponent } from './app/components/manuels/manuels.component';


const appRoutes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path:'municipalites',component:MunicipalitesComponent},
  {path:'manuels',component:ManuelsComponent},
  {path:'edit/:id',component:MunicipalitesEditComponent},
  { path: '**', redirectTo: '/municipalites' }
];

@NgModule({
  declarations: [
    AppComponent,
    MunicipalitesComponent,
    MunicipalitesEditComponent,
    ManuelsComponent
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
