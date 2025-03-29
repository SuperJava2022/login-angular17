import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root',
})
export class InactivityService {
  private cantMinutos = 2;
  private UNMINUTO = 60000;
  private inactivityTime = this.UNMINUTO * this.cantMinutos; // Tiempo de inactividad en milisegundos (2 minutos)
  private inactivityTimePre = this.inactivityTime - this.UNMINUTO;
  private timeoutId: any;
  private timeoutId2: any;
  private navigationSubscription: Subscription;
  private isMonitoring = false;

  constructor(
    private router: Router,
    private ngZone: NgZone,
    private http: HttpClient,
    private sesion: SessionService
  ) {
    // Suscribirse a cambios de ruta para iniciar o detener el temporizador, no fucniona en login
    this.navigationSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url !== '/login') {
          this.startMonitoring();
        } else {
          this.stopMonitoring();
        }
      }
    });
  }

  // Iniciar monitoreo
  startMonitoring() {
    if (this.isMonitoring) return;
    this.isMonitoring = true;

    this.resetTimer();

    window.addEventListener('mousemove', () => this.resetTimer());
    window.addEventListener('keydown', () => this.resetTimer());
    window.addEventListener('click', () => this.resetTimer());
  }
  // Reiniciar el temporizador
  private resetTimer() {
    if (!this.isMonitoring) return;
    this.clearTimer();

    // Ejecutar el temporizador
    this.ngZone.runOutsideAngular(() => {
      this.timeoutId2 = setTimeout(
        () => this.messagePreClose(),
        this.inactivityTimePre
      );
    });
    this.ngZone.runOutsideAngular(() => {
      this.timeoutId = setTimeout(
        () => this.redirectToLogin(),
        this.inactivityTime
      );
    });
  }

  // mensaje precierre
  private messagePreClose() {
    Swal.fire({
      position: 'center',
      icon: 'warning',
      title: 'Su sesión se cerrará en 1 minuto(s)',
      showConfirmButton: true,
      timer: 6500,
    });
  }

  // Redirigir al usuario al login
  private redirectToLogin() {
    const user = sessionStorage.getItem('username') + '';
    const responses = this.sesion.CloseSession(user).subscribe(
      (response: any) => {},
      (error) => {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Error en cierre de sesión...' + error,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    );

    sessionStorage.removeItem('username');
    sessionStorage.removeItem('nombre');
    sessionStorage.removeItem('idsession');
    location.href = 'login';
    this.stopMonitoring(); // Detener monitoreo al redirigir a login
  }

  // Limpiar el temporizador
  private clearTimer() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
    if (this.timeoutId2) {
      clearTimeout(this.timeoutId2);
      this.timeoutId2 = null;
    }
  }

  // Detener la monitorización de la actividad
  stopMonitoring() {
    this.clearTimer();
    this.isMonitoring = false; // Desactivar flag de monitoreo
    window.removeEventListener('mousemove', () => this.resetTimer());
    window.removeEventListener('keydown', () => this.resetTimer());
    window.removeEventListener('click', () => this.resetTimer());
  }
}
