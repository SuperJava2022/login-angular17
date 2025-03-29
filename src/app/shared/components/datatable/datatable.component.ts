import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrl: '../styles.components.css',
})
export class DatatableComponent {
  @Input() columns: any[] = []; // Recibe las columnas de la tabla
  @Input() data: any[] = []; // Recibe los datos de la tabla
  @Input() enableFind: boolean = false;
  @Input() rows: number = 5;
  @Input() placeHolder: string = '';
  @Input() filtros: string[] = [];

  @Output() executeFather: EventEmitter<{ arg1: string }> = new EventEmitter();

  //VARIABLES INICIALES
  habilitaExportar: boolean = true;
  findSession: string = '';

  estilosHijo = {
    width: '350px',
  };

  onCLickFind(): void {
    //console.log('Ejecuto algo');

    this.executeFather.emit({ arg1: this.findSession });
  }
}
