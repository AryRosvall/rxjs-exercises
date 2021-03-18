
import { from, Observer, of } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

/** distinctUntilChanged
 * Retorna los valores distintos no consecutivos, es decir, dados los siguientes numeros [1,2,2,1,3,2] la salida sera [1,2,1,3,2]
 * Este operador evalua los valores con triple igualdad es decir si se compara un 1 con un '1' emitira ambos valores
 * porque tienen tipos distintos.
 * Si se esta trabajando con objetos, se necesita especificar mediante una funcion como parametro que recibe el objeto anterior
 * y el actual para compararlos por medio de la propiedad deseada
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
    distinctUntilChanged() // ===
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
        name: 'Megaman'
    },
    {
        name: 'X'
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
    distinctUntilChanged((prev, curr)=> prev.name === curr.name)
).subscribe(observer)