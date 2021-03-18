
import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log("next: ", value),
    error: error => console.warn("error: ", error),
    complete: () => console.log("Complete "),
}

const interval$ = new Observable<number>(subscriber =>{


    //Se crea un intervalo para emitir numeros de manera infinita
    let num = 0
    const interval = setInterval(() => subscriber.next(Math.random()), 1000)

  
    //Para destruir el intervalo se regresa una funcion con el clearInterval 
    return () => {
        clearInterval(interval)
        console.log("Interval destroyed")
    }
})

/**
 * Propiedades del observer:
 * 1 - Casteo multiple
 * 2 - Tambien es un observer
 * 3 - Next, error y complete
 *  */  

const subject$ = new Subject()

const subjectSubscription = interval$.subscribe(subject$)
const subs1 = subject$.subscribe(rnd => console.log('subs1 ', rnd ))
const subs2 = subject$.subscribe(rnd => console.log('subs2 ', rnd ))

setTimeout(() => {
    subject$.next(10) 
    subject$.complete()
    subjectSubscription.unsubscribe()
}, 3500);