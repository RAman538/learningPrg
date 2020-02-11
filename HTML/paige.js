"use strict";

let person = {
    name: "Vasa",
    age: 28,
    isMarried: false,
};

console.log(person['name']);

let arr = ['red.gpg', 'orang.png', 'blue.bmb'];
console.log(arr[1]);

// let answer = confirm('Are you here?');
// console.log(answer); 

let answer = +prompt('How old are you?', ''); //унарный + преобразует значение в число
// console.log(answer);
console.log(typeof(answer));

console.log(typeof(null));//ошибка языка. null- отдельный тип данных!

let inkr = 10,
    dekr = 10;
console.log(++inkr); //префиксная форма сначала меняет значение и возвращает измененное
console.log(dekr--); //постфиксная форма сначала возвращает старое значение

console.log(5%2); //взятие по модулю

console.log(5 == "5"); //рез true т.к сравнивает значения

console.log(5 === "5"); // рез false т.к сравнивает типы данных

let isChecked = true,
    isClose = false;

    console.log(isChecked && isClose); //если одно из значений false, то результат false

    let isChecken = true,
    isCloses = false;

    console.log(isChecken || isCloses); //если одно из значений true, то результат true

