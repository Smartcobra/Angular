import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'sentencase',
})
export class SentenCasePipe implements PipeTransform {
  transform(str: any) {
    let firstChar = str.charAt(0);
    let restChars = str.substring(1);
    let sentence = firstChar.toUpperCase() + restChars.toLowerCase();
    return sentence;
  }
}
