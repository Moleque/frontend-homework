'use strict'

const maxLen = numbers => Math.max(...(numbers.map(el => String(el).length)));  //кол-во символов в самом длинном элементе

const format = function (numbers, columnsCount = 1) {
    if (numbers.length < columnsCount || columnsCount < 1) {    //проверка корректного кол-ва колонок
        return null;
    }
    const columnSizes = [];
    for (let i = 0; i < columnsCount; i++) {    //определяем необходимую длинну для каждого столбца
        columnSizes[i] = maxLen(numbers.filter(function(item, index) {
            return (index % columnsCount) === i;
        }));
    }
    let result = "";
    numbers.forEach(function(item, i) { //собираем итоговую строку
        result += " ".repeat(columnSizes[i % columnsCount] - String(item).length) + item;
        if (i != numbers.length - 1) {
            result += ((i + 1) % columnsCount === 0 || columnsCount === 1) ? "\n" : " ";
        }
    });
    return result;
}