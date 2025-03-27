import { Injectable, NgZone } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class InactivityService {

  private cantMinutos=2;
  private inactivityTime = 60000*this.cantMinutos; // Tiempo de inactividad en milisegundos (10 segundos)
  private inactivityTimePre = this.inactivityTime-60000;
  private timeoutId: any;
  private timeoutId2: any;
  private navigationSubscription: Subscription;
  private isMonitoring = false; // Flag para controlar el monitoreo

  constructor(private router:Router, private ngZone: NgZone) { 
       // Suscribirse a cambios de ruta para iniciar o detener el temporizador
       this.navigationSubscription = this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          
          if (event.url !== '/login') {
            this.startMonitoring();
          } else {
            this.stopMonitoring(); // Detener temporizador en /login
          }
        }
      });

  }

    // Iniciar la monitorización de la actividad
    startMonitoring() {

      if (this.isMonitoring) return; // Evitar iniciar varias veces
      this.isMonitoring = true;

      this.resetTimer(); // Iniciar el temporizador al cargar
  
      // Detectar eventos de usuario y reiniciar el temporizador
      window.addEventListener('mousemove', () => this.resetTimer());
      window.addEventListener('keydown', () => this.resetTimer());
      window.addEventListener('click', () => this.resetTimer());
    }
      // Reiniciar el temporizador
  private resetTimer() {

    if (!this.isMonitoring) return; // Detener si no se debe monitorear
    this.clearTimer();

    // Ejecutar el temporizador fuera de Angular para evitar detección de cambios
    this.ngZone.runOutsideAngular(() => {
      this.timeoutId2 = setTimeout(() => this.messagePreClose(), this.inactivityTimePre);
    });
    this.ngZone.runOutsideAngular(() => {
      this.timeoutId = setTimeout(() => this.redirectToLogin(), this.inactivityTime);
    });
  }

    // Redirigir al usuario al login
    private messagePreClose(){
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "Su sesión se cerrará en "+this.cantMinutos+" minuto(s)",
        showConfirmButton: true,
        timer: 6500
      });
     
    }

    // Redirigir al usuario al login
    private redirectToLogin() {
      localStorage.removeItem('usuario');
      localStorage.removeItem('nombre');
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
