import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user.interface';

@Pipe({
  name: 'isAlergicPipe',
  standalone:true
})

export class isAlergicPipe implements PipeTransform {
  transform(value: User): string {
    if(value.attributes.hypoallergenic) {
      return 'Alergic';
    }else{
      return 'No Alergic';
    }
  }
}
