
import { asyncScheduler, fromEvent, Observer } from "rxjs";
import { throttleTime, distinctUntilChanged, pluck } from "rxjs/operators";

/** throttleTime
 * Este operador es similar a debounceTime, con la diferencia de que este operador emite el primer valor
 * y despues empieza a contar los segundos definidos en el primer parametro.
 * De manera opcional se pueden configurar un objeto con las opciones leading y trailing que permiten configurar\
 * si se quiere mostrar el primer valor y el ultimo.

*/

const observer: Observer<any> = {
    next: value => console.log("next ", value),
    error: error => console.warn("error ", error),
    complete: () => console.log("Complete "),
}

const click$ = fromEvent(document, 'click')

click$.pipe(
    throttleTime(3000)
).subscribe(observer)

const input = document.createElement('input')
document.querySelector('body').append(input)

const input$ = fromEvent<KeyboardEvent>(document, 'keyup')

input$.pipe(
    throttleTime(2000,asyncScheduler, {
        leading: false,
        trailing:true
    }),
    pluck('target', 'value'),
    distinctUntilChanged()
).subscribe(observer)