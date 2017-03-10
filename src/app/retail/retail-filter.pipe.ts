import {PipeTransform, Pipe} from '@angular/core';

import {IRetail} from './retail';

@Pipe({
  name: 'retailFilter'
})
export class RetailFilterPipe implements PipeTransform {

  transform(value: IRetail[], filterBy: string): IRetail[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filterBy ? value.filter((retail: IRetail) =>
      retail.name.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
  }
}
