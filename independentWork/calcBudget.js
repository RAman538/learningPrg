"use strict";

let money, time;

function start() {
    money = +prompt("Ваш месячный бюджет?", "");
    time = prompt("Введите дату в формате: YYYY-MM-DD", ""); 

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш месячный бюджет?", "");
    }
}
start();

let appDate = {
    budget: money,
    timeDate: time,
    expenses: {},
    optionalExpenses: {},
    incom: [],
    savings: true,
};
//console.log(appDate);
//console.log(money);

function shooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let obligatoryExpenses = prompt("Введите обязательную статью расходов в этом месяце", ""),
        obligatoryExpensesSum = +prompt("Во сколько это обойдется?", "");
         if(typeof(obligatoryExpenses) === "string" && typeof(obligatoryExpenses) != null && 
                 obligatoryExpenses != "" && obligatoryExpenses.length < 50 && obligatoryExpensesSum != "" &&
                 typeof(obligatoryExpensesSum) != null ) {
            appDate.expenses[obligatoryExpenses] = obligatoryExpensesSum;
            console.log("done");
         } else {
            i = i -1;
         }
    }
}
shooseExpenses();

/*let i = 0;
while (i < 4) {
    let obligatoryExpenses = prompt("Введите обязательную статью расходов в этом месяце", ""),
    obligatoryExpensesSum = +prompt("Во сколько это обойдется?", "");
     if(typeof(obligatoryExpenses) === "string" && typeof(obligatoryExpenses) != null && 
             obligatoryExpenses != "" && obligatoryExpenses.length < 50 && obligatoryExpensesSum != "" &&
             typeof(obligatoryExpensesSum) != null ) {
        appDate.expenses[obligatoryExpenses] = obligatoryExpensesSum;
        console.log("done");
} else {
    continue ;
}
    i++;
}*/

/*let i = 0;
do {
    let obligatoryExpenses = prompt("Введите обязательную статью расходов в этом месяце", ""),
    obligatoryExpensesSum = +prompt("Во сколько это обойдется?", "");
     if(typeof(obligatoryExpenses) === "string" && typeof(obligatoryExpenses) != null && 
             obligatoryExpenses != "" && obligatoryExpenses.length < 50 && obligatoryExpensesSum != "" &&
             typeof(obligatoryExpensesSum) != null ) {
        appDate.expenses[obligatoryExpenses] = obligatoryExpensesSum;
        console.log("done");
} else {
    continue ;
}
    i++;
} while (i < 4);*/

 function detectDayBudget() {
    appDate.moneyPerDay = (appDate.budget / 30);
    alert("Ваш ежедневный бюджет равен " + (appDate.moneyPerDay).toFixed());
  }  
detectDayBudget();

function detectLevel() {
    if(appDate.moneyPerDay < 1000) {
        console.log("Low income");
    } else if(appDate.moneyPerDay > 1000 && appDate.moneyPerDay < 5000) {
        console.log("You have an average income");
    } else if(appDate.moneyPerDay > 5000) {
        console.log("You have a high level of wealth!");
    } else {
        console.log("Error!");
    }
}
detectLevel();


function checkSaving() {
    if(appDate.savings == true) {
       let save = +prompt("Какая сумма на депозите?"),
        persent = +prompt("Под какой процент годовых?"); 
        
        appDate.monthIncome = save/100/12*persent;
        alert("Ваш ежемесячный доход с депозита составляет: " + (appDate.monthIncome).toFixed(2));
    }
}
checkSaving();

function chooseOptExpenses() {
    let a = prompt("Статья необязательных расходов?"),
        b = prompt("Статья необязательных расходов?"),
        c = prompt("Статья необязательных расходов?");

        if(typeof(a) === "string" && typeof(a) != null && a != "" && a.length < 50 &&
        typeof(b) === "string" && typeof(b) != null && b != "" && b.length < 50 &&
        typeof(c) === "string" && typeof(c) != null && c != "" && c.length < 50) {
            appDate.optionalExpenses[1] = a;
            appDate.optionalExpenses[2] = b;
            appDate.optionalExpenses[3] = c;
     } else {
         alert("Введите корректные даннные!");
     }
}
chooseOptExpenses();
/*function s( expenses ) {
    let rez = 0;
    for( key in expenses ) {
        rez += expenses[key];
    }
return rez;
}*/

//let monthlyBudget2 = (money - appDate.monthlyBudget) / 30;

//alert( "Ваш бюджет на один день составит: " + monthlyBudget2);

console.log(appDate);

