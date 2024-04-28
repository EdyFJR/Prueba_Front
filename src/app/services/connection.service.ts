import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  private ApiURL = environment.ApiURL

  constructor(private http: HttpClient) { }

  GET_BY_USER(): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const getUser = `${this.ApiURL}/diario/obtener_stud`;
    return this.http.get<any>(getUser, { headers });
  }
}
