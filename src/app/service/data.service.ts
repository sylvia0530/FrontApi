import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Municipalite } from '../municipalite';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://127.0.0.1:8000/api';  // Corrige l'URL de l'API avec http://

  constructor(private httpClient: HttpClient) { }

   // Fonction générique pour récupérer les données d'une table
   getData(table: string): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${table}`);
  }

  // Fonction générique pour insérer des données dans une table
  insertData(table: string, data: any): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/add${table}`, data);
  }

  // Fonction générique pour récupérer un élément par ID
  getById(table: string, id: string): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/${table}ById/${id}`);
  }

  // Fonction générique pour mettre à jour un élément d'une table
  updateData(table: string, id: string, data: any): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/update${table}/${id}`, data);
  }

}
