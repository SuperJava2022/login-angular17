import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuarios } from '../../interfaces/usuarios.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private URLAUTH = 'http://localhost:8090/L0g1n_$/login2023';
  private URLLOGIN = 'http://localhost:8090/L0g1n_$/login?u=';

  constructor(private http: HttpClient) {}

  // Método para enviar datos a la API
  sendAuthLogin(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.URLAUTH, data, { headers, observe: 'response' });
  }

  saveToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  // Método para obtener el token
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  // Método para obtener el usuario autenticado
  getLoginUsersAuthenticated(usuario: string): Observable<any> {
    const token = this.getToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<any>(this.URLLOGIN + usuario, { headers });
  }
}
