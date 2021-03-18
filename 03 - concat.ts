import {  concat, interval, Observer, of } from "rxjs";
import { take} from "rxjs/operators";

/** concat (funcion)
 * Es una funcion que permite concatenar observables
 * una vez que se termine el primero, se ejecuta el segundo y asi sucesivamente
  */
 
const observer: Observer<any> = {
    next: value => console.log("next ", value),
    error: error => console.warn("error ", error),
    complete: () => console.log("Complete "),
}

const interval$ = interval(1000)

concat(
    interval$.pipe(take(3)),
    interval$.pipe(take(2)),
   [1,2,3]
)
.subscribe(observer)

