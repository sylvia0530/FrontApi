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


    ngOnInit() {

    }


}
