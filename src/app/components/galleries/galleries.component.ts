import { Component,OnInit} from '@angular/core';
import { DataService } from '../../service/data.service';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Gallerie } from '../../gallerie';
@Component({
  selector: 'app-galleries',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './galleries.component.html',
  styleUrl: './galleries.component.css'
})
export class GalleriesComponent implements OnInit{
  galleries:any;
  gallerie = new Gallerie;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getGallerieData();
  }

  getGallerieData(){
    console.log('liste');
      this.dataService.getGallerie().subscribe(res => {
        this.galleries = res;
      });
  }

  insertGallerie(){
    this.dataService.insertGallerie(this.gallerie).subscribe(res =>{
      this.getGallerieData();
    });
  }
}
