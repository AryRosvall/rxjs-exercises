
import { from, fromEvent, interval, Observer, of } from "rxjs";
import { map, pluck, reduce, scan, take, tap } from "rxjs/operators";

/** Take 
 * Toma solo la cantidad de emisiones que se le solicitan por parametro
*/

const observer: Observer<any> = {
    next: value => console.log("next ", value),
    error: error => console.warn("error ", error),
    complete: () => console.log("Complete "),
}

const numeros$ = of(1,2,3,4,5)

numeros$
.pipe(
    tap(console.log),
    take(3)
)
.subscribe(observer)