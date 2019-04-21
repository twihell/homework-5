/*Згенерувати масив чисел, написати функцію, яка залишає унікальні елементи масиву.
 (використати метод push)*/

const array = [];

function fillArray(from, to) {
    for (let i = 0; i < 100; i++) {
        const randomNumber = (Math.random() * (to - from) + from).toFixed();
        array.push(Number(randomNumber));
    }
    return array;
}

console.log(fillArray(0, 100));

const newArray = [];

const uniqueElements = function () {
    for (i = 0; i < array.length; i++) {
        if (newArray.indexOf(array[i]) === -1) {
            newArray.push(array[i]);
        }
    }
    return newArray;
};

console.log(uniqueElements());

