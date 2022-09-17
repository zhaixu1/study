var arr = [1,2,3,44]
console.log(i, 'i声明提升');
for (var i = 0; i < arr.length; i++) {
    const el = arr[i];
    console.log(el);
}

console.log(i, '最后i的值');