let p1 = new Promise(() => {})
console.log(p1);

let p2 = new Promise( (resolve, reject) => {
    resolve(null)
})
console.log(p2);

let a;
let p3 = new Promise( resolve => {
    setTimeout(() => {
        a = 12
        resolve(null)
    }, 5000);
})

console.log(p3);
console.log(a);