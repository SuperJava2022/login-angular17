import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuarios } from '../../interfaces/usuarios.interface';
import { Session } from '../../interfaces/session.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private URLAUTH = 'http://localhost:8060/login';
  private URLSESSION = 'http://localhost:8070/createsession';

  constructor(private http: HttpClient) {}

  // Método para enviar datos a la API
  sendAuthLogin(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.URLAUTH, data, { headers, observe: 'response' });
  }

  saveToken(token: string): void {
    sessionStorage.setItem('authToken', token);
  }

  // Método para obtener el token
  getToken(): string | null {
    return sessionStorage.getItem('authToken');
  }

  // Método para obtener el usuario autenticado
  getCreateSession(usuario: string): Observable<any> {
    const token = this.getToken();
    const session = {
      id: null,
      userName: usuario,
      token: token,
      status: true,
      dateStart: null,
      dateEnd: null,
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${token}`,
    });
    console.log(session);

    return this.http.post<any>(this.URLSESSION, session, { headers });
  }
}
