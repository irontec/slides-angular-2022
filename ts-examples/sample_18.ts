let x: Date = new Date();
let y: string = 'fecha de hoy';

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

logValue(x); // "Wed, 04 May 2022 10:59:00 GMT"
logValue(y); // [LOG]: "FECHA DE HOY"
