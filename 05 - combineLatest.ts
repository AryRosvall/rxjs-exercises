import {  merge, Observer, fromEvent, combineLatest } from "rxjs";
import { pluck} from "rxjs/operators";

/** combineLatest (funcion deprecada)
 * Es una funcion que permite combinar observables
 * hasta que todos los observables terminen de emitir valores se mostrara la salida
  */
 
const observer: Observer<any> = {
    next: value => console.log("next ", value),
    error: error => console.warn("error ", error),
    complete: () => console.log("Complete "),
}

const input1 = document.createElement('input')
const input2 = document.createElement('input')

input1.placeholder = 'email@gmail.com'
input2.placeholder = '***'
input2.type = 'password'

document.querySelector('body').append(input1,input2)

const getInputStream = (elem: HTMLElement) => {
    return fromEvent(elem, 'keyup').pipe(
        pluck('target','value')
    )
}


combineLatest(
    getInputStream(input1),
    getInputStream(input2)
) 
.subscribe(observer)