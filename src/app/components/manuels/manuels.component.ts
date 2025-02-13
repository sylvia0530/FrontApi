import { Component,OnInit} from '@angular/core';
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
  manuels:any;
  manuel = new Manuel;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getManuelData();
  }

  getManuelData(){
    console.log('liste');
    this.dataService.getManuel().subscribe(res => {
      this.manuels = res;
    });
  }

  insertManuel(){
    this.dataService.insertManuel(this.manuel).subscribe(res =>{
      this.getManuelData();
    });
  }
}
