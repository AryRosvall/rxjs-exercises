

import {  fromEvent, Observer } from "rxjs";
import { debounceTime, distinctUntilChanged, pluck } from "rxjs/operators";

/** debounceTime
 * Con este operador, aunque el observable emita valores continuamente, unicamente tomara
 * el valor que se haya emitido despues de la cantidad de segundos indicada por parametro
*/

const observer: Observer<any> = {
    next: value => console.log("next ", value),
    error: error => console.warn("error ", error),
    complete: () => console.log("Complete "),
}

const click$ = fromEvent(document, 'click')

click$.pipe(
    debounceTime(3000)
).subscribe(observer)

const input = document.createElement('input')
document.querySelector('body').append(input)

const input$ = fromEvent<KeyboardEvent>(document, 'keyup')

// Ejemplo para validar que en un campo de busqueda no se emitan los mismos valores multiples veces
input$.pipe(
    debounceTime(1000),
    pluck('target', 'value'),
    distinctUntilChanged()
).subscribe(observer)