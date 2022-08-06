
const spy = "Spy"
function receivesAFunction(callback) {
    callback (spy);
}

function returnsANamedFunction() {
    function fn() {
        return " "};
        return fn;
    }

function returnsAnAnonymousFunction() {
    return function (){}
}