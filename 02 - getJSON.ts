
import {  Observer, of } from "rxjs";
import { catchError, pluck } from "rxjs/operators";
import { ajax, AjaxError } from "rxjs/ajax";

/** ajax.getJSON
 * Este operador permite realizar peticiones HTTP parseando directamente la data y convirtiendola a JSON
*/

const url = 'https://httpbin.org/delay/1'

const handleAjaxError =(err: AjaxError)=> {
    console.warn('error en: ', err)
    return of([])
}

const observer: Observer<any> = {
    next: value => console.log("next ", value),
    error: error => console.warn("error ", error),
    complete: () => console.log("Complete "),
}

const obs$ = ajax.getJSON(url, {
    'Content-Type': 'application/json',
    'mytoken': 'ABC123'
})

obs$.pipe(
    catchError(handleAjaxError)
    ).subscribe(observer)

