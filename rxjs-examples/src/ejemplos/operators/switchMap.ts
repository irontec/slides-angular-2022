import { fromEvent, pipe, interval , scan, switchMap, map } from 'rxjs';

const source$ = fromEvent(window, 'click').pipe(
    scan((acc)=>acc+1,0), // sumando (y emitiendo) el número de clicks
  );

  source$.pipe( // Cada emisión de click
     switchMap(clickNumber => {
          // Se transforma en un interval cada "n" segundos (y subiendo)
          console.log(`click ${clickNumber}`)
          return interval(clickNumber * 1000)
      }),
      map(()=>'OK')
  ).subscribe(v => console.log(v)); // OK
