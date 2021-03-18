
import { Observer, range } from "rxjs";
import {  map, tap } from "rxjs/operators";

/** Tap
 * Permite realizar efectos secundarios sin afectar la salida del observable
 */

const observer: Observer<any> = {
    next: value => console.log("next x ", value),
    error: error => console.warn("error ", error),
    complete: () => console.log("Complete "),
}

const nums$ = range(1,5)

/* Tap puede recibir una funcion o un observer */

nums$.pipe(
    tap(x => console.log('antes', x)),
    map(val => val * 10),
    tap({
        next: x => console.log('despues', x),
        complete: () => console.log('finalizo todo')
    }),
).subscribe(observer)