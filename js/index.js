function solutionQuardEq(a, b, c) {
    const d = Math.pow(b, 2) - 4 * a * c;
    if (a === 0) {
        document.write("this is not a square equation for a = 0");
    }
    if (d > 0) {
        const X1 = (-b + Math.sqrt(d)) / (2 * a);
        const X2 = (-b - Math.sqrt(d)) / (2 * a);
        return 'X1 = ' + X1 + 'X2 = ' + X2;
    } else if (d === 0) {
        X1 = X2 = -b / (2 * a);
        return 'X1 = X2 = ' + X1;
    }
    if (d < 0)
        return ('there is no solution for d < 0');
}

const a = parseInt(prompt('Enter value of A but not 0'));
const b = parseInt(prompt('Enter B'));
const c = parseInt(prompt('Enter C'));

alert(solutionQuardEq(a, b, c));
