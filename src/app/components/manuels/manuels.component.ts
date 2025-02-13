import { Component,OnInit} from '@angular/core';
import { DataService } from '../../service/data.service';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-manuels',
  imports: [DataService,CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './manuels.component.html',
  styleUrl: './manuels.component.css'
})
export class ManuelsComponent implements OnInit{
  manuels:any;
  ngOnInit(): void {
    this.getManuelData();
  }
  getManuelData(){
    console.log('liste');
  }
}
