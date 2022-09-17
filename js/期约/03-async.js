
let timeout = async() => {
    setTimeout(() => {
        console.log('五秒后执行');
    }, 5000);
}
async function foo() {
    console.log(1);
    await timeout()
    console.log(2);
}
foo()