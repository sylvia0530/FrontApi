import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private httpClient: HttpClient) { }

  private apiUrl = 'http://127.0.0.1:8000/api';

  // Méthode pour récupérer les données
  getData(): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/municipalites`);
  }

  // Méthode pour insérer les données
  insertData(data: any): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}/addmunicipalites`, data);
  }

  getManuel(): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/manuels`);
  }
}
