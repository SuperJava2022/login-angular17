import { Component, effect, HostListener, Injector, OnInit, signal, untracked } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {

  nombreUsuario = localStorage.getItem('nombre');
  // public actividad = signal(true);
  // private time:any;

  // @HostListener('mousemove',['$event'])
  // public enviarMouse(btn:any){
  //   this.actividad.set(true);
  // }

  // constructor(private inject:Injector){}

  // ngOnInit(): void {
  // this.metodoInactividad();
  // }

  // private metodoInactividad(){

  //   effect(()=>{
  //     if(this.actividad()){
  //       console.log('La actividad cambia ',this.actividad());
  //       if(this.time){
  //         clearTimeout(this.time);
  //       }
  //      this.time= setTimeout(()=>{
  //         alert('Se va a cerrar la ventana por inactividad!!!');
  //         window.close();
  //       },10000);
  //       untracked(()=>{
  //         this.actividad.set(false);
  //       });
  //     }
      
  //   },{injector:this.inject});

  // }


  public menuItems: any[] = [
    {
      titulo: 'Dashboard',
      icono: 'nav-icon fas fa-tachometer-alt',
      url:'#',
      hasSubmenu:true,
      submenu: [
        { titulo: 'DataTable', url: 'heroes', icon: 'far fa-circle' },
        { titulo: 'Toaster', url: 'toaster', icon: 'far fa-circle' },
      ],
    },
    {
      titulo:'Tabla Luis',
      icono:'fas fa-splotch',
      url:'prueba1',
      hasSubmenu:false,
      
    },
  ];

  logout() {
    localStorage.removeItem('usuario');
    localStorage.removeItem('nombre');

    location.href = 'login';
  }
}
