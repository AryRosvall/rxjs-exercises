
import { from, Observer, of } from "rxjs";
import { distinctUntilKeyChanged } from "rxjs/operators";

/** distinctUntilKeyChanged
 * Solo funciona con objetos. 
 * Evalua que el valor de la propiedad del objeto que se pase por parametro no se repita anteriormente de forma consecutiva.
 * Este operador evalua los valores con triple igualdad es decir si se compara un 1 con un '1' emitira ambos valores
 * porque tienen tipos distintos.
*/


const observer: Observer<any> = {
    next: value => console.log("next ", value),
    error: error => console.warn("error ", error),
    complete: () => console.log("Complete "),
}

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
    distinctUntilKeyChanged('name')
).subscribe(observer)