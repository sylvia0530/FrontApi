import { Component,OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Municipalite } from '../../municipalite';

@Component({
  selector: 'app-municipalites',
  standalone:true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './municipalites.component.html',
  styleUrl: './municipalites.component.css'
})
export class MunicipalitesComponent implements OnInit {
  municipalites: Municipalite[] = [];
  municipalite: Municipalite = {
    id: '',
    typeContenu: '',
    description: '',
    dateAjout: '',
    urlContenu: ''
  };
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadMunicipalites();
  }

  loadMunicipalites() {
    this.dataService.getData('municipalites').subscribe(data => {
      this.municipalites = data;
    });
  }

  addMunicipalite() {
    this.dataService.insertData('municipalites', this.addMunicipalite).subscribe(res => {
      this.loadMunicipalites(); // Recharger la liste après ajout
    });
  }

  updateMunicipalite(municipalite: Municipalite) {
    this.dataService.updateData('municipalites', municipalite.id, municipalite).subscribe(() => {
      this.loadMunicipalites(); // Recharger la liste après mise à jour
    });
  }
}
