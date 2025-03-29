import { Component } from '@angular/core';
import { SessionService } from '../services/session.service';
import Swal from 'sweetalert2';
import { Session } from '../../interfaces/session.interface';

@Component({
  selector: 'app-prueba2',
  templateUrl: './prueba2.component.html',
  styleUrl: './prueba2.component.css',
})
export class Prueba2Component {
  arraySessions: Session[] = [];
  constructor(private session: SessionService) {}

  columns = [
    { field: 'id', header: 'Id' },
    { field: 'userName', header: 'Usuario' },
    { field: 'status', header: 'Estado' },
    { field: 'dateStart', header: 'Fecha Inicio' },
  ];

  findOneSession(user: string) {
    const responses = this.session.FindOneSession(user).subscribe(
      (response: Session) => {
        console.log(response);
        const data: Session = response;
        this.arraySessions.push(data);
      },
      (error) => {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Error en búsqueda sesión cerrada o no existe...',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    );
  }
}
