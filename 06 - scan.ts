
import { from, interval, Observer } from "rxjs";
import { map, reduce, scan, take, tap } from "rxjs/operators";

/** Scan 
 * El scan es lo mismo que el reduce con la diferencia de que scan si devuelve el valor acumulado cada que se emite un valor
*/

const observer: Observer<any> = {
    next: value => console.log("next ", value),
    error: error => console.warn("error ", error),
    complete: () => console.log("Complete "),
}

/* Se usa el tap para debuggear lo que fluye dentro del observable */
interval(500)
.pipe(
    take(10),
    tap(console.log),
    reduce((acc, curr)=> acc + curr)
)
.subscribe(observer)

interval(500)
.pipe(
    take(10),
    tap(console.log),
    scan((acc, curr)=> acc + curr)
)
.subscribe(observer)


interface User {
    id?: string,
    auth?: boolean,
    token?: string,
    edad?: number
}

const user: User[] = [
    {id:'abc', auth: false, token:null},
    {id:'abc', auth: true, token:'ABC'},
    {id:'abc', auth: true, token:'ABD'},
]

const state$ = from(user).pipe(
    scan<User>((acc, curr)=> {
        return {...acc, ...curr}
    }, {edad:18})
)

const id$ = state$.pipe(
    map(state => state)
)

id$.subscribe(console.log)