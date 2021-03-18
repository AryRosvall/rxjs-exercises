
import { fromEvent, Observer } from "rxjs";
import { map, takeWhile, tap } from "rxjs/operators";

/** takeWhile 
 * Retorna todos los valores que cumplan con la condicion pasada como parametro mediante una funcion.
 * El segundo parametro es booleano e indica si quieres incluir el resultado que rompio la condicion.
*/

const observer: Observer<any> = {
    next: value => console.log("next ", value),
    error: error => console.warn("error ", error),
    complete: () => console.log("Complete "),
}

const click$ = fromEvent<MouseEvent>(document, 'click')

click$.pipe(
    tap(console.log),
    map(({clientX,clientY})=> ({clientX,clientY})),
    takeWhile(({clientY})=> clientY <= 150, true )
).subscribe(observer)