
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'manholeFilter'
})
export class ManholeFilterPipe implements PipeTransform {
    transform(items: any[], col: string, value: string): any {
        if (col.length === 0 || value.length === 0) {
            return items;
        }
        return items.filter(x => x[col] === value);
    }
}