import {  forkJoin, Observer, of, interval } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError, delay, take} from "rxjs/operators";

/** forkJoin (funcion deprecada)
 * Es una funcion que devuelve la ultima emision de los observables en un arreglo
  */
 
const observer: Observer<any> = {
    next: value => console.log("next ", value),
    error: error => console.warn("error ", error),
    complete: () => console.log("Complete "),
}

const GITHUB_API_URL = 'https://api.github.com/users'
const GITHUB_USER = 'aryrosvall'

forkJoin({
    user: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}`),
    repos: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/reposs`).pipe(
        catchError(err => of(err.message))
    ),
    gists: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/gists`),
   
}).pipe(
    catchError(err => of(err.message))
)
.subscribe(observer)