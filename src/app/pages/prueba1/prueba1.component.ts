import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-prueba1',
  templateUrl: './prueba1.component.html',
  styleUrl: './prueba1.component.css',
})
export class Prueba1Component implements OnInit {
  arraySessions = [];
  constructor(private session: SessionService) {}

  ngOnInit(): void {
    const responses = this.session.FindAllSession('').subscribe(
      (response: any) => {
        console.log(response);
        this.arraySessions = response;
      },
      (error) => {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Error en búsqueda de sesiones...' + error,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    );
  }

  columns = [
    { field: 'id', header: 'Id' },
    { field: 'userName', header: 'Usuario' },
    { field: 'status', header: 'Estado' },
    { field: 'dateStart', header: 'Fecha Inicio' },
  ];
}
