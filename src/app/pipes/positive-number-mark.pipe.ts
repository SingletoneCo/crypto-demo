import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'positiveNumberMark',
  standalone: true
})
export class PositiveNumberMarkPipe implements PipeTransform {

  transform(value: string | number | null): string | null {
    if (!value && value !== 0) {
      return null;
    } else if (value.toString().trim() === '0') {
      return value.toString();
    }
    const valueAsString = value.toLocaleString().trim();
    return isNumberPositive(valueAsString) ? `+${ valueAsString }` : valueAsString;
  }

}

function isNumberPositive(value: string): boolean {
  return value.substring(0, 1) !== '-';
}
