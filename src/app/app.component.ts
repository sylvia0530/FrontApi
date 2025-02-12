import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { MunicipalitesComponent } from './components/municipalites/municipalites.component';
import { ManuelsComponent } from './components/manuels/manuels.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SidebarComponent,TopbarComponent,MunicipalitesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontApi';
}
