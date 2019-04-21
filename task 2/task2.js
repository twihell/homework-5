/*Згенерувати масив чисел (100 елементів), на проміжку від -100 до 100 порахувати всі від’ємні та додатні, 
вивести мінімальний та максимальний елемент. (використати методи перебору масивів)*/

const array = [];

function fillArray(from, to) {
    for (let i = 0; i < 100; i++) {
        const randomNumber = (Math.random() * (to - from) + from).toFixed();
        array.push(Number(randomNumber));
    }
    return array;
}

console.log(fillArray(-100, 100));

const negativeNumbers = array.filter(function (item) {
    for (let i = 0; i < 100; i++) {
        return item < 0;
    }
});

console.log(negativeNumbers);

const positiveNumbers = array.filter(function (item) {
    for (let i = 0; i < 100; i++) {
        return item > 0;
    }
});

console.log(positiveNumbers);

/*Для знаходження мiн. там макс. елементу не зрозумiла, як використати якийсь метод перебору,
тому зробила як в третiй домашцi */


const getMinElement = function (negativeNumbers) {
    let minElement = negativeNumbers[0];
    for (let i = 0; i < negativeNumbers.length; i++) {
        if (negativeNumbers[i] < minElement) {
            minElement = negativeNumbers[i];
        }
    }
    return minElement;
};

console.log(getMinElement(negativeNumbers));

const getMaxElement = function (positiveNumbers) {
    let maxElement = positiveNumbers[0];
    for (let i = 0; i < positiveNumbers.length; i++) {
        if (positiveNumbers[i] > maxElement) {
            maxElement = positiveNumbers[i];
        }
    }
    return maxElement;
};

console.log(getMaxElement(positiveNumbers));