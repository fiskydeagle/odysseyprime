import {PipeTransform, Pipe} from '@angular/core';

import {IHealthcare} from './healthcare';

@Pipe({
  name: 'healthcareFilter'
})
export class HealthcareFilterPipe implements PipeTransform {

  transform(value: IHealthcare[], filterBy: string): IHealthcare[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filterBy ? value.filter((retail: IHealthcare) =>
      retail.name.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
  }
}
