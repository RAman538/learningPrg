"use strict";


let money = +prompt("Ваш месячный бюджет?", "");

let time = prompt("Введите дату в формате: YYYY-MM-DD", "");

let appDate = {
    budget: money,
    timeDate: time,
    expenses: {},
    optionalExpenses: {},
    incom: [],
    savings: false,
};
//console.log(appDate);
//console.log(money);

/*let obligatoryExpenses = prompt("Введите обязательную статью расходов в этом месяце", ""),
    obligatoryExpensesSum = +prompt("Во сколько это обойдется?", ""),
    obligatoryExpenses1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    obligatoryExpensesSum1 = +prompt("Во сколько это обойдется?", "");*/

/*for (let i = 0; i < 4; i++) {
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
}*/

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

let i = 0;
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
} while (i < 4);
    


appDate.moneyPerDay = appDate.budget / 30;

alert("Ваш ежедневный бюджет равен " + appDate.moneyPerDay);

if(appDate.moneyPerDay < 1000) {
    console.log("Low income");
} else if(appDate.moneyPerDay > 1000 && appDate.moneyPerDay < 5000) {
    console.log("You have an average income");
} else {
    console.log("You have a high level of wealth!");
}

/*function s( expenses ) {
    let rez = 0;
    for( key in expenses ) {
        rez += expenses[key];
    }
return rez;
}*/

/*appDate.expenses[obligatoryExpenses] = obligatoryExpensesSum;
appDate.expenses[obligatoryExpenses1] = obligatoryExpensesSum1;*/

//let a =  prompt("Введите обязательную статью расходов в этом месяце", "");
  /* let a;
while (a) {
    a =  prompt("Введите обязательную статью расходов в этом месяце", "");
    let obligatoryExpenses = a,
    obligatoryExpensesSum = +prompt("Во сколько это обойдется?", "");
    appDate.expenses[obligatoryExpenses] = obligatoryExpensesSum;
    a++;
}*/

//let monthlyBudget2 = (money - appDate.monthlyBudget) / 30;

//alert( "Ваш бюджет на один день составит: " + monthlyBudget2);

console.log(appDate);

