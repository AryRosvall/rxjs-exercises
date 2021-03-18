
import { fromEvent, Observer, range } from "rxjs";
import { map, mapTo, pluck } from "rxjs/operators";

/** Map
 * El operador map recibe cada valor del observable y lo transforma mediante la funcion definida
 */

const observer: Observer<any> = {
    next: value => console.log("next ", value),
    error: error => console.warn("error ", error),
    complete: () => console.log("Complete "),
}

/* Ejemplo para multiplicar los valores del range * 10 y convertirlos a string */
range(1,5)
.pipe(
    map<number, string>(num => (num * 10).toString())
)
.subscribe(observer)

/* Ejemplo para filtrar la salida del keyboardEvent extrayendo unicamente el nombre de la tecla presionada */

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup')

const keyupCode$ = keyup$.pipe(
    map(event => event.key)
)

keyup$.subscribe(code => console.log('todo', code))
keyupCode$.subscribe(code => console.log('map', code))


/** Pluck
 * El operador pluck extrae una propiedad de un objeto, si existe un objeto anidado, la propiedad anidada se pasa como segundo parametro 
 * */

const keyupPluck$ = keyup$.pipe(
    pluck('target', 'baseURI')
)

keyupPluck$.subscribe(code => console.log('pluck', code))

/** MapTo
 * El operador mapTo convierte los valores del observable en una salida estandar, el resultado siempre sera el mismo sin importar la salida del observable
 */

const keyupMapTo$ = keyup$.pipe(
  mapTo('tecla presionada')
)

keyupMapTo$.subscribe(code => console.log('mapTo', code))
