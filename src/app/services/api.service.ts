import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

    private baseUrl = 'http://127.0.0.1:8000/api';

    baseMediaURL = 'http://127.0.0.1:8000'

  constructor(private http: HttpClient) {}

  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/categories/`);
  }

  getPhotoList(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/photos/list/`);
  }

  postPhotoUser(formData: FormData) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');

    return this.http.post(`${this.baseUrl}/profile/photos/`, formData, { headers });
  }

  editPhotoUser(id: number, updatedData: any): Observable<any> {
    return this.http.patch(`${this.baseUrl}${id}/profile/photos/${id}/`, updatedData);
  }

  deletePhotoUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/profile/photos/${id}/`);
  }
}

