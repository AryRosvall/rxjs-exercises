import {  Observer, of } from "rxjs";
import { endWith, startWith} from "rxjs/operators";

/** startWith y endWith
 * Se agrega un valor antes de emitir los valores o antes de completarse el observable
  */
 
const observer: Observer<any> = {
    next: value => console.log("next ", value),
    error: error => console.warn("error ", error),
    complete: () => console.log("Complete "),
}

const nums$ = of(1,2,3).pipe(
    startWith(0),
    endWith(4)
)

nums$.subscribe(observer)