import { AsyncValidatorFn, FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { getFileType, readAsArrayBuffer } from '../../file/read';
import { inArray } from '../../utils/array';
import { hasValue } from '../../utils/check';

export function maxFileSize(size: string): ValidatorFn {
    return (control: FormControl): ValidationErrors | null => {

        const number = /[-]{0,1}[\d]*[.]{0,1}[\d]+/g;
        const sizeNumber = size.match(number);
        let multiplier = 1;

        switch (true) {
            case /[. 0-9]+(KB)/i.test(size):
                multiplier = 1e3;
                break;

            case /[. 0-9]+(MB)/i.test(size):
                multiplier = 1e6;
                break;

            case /[. 0-9]+(GB)/i.test(size):
                multiplier = 1e9;
                break;
        }

        if (hasValue(sizeNumber)) {
            const sizeOnBytes = parseFloat(sizeNumber.join('')) * multiplier;

            if (control.value) {

                if (control.value.size >= sizeOnBytes) {
                    return {
                        maxFileSize: true
                    };
                }

                return null;
            }
        } else {
            console.error('maxFileSize validation: Size must have a number');
        }

        return null;
    };
}


export function minFileSize(size: string): ValidatorFn {
    return (control: FormControl): ValidationErrors | null => {

        const number = /[-]{0,1}[\d]*[.]{0,1}[\d]+/g;
        const sizeNumber = size.match(number);
        let multiplier = 1;

        switch (true) {
            case /[. 0-9]+(KB)/i.test(size):
                multiplier = 1e3;
                break;

            case /[. 0-9]+(MB)/i.test(size):
                multiplier = 1e6;
                break;

            case /[. 0-9]+(GB)/i.test(size):
                multiplier = 1e9;
                break;
        }

        if (hasValue(sizeNumber)) {
            const sizeOnBytes = parseFloat(sizeNumber.join('')) * multiplier;

            if (control.value) {

                if (control.value.size <= sizeOnBytes) {
                    return {
                        minFileSize: true
                    };
                }

                return null;
            }
        } else {
            console.error('minFileSize validation: Size must have a number');
        }

        return null;
    };
}

export function requiredFileType(ext: string | string[]): AsyncValidatorFn {
    return (control: FormControl): Observable<ValidationErrors | null> => {

        const file = control.value;

        if (file) {

            if (!Array.isArray(ext)) {
                ext = [ext];
            }

            const types = ext.map((type) => type.toLowerCase());

            return readAsArrayBuffer(file)
                .pipe(
                    map((result: ArrayBuffer) => {

                        if (inArray(getFileType(result), types)) {
                            return null;
                        } else {
                            return {
                                requiredFileType: true
                            };
                        }

                    })
                );
        }

        return of(null);
    };
}