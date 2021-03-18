import { interval, Subject } from "rxjs";
import { take, map } from "rxjs/operators";
/**
 * Ejercicio: Realizar que los dos observables finales,
 * emitan exactamente el mismo valor
 *
 * Tip: Hot Observable? subjects?
 */

(() => {
  // == NO TOCAR este bloque ====================
  const reloj$ = interval(1000).pipe(
    take(5),
    map((val) => Math.round(Math.random() * 100))
  );
  // No tocar la creación del observable
  // ============================================

  const subject$ = new Subject();

  reloj$.subscribe(subject$);

  // Estos dos observables deben de emitir exactamente los mismos valores
  const obs1 = subject$.subscribe((val) => console.log("obs1", val));
  const obs2 = subject$.subscribe((val) => console.log("obs2", val));
})();
