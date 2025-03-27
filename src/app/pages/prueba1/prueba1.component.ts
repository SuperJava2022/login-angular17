import { Component } from '@angular/core';

@Component({
  selector: 'app-prueba1',
  templateUrl: './prueba1.component.html',
  styleUrl: './prueba1.component.css'
})
export class Prueba1Component {
  password:string='';
  columns = [
    { field: 'id', header: 'Id' },
    { field: 'name', header: 'Name' },
    { field: 'age', header: 'Age' },
    { field: 'email', header: 'Email' },

  ];

  filtros =[ 'id','name','age','email' ]

  data = [
    { id:'1', name: 'John Doe', age: 30, email: 'john@example.com' },
    { id:'2', name: 'Jane Doe', age: 25, email: 'janedoe@example.com' },
    { id:'3', name: 'Luis Doe', age: 26, email: 'luisdoe@gmail.com' },
    { id:'4', name: 'Luchito Doe', age: 29, email: 'luchitodoe@example.com' },
    { id:'5', name: 'Manuel Doe', age: 50, email: 'manueldoe@example.com' },
    { id:'6', name: 'Masha Doe', age: 43, email: 'mashadoe@example.com' },
    { id:'7', name: 'Scarlet Doe', age: 19, email: 'scarletdoe@example.com' },
    { id:'8', name: 'Algo Doe', age: 33, email: 'algodoe@example.com' },
    { id:'9', name: 'Manuel2 Doe', age: 50, email: 'manueldoe@example.com' },
    { id:'10', name: 'Masha2 Doe', age: 43, email: 'mashadoe@example.com' },
    { id:'11', name: 'Scarlet2 Doe', age: 19, email: 'scarletdoe@example.com' },
    { id:'12', name: 'Algo2 Doe', age: 33, email: 'algodoe@example.com' },
  ];

}
