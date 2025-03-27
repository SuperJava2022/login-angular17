import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { InactivityService } from './pages/services/inactivity.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'APP Generica';
  
  constructor(private inactivityService: InactivityService) {}

  ngOnInit(): void {
    // Iniciar la monitorización de inactividad cuando se carga el componente
   this.inactivityService.startMonitoring();
  }

  ngOnDestroy(): void {
    // Detener la monitorización de inactividad cuando se destruye el componente
    this.inactivityService.stopMonitoring();
  }


}
