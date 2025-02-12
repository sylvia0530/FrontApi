import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Municipalite } from '../municipalite';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private httpClient: HttpClient) { }
  getData(){
    return this.httpClient.get('http://127.0.0.1:8000/api');
  }
   // Fonction générique pour récupérer les données d'une table

  // Fonction générique pour insérer des données dans une table


  // Fonction générique pour récupérer un élément par ID


  // Fonction générique pour mettre à jour un élément d'une table
  

}
