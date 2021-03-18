
import { fromEvent, Observer } from "rxjs";
import { first, tap } from "rxjs/operators";

/** First 
 * Retorna solo el primer observable que cumpla con las condiciones pasadas por parametro mediante una funcion,
 * sino se especifica un parametro, simplemente va a tomar el primer valor que se emita.
*/

const observer: Observer<any> = {
    next: value => console.log("next ", value),
    error: error => console.warn("error ", error),
    complete: () => console.log("Complete "),
}

const click$ = fromEvent<MouseEvent>(document, 'click')

click$.pipe(
    tap(()=>console.log('tap')),
    first(({clientY})=> clientY >= 150)
).subscribe(observer)