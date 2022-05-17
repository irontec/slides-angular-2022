import {from, pipe, every} from 'rxjs';

const obs$ = from<number[]>([5,10,15,18, 20]);

 obs$.pipe(
   every(x=> x%5 === 0)
).subscribe(v => console.log(v)); // >> false

 obs$.pipe(
    every(v => v > 2)
).subscribe(v => console.log(v)); // >> true

