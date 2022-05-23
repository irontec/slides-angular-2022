import { fromEvent, pipe, interval , scan, map, concatMap } from 'rxjs';

const source$ = fromEvent(window, 'click').pipe(
    scan((acc)=>acc+1,0), // sumando (y emitiendo) el número de clicks
  );

  source$.pipe( // Cada emisión de click
     concatMap(clickNumber => {
          // Se transforma en un interval cada "n" segundos (y subiendo)
          console.log(`click ${clickNumber}`)
          return interval(clickNumber * 1000)
      }),
      map((v)=>'OK' + v)
  ).subscribe(v => console.log(v)); // OK
