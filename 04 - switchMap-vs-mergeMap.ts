import { fromEvent, interval, Observer } from "rxjs";
import { switchMap } from "rxjs/operators";



/** switchMap
 * Este operador cancela las subscripciones a los observables si es que un nuevo observable
 * es emitido por el observable padre
 */

 /** mergeMap
 * Este operador retorna todos los valores de todos los observables que se ejecuten
 */

 
const observer: Observer<any> = {
    next: value => console.log("next ", value),
    error: error => console.warn("error ", error),
    complete: () => console.log("Complete "),
}

const click$ = fromEvent(document, 'click')
const interval$ = interval(1000)

click$.pipe(
    //mergeMap(()=> interval$)
    switchMap(()=> interval$)
).subscribe(observer)
