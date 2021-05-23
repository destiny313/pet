// Создайте массив, содержащий строки, числа, булевые значения. Выведите его в
// консоль. Выведите в консоль, только элементы массива под четным индексам.

const massive = ['string 1', 'string 2', 1, 2, 3, 4, 5, true, true, false];

console.log('Массив:');
for (let index = 0; index < massive.length; index++) {
    console.log('№'+ index + ' : ' + massive[index]);
}

console.log('Массив, чётные элементы:');
for (let index = 0; index < massive.length; index++) {
    if (index % 2  == 0) {
        console.log('№'+ index + ' : ' + massive[index]);
    }
    
}