import { fromEvent, interval, Observer } from "rxjs";
import { concatMap, take, tap } from "rxjs/operators";

/** concatMap
 * Este operador pone en cola las subscripciones a los nuevos observables si es que el observable
 * actual aun no se completa
 */
 
const observer: Observer<any> = {
    next: value => console.log("next ", value),
    error: error => console.warn("error ", error),
    complete: () => console.log("Complete "),
}

const click$ = fromEvent(document, 'click')
const interval$ = interval(1000)

click$.pipe(
    tap(console.log),
    concatMap(()=> interval$.pipe(take(3)))
).subscribe(observer)
