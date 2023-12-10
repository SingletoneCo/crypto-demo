import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'positiveNumberMark',
  standalone: true
})
export class PositiveNumberMarkPipe implements PipeTransform {

  transform(value: string | number | null): string | null {
    if (!value) {
      return null;
    }
    const valueAsString = value.toLocaleString().trim();

    return isNumberPositive(valueAsString) ? `+${ valueAsString }` : valueAsString;
  }

}

function isNumberPositive(value: string): boolean {
  return value.toLocaleLowerCase().substring(0, 1) !== '-';
}
