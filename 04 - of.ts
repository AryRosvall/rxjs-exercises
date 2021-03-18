
import { of, Observer } from "rxjs";

/* of sirve para generar un observable a partir de una lista de elementos */

const observer: Observer<any> = {
    next: value => console.log("next ", value),
    error: error => console.warn("error ", error),
    complete: () => console.log("Complete "),
}
//const obs$ = of(1,2,3,4,5,6)
//const obs$ = of<number>(...[9,8,7,6],1,2,3,4,5,6)
const obs$ = of<any>([9,8,7,6],true, {a:1, b:2}, function(){}, Promise.resolve(true))

console.log('init obs')

obs$.subscribe(
    observer
    )

console.log('end obs')