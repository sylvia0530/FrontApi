import { Component,OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Manuel } from '../../manuel';
@Component({
  selector: 'app-manuels',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './manuels.component.html',
  styleUrl: './manuels.component.css'
})
export class ManuelsComponent implements OnInit{
   manuels: Manuel[] = [];
    manuel: Manuel = {
      id: '',
      titre: '',
      description: '',
      urlManuel: ''
    };
    constructor(private dataService: DataService) {}

    ngOnInit() {
      this.loadManuels();
    }

    loadManuels() {
      this.dataService.getData('manuels').subscribe(data => {
        this.manuels = data;
      });
    }

    addManuel() {
      this.dataService.insertData('manuels', this.addManuel).subscribe(res => {
        this.loadManuels(); // Recharger la liste après ajout
      });
    }

    updateManuel(manuel: Manuel) {
      this.dataService.updateData('manuels', manuel.id, manuel).subscribe(() => {
        this.loadManuels(); // Recharger la liste après mise à jour
      });
    }

}
