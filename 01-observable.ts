import { Observable, Observer } from "rxjs";


/** 
 * Para crear un observable se puede generar un objeto de tipo Observer con los tres valores que necesita un observable:
 * next: una funcion con un valor como parametro que sera el que emita el observable
 * error: una funcion que se ejecutara cuando dentro de la funcion next del observable ocurra un error
 * complete: una funcion que se ejecutara cuando el observable haya terminado
*/
const observer: Observer<any> = {
    next: value => console.log("next ", value),
    error: error => console.warn("error ", error),
    complete: () => console.log("Complete "),
}

const obs$ = new Observable<string>(subscriber => {
    subscriber.next("Hola")
    subscriber.next("Mundo")

    subscriber.next("Hola")
    subscriber.next("Mundo")

    //Force error
   /*  const a = undefined
    a.name = "Ary" */
    
    subscriber.complete()

    subscriber.next("Hola")
    subscriber.next("Mundo")
});

//obs$.subscribe(console.log)


/**
 * Tambien se pueden pasar como parametros al subscribe las funciones next, error y complete sin tener que crear un observable
 */

/* obs$.subscribe(
    value => console.log("next: ", value),
    error => console.warn("error: ", error),
    () => console.info("Complete"),
) */

obs$.subscribe(observer)







