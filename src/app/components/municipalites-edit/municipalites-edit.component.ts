import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../service/data.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-municipalites-edit',
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './municipalites-edit.component.html',
  styleUrl: './municipalites-edit.component.css'
})
export class MunicipalitesEditComponent implements OnInit{
  municipalite: any = {}; // L'objet qui contiendra les données du formulaire
  isEditMode: boolean = false; // Flag pour savoir si on est en mode édition ou ajout

  constructor(
    private route: ActivatedRoute,
    private dataService:DataService,
    private router: Router
  ) {}
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id'); // Récupérer l'ID depuis l'URL
    if (id) {
      this.isEditMode = true;
      this.dataService.getById('municipalite',id).subscribe(data => {
        this.municipalite = data;
      });
    }
  }

  submit() {
    if (this.isEditMode) {
      // Si on est en mode édition, on appelle la méthode pour mettre à jour l'élément
      this.dataService.updateData('municipalites', this.municipalite.id, this.municipalite).subscribe(() => {
        this.router.navigate(['/']); // Rediriger vers la liste des municipalités
      });
    } else {
      // Si on est en mode ajout, on appelle la méthode pour insérer une nouvelle municipalité
      this.dataService.insertData('municipalites', this.municipalite).subscribe(() => {
        this.router.navigate(['/']); // Rediriger vers la liste des municipalités
      });
    }
  }
}
