/**
 * Ejercicio:
 * El objetivo de es realizar la misma impresión, pero usando observables
 * Nota: NO hay que usar el ciclo "FOR OF", usar un observable y llamar la función capitalizar
 */

import { from, Observer, of } from "rxjs";
import { map } from "rxjs/operators";

/**
 * Salida esperada:
 * Batman
 * Joker
 * Doble Cara
 * Pingüino
 * Hiedra Venenosa
 */
(() => {
  const observer: Observer<any> = {
    next: (value) => console.log("next ", value),
    error: (error) => console.warn("error ", error),
    complete: () => console.log("Complete "),
  };

  const nombres = [
    "batman",
    "joker",
    "doble cara",
    "pingüino",
    "hiedra venenosa",
  ];

  const capitalizar = (nombre: string) =>
    nombre.replace(
      /\w\S*/g,
      (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );

  // Cambiar este FOR OF, por un observable y capitalizar las emisiones
  /*   for (let nombre of nombres) {
    console.log(capitalizar(nombre));
  } */

  const names$ = from(nombres).pipe(map(capitalizar));

  names$.subscribe(observer);
})();
