// T0
const number = new Promise((resolve) => {
    setTimeout(()=>resolve(1), 1000);
  });

  number.then(value=>console.log("uno", value)); // uno 1 - T0 + 1000ms

  setTimeout(() => {
    // se genera el callback en T0+500ms
  number.then(value=>console.log("dos", value)) // dos 1 - T0 + 1000ms
  }, 500);
