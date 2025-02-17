import { Component,OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Contact } from '../../contact';
@Component({
  selector: 'app-contacts',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent implements OnInit{
  contacts:any;
  contact = new Contact;
   constructor(private dataService: DataService) {}
   ngOnInit(): void {
     this.getContactData();
   }

   getContactData(){
       console.log('liste');
       this.dataService.getContact().subscribe(res => {
         this.contacts = res;
       });
   }

   insertContact(){
    this.dataService.insertContact(this.contact).subscribe(res =>{
      this.getContactData();
    });
  }
}
