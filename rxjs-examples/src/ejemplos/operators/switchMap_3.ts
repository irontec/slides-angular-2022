import { fromEvent, Observable, debounceTime, map, pluck, mergeAll, mergeMap, switchMap } from 'rxjs';

import { ajax } from 'rxjs/ajax';

// Referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append( textInput, orderList );

// Streams
const input$ = fromEvent<KeyboardEvent>( textInput, 'keyup' );

const url = 'https://api.github.com/search/users?q='; // + fernando

 input$.pipe(
    pluck('target','value'),
    switchMap( texto => ajax.getJSON(url + texto)),
    pluck('items')
).subscribe( console.log );













