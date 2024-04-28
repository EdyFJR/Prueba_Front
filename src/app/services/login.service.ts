import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private ApiURL = environment.ApiURL;

  constructor(private http: HttpClient) { }

  iniciarSesion(usuario: Usuario): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const inicioSesionUrl = `${this.ApiURL}/auth/login`;

    return this.http.post<any>(inicioSesionUrl, usuario, { headers });
  }

  createUser(userCreate: UserCreate): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const createUserUrl = `${this.ApiURL}/diario/registro_stud`;
    return this.http.post(createUserUrl, userCreate, { headers });
  }

  deleteUser(userId: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const deleteUserUrl = `${this.ApiURL}/diario/eliminar_user`;

    return this.http.delete<any>(deleteUserUrl, { headers, body: { id: userId } });
  }


  editUser(user: User, userId: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const editUserUrl = `${this.ApiURL}/diario/editar_user/${userId}`;

    return this.http.patch<any>(editUserUrl, user, { headers });
  }

}

export interface Usuario {
  nombre: string;
  password: string;
}
export interface UserCreate {
  clave: string;
  matricula: string;
  paterno: string;
  materno: string;
  nombre: string;
}

 export interface User {
  id: string;
  clave: string;
  password: string;
  matricula: string;
  paterno: string;
  materno: string;
  nombre: string;
}
