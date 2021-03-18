import { fromEvent, interval, Observer } from "rxjs";
import { exhaustMap, take, tap } from "rxjs/operators";

/** exhaustMap
 * Este operador solo mantiene una suscripcion activa a un observable,
 * si se emite otro observable en el padre, sera ignorado hasta que el primer observable se complete
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
    exhaustMap(()=> interval$.pipe(take(3)))
).subscribe(observer)
