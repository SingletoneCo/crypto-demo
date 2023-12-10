import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spaceNumberDelimiter',
  standalone: true
})
export class SpaceNumberDelimiterPipePipe implements PipeTransform {

  transform(value: number | string | null): string | null {

    if (!value) {
      return null;
    }

    // Solution proposed by Domvel in this thread https://github.com/angular/angular/issues/33505
    const thousandSeparator = (1234).toLocaleString().replace(/\d/g, '');
    const thousandSeparatorRegex = new RegExp(escapeRegex(thousandSeparator), 'g');

    return value.toLocaleString().replace(thousandSeparatorRegex, ' ');
  }

}

function escapeRegex(string: string) {
  return string.replace(/[/\-\\^$*+?.()|[\]{}]/g, '\\$&');
}
