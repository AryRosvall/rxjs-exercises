
import { of, range, Observer, asyncScheduler } from "rxjs";


/* Range permite crear un observable con un rango de valores de forma sincrona o asincrona (importando asyncScheduler) */
const observer: Observer<any> = {
    next: value => console.log("next ", value),
    error: error => console.warn("error ", error),
    complete: () => console.log("Complete "),
}

// const src$ = of(1,2,3,4,5)
const src$ = range(1,100, asyncScheduler)

console.log('init');

src$.subscribe(observer)

console.log('end');
