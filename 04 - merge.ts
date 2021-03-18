import {  merge, Observer, fromEvent } from "rxjs";
import { pluck} from "rxjs/operators";

/** merge (funcion)
 * Es una funcion que permite combinar observables
 * la salida que se vera reflejada sera del observable que emita valores primero
  */
 
const observer: Observer<any> = {
    next: value => console.log("next ", value),
    error: error => console.warn("error ", error),
    complete: () => console.log("Complete "),
}

const keyup$ = fromEvent(document, 'keyup')
const click$ = fromEvent(document, 'click')

merge(
    keyup$.pipe(pluck('type')),
    click$.pipe(pluck('type'))
) 
.subscribe(observer)