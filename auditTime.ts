
import { fromEvent, Observer } from "rxjs";
import { auditTime, map, tap } from "rxjs/operators";

/** auditTime
 * Este operador toma el ultimo valor que emite el observable en el periodo de tiempo pasado por parametro.
*/

const observer: Observer<any> = {
    next: value => console.log("next ", value),
    error: error => console.warn("error ", error),
    complete: () => console.log("Complete "),
}

const click$ = fromEvent<MouseEvent>(document, 'click')

click$.pipe(
    map(({x})=> x),
    tap(x => console.log('tap ', x)),
    auditTime(1000)
).subscribe(observer)
