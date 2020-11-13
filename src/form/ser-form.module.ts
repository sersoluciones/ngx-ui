import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SerFormElementComponent } from './ser-form-element/ser-form-element.component';
import { SerControlDirective } from './ser-form-element/ser-control.directive';
import { SerErrorDirective } from './ser-errors/ser-error.directive';
import { SerErrorsDirective } from './ser-errors/ser-errors.directive';
import { PinInputComponent } from './pin/pin-input.component';
import { SerSelectModule } from './select/ser-select.module';
import { AddressColComponent } from './address/address-col/address-col.component';
import { BrowserModule } from '@angular/platform-browser';
import { SerFilterModule } from './filter/ser-filter.module';

const dependencies = [
    SerFormElementComponent,
    SerControlDirective,
    SerErrorsDirective,
    SerErrorDirective,
    PinInputComponent,
    AddressColComponent
];

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    declarations: [...dependencies],
    exports: [...dependencies, SerSelectModule, SerFilterModule]
})
export class SerFormModule { }
