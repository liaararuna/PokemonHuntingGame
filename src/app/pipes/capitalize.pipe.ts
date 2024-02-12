import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {
  transform(term: string): string {
    if (!term) return '';
    return term.charAt(0).toUpperCase() + term.slice(1).toLowerCase();
  }
}
