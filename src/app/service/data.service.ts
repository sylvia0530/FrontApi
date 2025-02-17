import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private httpClient: HttpClient) { }

  private apiUrl = 'http://127.0.0.1:8000/api';

  // Municipalite
  getData(): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/municipalites`);
  }

  insertData(data: any): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}/addmunicipalites`, data);
  }

  // Manuel
  getManuel(): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/manuels`);
  }

  insertManuel(data: any): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}/addmanuels`, data);
  }

  // Evenements
  getEvenement(): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/evenements`);
  }

  insertEvenement(data: any): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}/addevenements`, data);
  }

  // Gallerie
  getGallerie(): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/galleries`);
  }

  insertGallerie(data: any): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}/addgalleries`, data);
  }
}
