import {fromEvent, scan, auditTime} from 'rxjs';

const obs$ = fromEvent(window, 'click').pipe(
    scan((acc)=>acc+1,0), // BONUS! sumando (y emitiendo) el número de clicks, cómo un reduce
  );

  obs$.pipe(auditTime(1000)).subscribe(val => {
    console.log(`Debounced click: ${val}`);
  });
