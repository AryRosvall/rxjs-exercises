
import { fromEvent, Observer } from "rxjs";

/* fromEvent sirve para generar un observable a partir de un evento del DOM */

const observer: Observer<any> = {
    next: value => console.log("next ", value),
    error: error => console.warn("error ", error),
    complete: () => console.log("Complete "),
}

/**
 *    DOM Events
 * */
const obs$ = fromEvent<MouseEvent>(document, 'click')
const obs2$ = fromEvent<KeyboardEvent>(document, 'keyup')

obs$.subscribe(({x,y}) => {
    console.log(x, y)
})

obs2$.subscribe(event => {
    console.log(event.key)
})