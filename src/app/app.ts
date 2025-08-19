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
  template: `
    <div style="max-width: 400px; margin: 30px auto; font-family: Arial, sans-serif;">
      <h2 style="color: #333; text-align: center;">Custom Dropdown with CVA</h2>

      <!-- ✅ Reactive Form -->
      <form [formGroup]="form" style="margin-bottom: 20px;">
        <label style="display: block; margin-bottom: 10px;">
          Favorite Fruit:
          <app-custom-dropdown
            formControlName="fruit"
            [options]="fruits"
          ></app-custom-dropdown>
        </label>
      </form>

      <p><strong>Reactive Form Value:</strong> {{ form.value | json }}</p>

      <hr />

      <form #f="ngForm">
        <label style="display: block; margin-bottom: 10px;">
          Country:
          <app-custom-dropdown
            name="country"
            ngModel
            [options]="countries"
          ></app-custom-dropdown>
        </label>
      </form>

      <p><strong>Template-driven Form Value:</strong> {{ f.value | json }}</p>
    </div>
  `,
})
export class AppComponent {
  form = new FormGroup({
    fruit: new FormControl(''),
  });

  fruits = ['Apple', 'Banana', 'Mango', 'Orange'];
  countries = ['Nepal', 'India', 'USA', 'UK'];
}
