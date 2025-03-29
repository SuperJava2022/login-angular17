import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../../interfaces/usuarios.interface';
import { AuthService } from '../../pages/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  usuario = '';
  password = '';

  usuarios!: Usuarios;

  constructor(private usuariosSvc: AuthService) {}

  onSubmit() {
    const datos = {
      usuario: this.usuario,
      contrasena: this.password,
    };
    // localStorage.setItem('usuario','true');
    // localStorage.setItem('nombre','luis');

    // location.href='dashboard';
    //this.usuariosSvc.obtenerUsuarios(this.usuario,this.pass).subscribe((res:any)=>{
    this.usuariosSvc.sendAuthLogin(this.usuario).subscribe(
      (response: any) => {
        const token = response.body.token;

        this.usuariosSvc.saveToken(token);

        this.userAuthenticated(this.usuario);
      },
      (error) => {
        console.log(error);

        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Credenciales incorrectas...',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    );
  }

  userAuthenticated(usuario: any) {
    this.usuariosSvc.getCreateSession(usuario).subscribe((response: any) => {
      const temp = response;

      if (temp) {
        sessionStorage.setItem('usuario', 'true');
        sessionStorage.setItem('username', temp.userName);
        sessionStorage.setItem('idsession', temp.id);
        location.href = 'dashboard';
      } else {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'El usuario no existe...',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }
  onInputValueChange(value: string) {
    this.usuario = value; // Pasar el valor capturado al input dinámico
    // console.log('user: ', this.usuario);
  }
  onInputPasswordValueChange(value: string) {
    this.password = value; // Pasar el valor capturado al input dinámico
    // console.log('pass: ', this.password);
  }
}
