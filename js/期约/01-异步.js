function double(value) {
    setTimeout(() => {
        setTimeout(() => {
            console.log(value);
        }, value * 2);
    }, 1000);
}
double(1000)
console.log(11);

function dou(value, success, failure) {
    setTimeout(() => {
        if (typeof value == 'number') {
            success(value)
        }else {
            failure()
        }
    }, 1000);
}

let success = function(value){
    console.log(value * 2);
}
let failure = function() {
    console.log('hhh');
}
// dou(3, success, failure)
dou('11', success, failure)