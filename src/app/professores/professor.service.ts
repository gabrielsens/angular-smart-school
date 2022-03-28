import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Professor } from "../models/Professor";

@Injectable({
  providedIn: 'root'
})

export class ProfessorService {
  constructor (private http: HttpClient) {

  }

  baseUrl = `${environment.mainUrl}/api/professor`;

  getAll(): Observable<Professor[]> {
    return this.http.get<Professor[]>(this.baseUrl);
  }

  getById(id: number): Observable<Professor> {
    return this.http.get<Professor>(`${this.baseUrl}/${id}`);
  }

  post(body: Professor) {
    return this.http.post(this.baseUrl, body);
  }

  put(id: number, body: Professor) {
    return this.http.put(`${this.baseUrl}/${id}`, body);
  }

  delete(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

}
