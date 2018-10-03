function solutionQuardEq(a, b, c) {
    if (a === 0) {
        document.write("this is not a square equation for a = 0");
    }
    const d = Math.pow(b, 2) - 4 * a * c;
    if (d > 0) {
        const x1 = (-b + Math.sqrt(d)) / (2 * a);
        const x2 = (-b - Math.sqrt(d)) / (2 * a);
        return 'X1 = ' + x1 + 'X2 = ' + x2;
    }
    else if (d === 0) {
        const x = -b / (2 * a);
        return 'X1 = X2 = ' + x1;
    }
    return ('there is no solution for d < 0');
}

const a = parseInt(prompt('Enter value of A but not 0'));
const b = parseInt(prompt('Enter B'));
const c = parseInt(prompt('Enter C'));

alert(solutionQuardEq(a, b, c));

// const numb = parseFloat(prompt('Enter the number of Fibonacci'));

// alert("Fibonacci number: " + fib(numb));

// function fib(numb){
//     if(numb <= 1) { 
//       return numb;
//     }
//     return fib(numb - 1) + fib(numb - 2);
// }