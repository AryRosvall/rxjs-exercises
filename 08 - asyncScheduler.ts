
import { asyncScheduler, Observer } from "rxjs";

/**
 * El asyncScheduler permite simular la funcion setTimeout y la funcion setInterval
 * setTimeout (() => {}, 1000)
 * setInterval(() => {}, 1000)
 */

const observer: Observer<any> = {
    next: value => console.log("next ", value),
    error: error => console.warn("error ", error),
    complete: () => console.log("Complete "),
}

/* Configurando un setTimeout */

const greet = () => console.log('Hola mundo');
const greet2 = ({name, lastName}) => console.log(`Hola ${name} ${lastName}`);

asyncScheduler.schedule(greet, 2000)

/** 
 * Primer argumento: funcion a ejecutar
 * Segundo argumento: tiempo en milisegundos despues de los que se ejecutara dicha funcion
 * Tercer argumento: Parametro de la funcion (la funcion solo debe recibir un parametro, si se requiere pasar mas de un valor hacerlo en un objeto)
 * */
asyncScheduler.schedule(greet2, 2000, {name:'Ary', lastName:'Rosas'})


/** Configurando un setInterval 
 * 
 * A diferencia del setTimeout se requiere que el primer argumento sea una funcion tradicional (no arrow function).
 * Para ejecutar el siguiente valor usar this.schedule(siguienteValor, tiempoEnQueSeEjecuta)
*/

const subs = asyncScheduler.schedule(function(state){
    console.log('state ', state++);
    this.schedule(state, 1000)
}, 3000, 0)

/* Para desuscribirse al asyncScheduler basta con asignar el asyncScheduler a una variable y luego ejecutar el metodo unsubscribe */

/* El siguiente ejemplo simula un setTimeout donde se desuscribe del asyncScheduler despues de 6 segundos  */

/* setTimeout(() => {
    subs.unsubscribe()
}, 6000); */

asyncScheduler.schedule(()=>subs.unsubscribe(), 6000)