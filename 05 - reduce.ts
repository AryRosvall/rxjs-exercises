
import { fromEvent, interval, Observer } from "rxjs";
import { reduce, take, tap } from "rxjs/operators";

/** Reduce 
 * El reduce hace lo mismo que el reduce de JS 
*/

const observer: Observer<any> = {
    next: value => console.log("next ", value),
    error: error => console.warn("error ", error),
    complete: () => console.log("Complete "),
}

/* Se usa el tap para debuggear lo que fluye dentro del observable */
interval(500)
.pipe(
    take(10),
    tap(console.log),
    reduce((acc, curr)=> acc + curr)
)
.subscribe(observer)