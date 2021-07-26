// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму.

export function sum(...nums: Array<any>): number {

    return nums.reduce((acc, el) => acc + el)
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
    if (a + b < c || a + c < b || c + b < a) {
        return '00'
    } else if (a === b && b === c && a === c) {
        return '10'
    } else if (b === c || a === b || a === c) {
        return '01'
    } else {
        return '11'
    }
}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

/*var total = [0, 1, 2, 3].reduce(function(a, b) {
    return a + b;
});*/

export function getSum(number: number): number {

    return number.toString()
        .split('')
        .reduce((acc, el) => acc + Number(el), 0)

}


// 4. Функция принимает isEvenIndexSumGreater параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    let sumOddNum = 0
    let sumEvenNum = 0
    arr.forEach((num: number, i: number) => i % 2 === 0 ? sumEvenNum += arr[i] : sumOddNum += arr[i])

    return sumOddNum < sumEvenNum
}


// 5. Функция isSquareGreater принимает два параметра: площадь круга и
// площадь квадрата. Функция должна возвращать true если круг не будет выступать за пределы
// квадрата и false в противном случае. Центры фигур совпадают.

export function isSquareGreater(areaCr: number, areaSq: number): boolean {
    let d = 2 * Math.sqrt(areaCr / Math.PI)
    let s = Math.sqrt(areaSq)
    return (d < s)
}


// 6. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено

export function getBanknoteList(amountOfMoney: number): Array<number> {
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1];
    const result = [];
    if (amountOfMoney > 0) {
        for (let i = 0; i < banknotes.length; i++) {
            let note = banknotes[i];
            while (amountOfMoney - note >= 0) {
                amountOfMoney -= note;
                result.push(note);
            }
        }
    } else {
        console.log('Err')
    }
    return result;
}