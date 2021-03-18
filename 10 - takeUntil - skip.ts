
import { fromEvent, interval, Observer } from "rxjs";
import { takeUntil, skip, tap } from "rxjs/operators";

/** takeUntil 
 * Retorna todos los valores hasta que el primer observable emita su primer valor.
*/

/** skip 
 * El operador skip salta el numero de valores que se le pasen por parametro, antes de emitir su primer valor
*/

const observer: Observer<any> = {
    next: value => console.log("next ", value),
    error: error => console.warn("error ", error),
    complete: () => console.log("Complete "),
}

const button = document.createElement('button')
button.innerHTML = 'Stop timer'
document.querySelector('body').append(button)

const counter$ = interval(1000)
const clickBtn$ = fromEvent<MouseEvent>(button, 'click').pipe(
    tap(()=> console.log('tap antes de skip')),
    skip(2),
    tap(()=> console.log('tap despues de skip'))
)

counter$.pipe(
    takeUntil(clickBtn$)
    )
.subscribe(observer)

