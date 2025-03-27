import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-inputpassword',
  templateUrl: './inputpassword.component.html',
  styleUrl: '../styles.components.css',
  standalone:true,
  imports:[PasswordModule,FormsModule,  ],
 
})
export class InputpasswordComponent {

  @Input() password: string = '';

  @Input() placeHolder: string = 'Introduce la contraseña';
  @Input() toggleMask: boolean = false;
  value: string = '';

  @Output() valueChange = new EventEmitter<string> ();


    // Métodos de ControlValueAccessor
    onChange = (value: string) => {};
    onTouched = () => {};

    writeValue(value: string): void {
      this.value = value || '';
    }
  
    registerOnChange(fn: (value: string) => void): void {
      this.onChange = fn;
    }
  
    registerOnTouched(fn: () => void): void {
      this.onTouched = fn;
    }
  
    setDisabledState?(isDisabled: boolean): void {
      // Aquí puedes manejar la desactivación del componente, si lo necesitas
    }
  
    // Método para manejar cambios en el valor
    onInputChange(event: Event): void {
      const input = event.target as HTMLInputElement; // Afirmación de tipo
      this.value = input.value; // Obtén el valor del input
      this.onChange(this.value); // Notifica el cambio
    }

    onValueChange() {
      this.valueChange.emit(this.password);

    }



}
