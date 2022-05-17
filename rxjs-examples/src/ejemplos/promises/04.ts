import { Observable } from "rxjs";

let numberPromise = new Promise((resolve) => {
    setTimeout(function() {
        console.log("hola!")
        resolve(5);
    },1000);
 });
 numberPromise = null; // >> hola

 const myObs = new Observable((observer) => {
    let i = 0;
    const token = setInterval(() => {
      observer.next(i++);
    }, 1000);
    return () => clearInterval(token); // <-- callback return callback for unsubscription
  });
  const subscription = myObs.subscribe(num => console.log(num));
  subscription.unsubscribe(); // 🦗 🦗 🦗 (cri, cri, cri)
