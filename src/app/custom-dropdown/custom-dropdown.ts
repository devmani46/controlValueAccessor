import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-dropdown',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dropdown-wrapper">
      <select
        [value]="value"
        (change)="onSelect($event)"
        (blur)="onTouched()"
        [disabled]="disabled"
        class="dropdown"
      >
        <option value="" disabled>Select an option</option>
        <option *ngFor="let option of options" [value]="option">
          {{ option }}
        </option>
      </select>
    </div>
  `,
  styles: [`
    .dropdown {
      padding: 8px;
      border: 2px solid #28a745;
      border-radius: 6px;
      width: 100%;
      background: #fff;
    }
    .dropdown:disabled {
      background: #f0f0f0;
    }
  `],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomDropdownComponent),
      multi: true,
    },
  ],
})
export class CustomDropdownComponent implements ControlValueAccessor {
  @Input() options: string[] = [];
  value: string = '';
  disabled: boolean = false;

  // CVA Callbacks
  onChange = (value: string) => {};
  onTouched = () => {};

  writeValue(value: string): void {
    this.value = value || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onSelect(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.value = select.value;
    this.onChange(this.value);
  }
}
