import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private URLSESSION = 'http://localhost:8070/closesession';
  private URLSESSIONFINDALL = 'http://localhost:8070/allsession';
  private URLSESSIONFINDONE = 'http://localhost:8070/usersession/';

  constructor(private http: HttpClient) {}

  // Método para cerrar la sesionn en DB
  CloseSession(usuario: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    console.log(usuario);
    console.log(this.URLSESSION + usuario);
    const session = {
      id: null,
      userName: usuario,
      token: '',
      status: true,
      dateStart: null,
      dateEnd: null,
    };

    return this.http.post<any>(this.URLSESSION, session, { headers }).pipe(
      catchError((error) => {
        console.error('Error al cerrar sesión:', error);
        throw error;
      })
    );
  }

  FindAllSession(usuario: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.get<any>(this.URLSESSIONFINDALL, { headers }).pipe(
      catchError((error) => {
        console.error('Error buscar todas las sesiones:', error);
        throw error;
      })
    );
  }

  FindOneSession(usuario: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http
      .get<any>(this.URLSESSIONFINDONE + usuario, { headers })
      .pipe(
        catchError((error) => {
          console.error('Error al buscar una sesión:', error);
          throw error;
        })
      );
  }
}
