/* ###### Typescript - Functions

## Overload (II) */


let currentVolumen = 50;
const levels = { 'high': 100, 'medium': 50, 'low': 10};

function changeVolumen(x:number): number;
function changeVolumen(x:string): number;
function changeVolumen(x:any): any { // <- NOT CHECKED!

    if (typeof x === "string") {
        return currentVolumen-levels[x];
    }

    else if (typeof x == "number") {
        return currentVolumen-x;
    }
}

console.log(changeVolumen(25)); // >> 25

console.log(changeVolumen('high')); // >> 100

console.log(changeVolumen({x:99})); // >> COMPILATION ERROR!!
