import { Component, Input, OnInit, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Table } from 'primeng/table';


@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrl: '../styles.components.css'
})



export class DatatableComponent {

  @Input() columns: any[] = [];  // Recibe las columnas de la tabla
  @Input() data: any[] = [];     // Recibe los datos de la tabla
  @Input() filterable: boolean = false;
  @Input() rows: number = 5;
  @Input() placeHolder:string='';
  @Input() filtros:string[]=[];
  //VARIABLES INICIALES
  habilitaExportar:boolean=true;
  globalFilter: string = '';
  
  estilosHijo = {

    width:'350px'
  };
 

  exportToCSV(){
    
    if (this.data && this.data.length > 0) {
      let csvContent = this.columns.map(col => col.header).join(';') + '\n';

      // Agregar filas al CSV
      this.data.forEach(row => {
        const rowData = this.columns.map(col => row[col.field]);
        csvContent += rowData.join(';') + '\n';
      });

      // Crear y descargar el archivo CSV
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.setAttribute('download', 'data_prueba.csv');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      console.error('No hay datos disponibles para exportar a CSV.');
    }



  }

  exportToPDF(){
    const doc=new jsPDF();
    const rows=this.data.map(row=>this.columns.map(col=>row[col.field]));
    
    //Titulo del pdf
    doc.text('Documento Prueba pdf',10,10);

    //Generar el pdf
    autoTable(doc,{
      head:[this.columns.map(col=>col.header)],
      body:rows
    });

    //Descargar el pdf
    doc.save('documento_pdf.pdf')

  }


  //llamar formulario agregar registro
  newRegistry(){
    alert('Nuevo ID: ');
  }

  editRegistry(id: any){
    alert('Editar ID: '+id.id);
    console.log(id)
  }
  delRegistry(id: any){
    alert('Eliminar ID: '+id.id);
  }



    
    
//     this.cols = [
//       { field: 'code', header: 'Code' },
//       { field: 'name', header: 'Name' },
//       { field: 'category', header: 'Category' },
//       { field: 'quantity', header: 'Quantity' }
//   ];

//   this.products = [
//     [ 'f230fh0g3', 'Bamboo Watch', 'Accessories', 24 ],
//     [ 'nvklal433', 'Blue Band', 'Accessories', 5 ],
//     [ 'h456wer53', 'Red T-shirt', 'Clothing', 90 ],
    
// ];
  
  

}
