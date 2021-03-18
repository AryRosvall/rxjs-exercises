
import { fromEvent, Observer, interval } from "rxjs";
import { sample } from "rxjs/operators";

/** sample
 * Este operador toma el ultimo valor que se emite al momento de que se emite el valor de un segundo observable.
*/

const observer: Observer<any> = {
    next: value => console.log("next ", value),
    error: error => console.warn("error ", error),
    complete: () => console.log("Complete "),
}

const interval$ = interval(500)

const click$ = fromEvent<MouseEvent>(document, 'click')

interval$.pipe(
    sample(click$)
).subscribe(observer)
