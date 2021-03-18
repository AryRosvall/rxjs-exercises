
import { interval, timer, Observer } from "rxjs";


/* Interval genera un observable con numeros secuenciales pasando como parametro el tiempo en milisegundos que se requiere que se envie cada valor */
/*  */
const observer: Observer<any> = {
    next: value => console.log("next ", value),
    error: error => console.warn("error ", error),
    complete: () => console.log("Complete "),
}


const interval$ = interval(1000)
//const timer$ = timer(2000)

/* Crea un intervalo que se ejecuta cada segundo despues de 3 segundos */
//const timer$ = timer(3000, 1000)

/* Programar que se ejecute el timer en la fecha que se le indique pasandole una fecha */
const hoyEn5 = new Date()
hoyEn5.setSeconds(hoyEn5.getSeconds()+5)
const timer$ = timer(hoyEn5)

console.log('init');
//interval$.subscribe(observer)
timer$.subscribe(observer)
console.log('end');
