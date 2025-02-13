import { Component,OnInit} from '@angular/core';
import { DataService } from '../../service/data.service';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Evenement } from '../../evenement';
@Component({
  selector: 'app-evenements',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './evenements.component.html',
  styleUrl: './evenements.component.css'
})
export class EvenementsComponent implements OnInit{
  evenements:any;
  evenement = new Evenement;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getEvenementData();
  }

  getEvenementData(){
      console.log('liste');
      this.dataService.getEvenement().subscribe(res => {
        this.evenements = res;
      });
  }

  insertEvenement(){
    this.dataService.insertManuel(this.evenement).subscribe(res =>{
      this.getEvenementData();
    });
  }

}
