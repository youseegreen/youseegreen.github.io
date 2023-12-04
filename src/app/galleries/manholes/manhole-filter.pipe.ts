
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'manholeFilter'
})
export class ManholeFilterPipe implements PipeTransform {
    transform(items: any[], col: string, value: string): any {
        if (col.length === 0 || value.length === 0) {
            return items;
        }
        if (value === "ポケふた") 
            return items.filter(x => (x["city"] as String).substring(0, 4) === "ポケふた");
        else 
            return items.filter(x => x[col] === value);
    }
}