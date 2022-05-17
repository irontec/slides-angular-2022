const futureNumber = new Promise((resolve) => {
    setTimeout(() => {
        resolve(5);
    });
});
futureNumber.then(value => console.log(value)); // 5
