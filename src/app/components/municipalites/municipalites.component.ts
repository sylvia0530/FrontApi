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
 municipalites:any;
 municipalite = new Municipalite;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getMunicipaliteData();
  }

  getMunicipaliteData() {
    console.log('liste');
    this.dataService.getData().subscribe(res => {
      this.municipalites = res;
    });
  }

  insertData(){
    this.dataService.insertData(this.municipalite).subscribe(res =>{
      this.getMunicipaliteData();
    });
  }
}
