import {from, pipe, scan} from 'rxjs';

const numeros = [1,2,3,4,5];

const totalAcumulador = (acc, cur) => acc + cur;

from( numeros ).pipe(
    scan( totalAcumulador, 0 )
)
.subscribe( console.log );
