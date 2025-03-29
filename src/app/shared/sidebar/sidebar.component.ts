import {
  Component,
  effect,
  HostListener,
  Injector,
  OnInit,
  signal,
  untracked,
} from '@angular/core';
import { SessionService } from '../../pages/services/session.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  nombreUsuario = sessionStorage.getItem('username');
  enableAdmin = this.nombreUsuario === 'Admin' ? true : false;

  constructor(private sesion: SessionService) {}

  public menuItems: any[] = [
    /*{
      titulo: 'Dashboard',
      icono: 'nav-icon fas fa-tachometer-alt',
      url: '#',
      hasSubmenu: true,
      submenu: [
        { titulo: 'DataTable', url: 'heroes', icon: 'far fa-circle' },
        { titulo: 'Toaster', url: 'toaster', icon: 'far fa-circle' },
      ],
    },*/
    {
      titulo: '1. Consultar Sesión Activa',
      icono: 'fas fa-list',
      url: 'prueba2',
      hasSubmenu: false,
    },
    {
      titulo: '2. Listar Sesiones Activas',
      icono: 'fas fa-address-book',
      url: 'prueba1',
      hasSubmenu: false,
    },
  ];

  logout() {
    const user = sessionStorage.getItem('username') + '';
    this.sesion.CloseSession(user).subscribe(
      (response: any) => {
        // console.log(response);
      }
      // (error) => {}
    );

    sessionStorage.removeItem('username');
    sessionStorage.removeItem('nombre');
    sessionStorage.removeItem('idsession');

    location.href = 'login';
  }
}
