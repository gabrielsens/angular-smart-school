import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Aluno } from '../models/Aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(private http: HttpClient) {}

  baseUrl = `${environment.mainUrl}/api/aluno`

  getAll(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(this.baseUrl);
  }

  getById(id: number): Observable<Aluno> {
    return this.http.get<Aluno>(`${this.baseUrl}/${id}`)
  }

  post(aluno: Aluno) {
    return this.http.post(`${this.baseUrl}`, aluno)
  }

  put(id: number, aluno: Aluno) {
    return this.http.put(`${this.baseUrl}/${id}`, aluno)
  }

  delete(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`)
  }
}
