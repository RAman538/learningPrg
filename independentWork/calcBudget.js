"use strict";


let money = +prompt("Ваш месячный бюджет?", "");

let time = prompt("Введите дату в формате: YYYY-MM-DD", "");

let appDate = {
    money,
    time,
    expenses: {},
    optionalExpenses: {},
    incom: [],
    savings: false,
};
//console.log(appDate);
//console.log(money);

let obligatoryExpenses = prompt("Введите обязательную статью расходов в этом месяце", "");

appDate.expenses.obligatoryExpenses = obligatoryExpenses;

let sum = +prompt("Во сколько это обойдется?", "");

appDate.expenses.sum = sum;

let monthlyBudget = (money - sum) / 30;

alert( "Ваш бюджет на один день составит: " + monthlyBudget);

//console.log(appDate[obligatoryExpenses]);
//console.log(appDate);

