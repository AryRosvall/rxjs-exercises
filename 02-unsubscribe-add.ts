import { Observable, Observer } from "rxjs";


const observer: Observer<any> = {
    next: value => console.log("next: ", value),
    error: error => console.warn("error: ", error),
    complete: () => console.log("Complete "),
}

const interval$ = new Observable<number>(subscriber =>{

    let num = 0
    const interval = setInterval(()=> {
       subscriber.next(++num) 
    }, 1000)

    setTimeout(() => {
        subscriber.complete()
    }, 4000);

    return () => {
        clearInterval(interval)
        console.log("Interval destroyed")
    }
})

const subs1 = interval$.subscribe(observer)
const subs2 = interval$.subscribe(observer)
const subs3 = interval$.subscribe(observer)

subs1.add(subs2).add(subs3)

setTimeout(() => {
    subs1.unsubscribe()


    console.log("Timeout")
}, 10000);

