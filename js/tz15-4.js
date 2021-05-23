const d = [0, 2, 5, -4, 6, 22, -9, -12, ,13, 78];
let a1 = [];
let a2 = [];
for (let index = 0; index < d.length; index++) {
    if (index % 2  == 0) {
        a1.push(d[index]);
    }
    else {
        a2.push(d[index]);
    }
}

console.log('Массив d: ' + d);
console.log('Массив a1: ' + a1);
console.log('Массив a2: ' + a2);
