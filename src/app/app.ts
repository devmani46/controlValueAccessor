import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomDropdownComponent } from './custom-dropdown/custom-dropdown';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CustomDropdownComponent
  ],

  templateUrl:`./app.html`
})
export class AppComponent {
  form = new FormGroup({
    fruit: new FormControl(''),
  });

  fruits = ['Apple', 'Banana', 'Mango', 'Orange'];
  countries = ['Nepal', 'India', 'USA', 'UK'];
}
