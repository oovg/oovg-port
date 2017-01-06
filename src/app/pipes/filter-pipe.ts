import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
    name: 'worksFilter',
    pure: false
})
export class WorksFilterPipe implements PipeTransform {
    transform(value: any, args: string[]): any {
       let filter = args[0].toLocaleLowerCase();
       return filter ? value.filter(work => work.type.toLocaleLowerCase().indexOf(filter) !== -1) : value;
    }
}
