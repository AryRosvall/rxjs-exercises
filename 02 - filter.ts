
import { from, fromEvent, Observer, range } from "rxjs";
import { filter, map, pluck } from "rxjs/operators";

/** Filter
 * El filter filtra los valores del observable dependiendo de la funcion dada
 */

const observer: Observer<any> = {
    next: value => console.log("next ", value),
    error: error => console.warn("error ", error),
    complete: () => console.log("Complete "),
}


/* Filtra los numeros pares permitiendo que se muestren solo los impares */
range(1,10)
.pipe(
    filter(value => value % 2 === 1)
)
.subscribe(observer)

/* Se aniade el index a la funcion */
range(20,10)
.pipe(
    filter((value, index) => {
        console.log('index', index)
        return value % 2 === 1
    })
)
.subscribe(observer)

/**
 * Se crea una interfaz para definir el tipo de la variable characters
*/

interface Character {
    type: string;
    name: string;
}

const characters: Character[] = [
    {
        type: 'heroe',
        name: 'Batman'
    },
    {
        type: 'heroe',
        name: 'Robin'
    },
    {
        type: 'villain',
        name: 'Joker'
    },
]

/* De los characters solo queremos extraer los heroes por lo que se usa el filter y para no mostrar un objeto sino solamente el nombre del heroe se usa pluck */

from(characters)
.pipe(
    filter(character => character.type === 'heroe'),
    pluck('name')
)
.subscribe(console.log)

/* En este ejercicio se extrae con map el code de cada evento y se filtra dejando pasar solo la tecla Enter  */

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map(event => event.code),
    filter(key => key === 'Enter')
)

keyup$.subscribe(console.log)