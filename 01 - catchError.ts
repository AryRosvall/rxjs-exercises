
import {  Observer, of } from "rxjs";
import { catchError, pluck } from "rxjs/operators";
import { ajax, AjaxError } from "rxjs/ajax";

/** ajax
 * Este operador permite realizar peticiones HTTP
*/

/** catchError
 * Este operador permite interceptar errores y manejar el error devolviendo un error o un observable
*/

const url = 'https://api.github.com/users?per_page=5'
const invalidUrl = 'https://api.github.com/usersxx?per_page=5'

const handleAjaxError =(err: AjaxError)=> {
    console.warn('error en: ', err)
    return of([])
}

const observer: Observer<any> = {
    next: value => console.log("next ", value),
    error: error => console.warn("error ", error),
    complete: () => console.log("Complete "),
}

ajax(invalidUrl).pipe(
    pluck('response'),
    catchError(handleAjaxError)
    ).subscribe(observer)


    /* Mismo ejemplo implementando fetch */
/*
    const handleError = (response:Response) => {
        if(!response.ok){
            throw new Error(response.statusText);
        }
        return response
    }

    const fetchPromise = fetch(url)

    fetchPromise
    .then(handleError)
    .then(response => response.json())
    .then(console.log)
    .catch(err => console.warn('error en users ', err))
*/
