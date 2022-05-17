import { fromEvent, map } from 'rxjs';

const clicks$ = fromEvent<PointerEvent>(document, 'click');
const positions$ = clicks$.pipe(map(ev => ev.clientX));

positions$.subscribe(x => console.log(x));
//Proyecta cada click a la posición clientX de dicho click
