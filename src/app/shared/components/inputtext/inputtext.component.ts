import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-inputtext',
  templateUrl: './inputtext.component.html',
  styleUrl: '../styles.components.css',
  
  
})
export class InputtextComponent {

  @Input() value: string='';
  @Input() style2: { [key: string]: string } = {}; 
  @Input() helpText?: string = '' ; 
  @Input() disable?: boolean=false; 
  @Input() placeHolder?: string ='';
  @Input() type: string ='text';

  @Output() valueChange = new EventEmitter<string> ();
  
  onValueChange() {
    this.valueChange.emit(this.value);

  }
}
