
import { of, from, Observer } from "rxjs";

/**
 * of = toma argumentos y genera una secuencia
 * from = array, promise, iterable, observable
 */


const observer: Observer<any> = {
    next: value => console.log("next ", value),
    error: error => console.warn("error ", error),
    complete: () => console.log("Complete "),
}


/* Diferencia entre from y of  */

/* from salida > 1,2,3,4,5  */
//const src$ = from([1,2,3,4,5])

/* of salida > [1,2,3,4,5] */
//const src$ = of([1,2,3,4,5])

/* from salida > 1,2,3,4,5 (similar a ejemplo 1 porque se usa spread operator) */
//const src$ = of(...[1,2,3,4,5])

/* of salida > Arantxa */
//const src$ = of('Arantxa')

/* from salida > A,r,a,n,t,x,a */
const src$ = from('Arantxa')



/* Ejemplo para hacer una peticion fetch con from */

//const src$ = from(fetch('https://api.github.com/users/aryrosvall'))

/* src$.subscribe(async response =>{ 
    const data = await response.json()
    console.log(data);
}) */


/* Ejemplo para ejecutar un generador con observables */

const miGenerador = function*() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const miIterable = miGenerador()

/* Esta instruccion sustituye el for */

from(miIterable).subscribe(observer)
/* for (const id of miIterable) {
    console.log(id);
}
 */
