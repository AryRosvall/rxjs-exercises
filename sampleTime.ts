
import {  fromEvent, Observer } from "rxjs";
import { sampleTime, map } from "rxjs/operators";

/** sampleTime
 * Este operador toma el ultimo valor emitido en un intervalo de tiempo pasado por parametro en milisegundos
*/

const observer: Observer<any> = {
    next: value => console.log("next ", value),
    error: error => console.warn("error ", error),
    complete: () => console.log("Complete "),
}

const click$ = fromEvent<MouseEvent>(document, 'click')

click$.pipe(
    sampleTime(3000),
    map(({x,y}) =>( {x,y})),
).subscribe(observer)
