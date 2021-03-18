import {  Observer, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { endWith, startWith} from "rxjs/operators";

/** startWith Lab
 * Se hace una peticion a una API que tiene un delay de tres segundos
 * Mientras se retorna una respuesta, se genera un loading con startWith
  */
 
const observer: Observer<any> = {
    next: value => console.log("next ", value),
    error: error => console.warn("error ", error),
    complete: () => console.log("Complete "),
}

const loadingDiv = document.createElement('div')
loadingDiv.classList.add('loading')
loadingDiv.innerHTML = 'Loading...'

const body = document.querySelector('body')


ajax.getJSON('https://reqres.in/api/users/2?delay=3')
.pipe(
    startWith(true)
)
.subscribe(resp => {
    resp === true ? body.append(loadingDiv) : document.querySelector('.loading').remove();
    console.log(resp)
})

