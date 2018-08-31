const NS_PER_SEC = 1e9;

function getRandomNumber(minValue = 0, maxValue = 10000000000000) {
    return Math.floor(Math.random() * maxValue) + minValue;
}

function getArrayOfRandomNumbers(arraySize = 10, maxValue = 10000000000000, minValue = 0) {
    let sortedArray = [];

    if (Math.sign(minValue) !== 1) { minValue = 0; }

    if (Math.sign(arraySize) !== 1) { arraySize = 10 }

    if (minValue >= maxValue) { minValue = 0; maxValue = 10000000000000; }

    if (Math.sign(maxValue) !== 1) { maxValue = 10000000000000; }

    if ((maxValue - minValue) < sortedArray) { arraySize = 10; minValue = 0; maxValue = 10000000000000; }

    while (sortedArray.length < arraySize) {
        const randomNumber = getRandomNumber(minValue, maxValue);
        if (sortedArray.indexOf(randomNumber) === -1) {
            sortedArray.push(randomNumber);
        }
    }
    return sortedArray;
}

function swap(array, a, b) {
    [array[a], array[b]] = [array[b], array[a]];
}

function nanoSecToSec(nanoseconds) {
    let seconds = nanoseconds / 1000000000.0;
    return seconds;
}

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j + 1] < array[j]) {
                swap(array, j, j + 1);
            }
        }
    }
    // return array;
}

function selectionSort(array) {
    let minIndex;
    for (let i = 0; i < array.length - 1; i++) {
        minIndex = i;
        for (let j = i; j < array.length; j++) {
            if (array[minIndex] > array[j]) {
                minIndex = j;
            }
        }
        if (i !== minIndex) {
            swap(array, i, minIndex);
        }
    }
    // return array;
};

function insertionSort(array) {
    let temp;
    for (let i = 1; i < array.length; i++) {
        let j = i;
        temp = array[i];
        while (j > 0 && array[j - 1] > temp) {
            array[j] = array[j - 1];
            j--;
        }
        array[j] = temp;
    }
    // return array;
};


let arrayWith1KRandomNumbers = getArrayOfRandomNumbers(1000, 10000);
console.log('arrayWith1KRandomNumbers\t' + arrayWith1KRandomNumbers);
const timeBubbleSort = process.hrtime();
bubbleSort(arrayWith1KRandomNumbers);
const diffBubbleSort = process.hrtime(timeBubbleSort);
console.log(`\nbubbleSort(arrayWith1KRandomNumbers): took ${diffBubbleSort[0] * NS_PER_SEC + diffBubbleSort[1]} nanoseconds or ${diffBubbleSort[0] + diffBubbleSort[1] / NS_PER_SEC} seconds.\n`);
console.log('\narrayWith1KRandomNumbers sorted by bubbleSort\t' + arrayWith1KRandomNumbers);

arrayWith1KRandomNumbers = getArrayOfRandomNumbers(1000, 10000);
console.log('\narrayWith1KRandomNumbers\t' + arrayWith1KRandomNumbers);
const timeSelectionSort = process.hrtime();
selectionSort(arrayWith1KRandomNumbers);
const diffSelectionSort = process.hrtime(timeSelectionSort);
console.log(`\nselectionSort(arrayWith1KRandomNumbers): took ${diffSelectionSort[0] * NS_PER_SEC + diffSelectionSort[1]} nanoseconds or ${diffSelectionSort[0] + diffSelectionSort[1] / NS_PER_SEC} seconds.\n`);
console.log('\narrayWith1KRandomNumbers sorted by selectionSort\t' + arrayWith1KRandomNumbers);

arrayWith1KRandomNumbers = getArrayOfRandomNumbers(1000, 10000);
console.log('\n\narrayWith1KRandomNumbers\t' + arrayWith1KRandomNumbers);
const timeInsertionSort = process.hrtime();
insertionSort(arrayWith1KRandomNumbers);
const diffInsertionSort = process.hrtime(timeInsertionSort);
console.log(`\ninsertionSort(arrayWith1KRandomNumbers): took ${diffInsertionSort[0] * NS_PER_SEC + diffInsertionSort[1]} nanoseconds or ${diffInsertionSort[0] + diffInsertionSort[1] / NS_PER_SEC} seconds.\n`);
console.log('\narrayWith1KRandomNumbers sorted by insertionSort\t' + arrayWith1KRandomNumbers);
