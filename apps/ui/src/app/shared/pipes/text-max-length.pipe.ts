import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textMaxLength',
})
export class TextMaxLengthPipe implements PipeTransform {
  transform(value: string, maxLength: number): string {
    return value?.length > maxLength ? value.substr(0, maxLength) : value;
  }
}
