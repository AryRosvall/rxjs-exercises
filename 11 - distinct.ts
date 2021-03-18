
import { from, fromEvent, Observer, of } from "rxjs";
import { distinct, tap } from "rxjs/operators";

/** distinct 
 * Retorna todos los valores distintos, si hay un valor repetido, este ya no se emitira.
 * Este operador evalua los valores con triple igualdad es decir si se compara un 1 con un '1' emitira ambos valores 
 * porque tienen tipos distintos.
 * Si se esta trabajando con objetos, se necesita especificar mediante una funcion como parametro por que propiedad del objeto se debe hacer la comparacion
*/


const observer: Observer<any> = {
    next: value => console.log("next ", value),
    error: error => console.warn("error ", error),
    complete: () => console.log("Complete "),
}

const button = document.createElement('button')
button.innerHTML = 'Stop timer'
document.querySelector('body').append(button)

const numbers$ = of<number|string>(1,1,1,'1',5,2,2,2,3,3,3,4,4,3,2,1)


numbers$.pipe(
    distinct() // ===
    )
.subscribe(observer)

interface Character {
    name: string
}

const characters: Character[] = [
    {
        name: 'Megaman'
    },
    {
        name: 'X'
    },
    {
        name: 'Zero'
    },
    {
        name: 'X'
    },
    {
        name: 'Megaman'
    },
    {
        name: 'Zero'
    },
    {
        name: 'Dr. Willy'
    },
]

from(characters).pipe(
    distinct(character => character.name)
).subscribe(observer)