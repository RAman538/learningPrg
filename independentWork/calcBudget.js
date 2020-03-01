(function() {
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
    shooseExpenses: function() {
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
    },
    detectDayBudget: function() {
        appDate.moneyPerDay = (appDate.budget / 30);
        alert("Ваш ежедневный бюджет равен " + (appDate.moneyPerDay).toFixed(2));
    },
    detectLevel: function() {
        if(appDate.moneyPerDay < 1000) {
            console.log("Low income");
        } else if(appDate.moneyPerDay > 1000 && appDate.moneyPerDay < 5000) {
            console.log("You have an average income");
        } else if(appDate.moneyPerDay > 5000) {
            console.log("You have a high level of wealth!");
        } else {
            console.log("Error!");
        }
    },
    checkSaving: function() {
        if(appDate.savings == true) {
            let save = +prompt("Какая сумма на депозите?"),
             persent = +prompt("Под какой процент годовых?"); 
             
             appDate.monthIncome = save/100/12*persent;
             alert("Ваш ежемесячный доход с депозита составляет: " + (appDate.monthIncome).toFixed(2));
         }
    },
    chooseOptExpenses: function() {
        for(let i = 1; i < 3; i++) {
            let opt = prompt("Введите статью необязательных расходов:", "");
            if(typeof(opt) === "string" && typeof(opt) != null && opt != "" && opt.length < 50){
                appDate.optionalExpenses[i] = opt;
                 } else {
                     i = i - 1;
            }
        }
    },
    chooseIncome: function() {
    for(let i = 1; i < 2; i++) {
        let inc = prompt('Заполните поле дополнительного дохода (введите статьи дохода через ","', "");
        if(typeof(inc) === "string" && typeof(inc) != null && inc != "" && inc.length < 50) {
            appDate.incom = inc.split(", ");
            appDate.incom.push(prompt("Может что то еще?"));
            appDate.incom.sort();
        } else {
            i = i - 1;
        }
      }
        appDate.incom.forEach((item, index ) => {
                  alert(`${index + 1}: доп статья дохода ${item}`);
        });
    },
};
//console.log(appDate);
//console.log(money);
appDate.shooseExpenses();
appDate.detectDayBudget();
appDate.detectLevel();
appDate.checkSaving();
appDate.chooseOptExpenses();
appDate.chooseIncome();

/*function shooseExpenses() {
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
shooseExpenses();*/

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

 /*function detectDayBudget() {
    appDate.moneyPerDay = (appDate.budget / 30);
    alert("Ваш ежедневный бюджет равен " + (appDate.moneyPerDay).toFixed(2));
  }  
detectDayBudget();*/

/*function detectLevel() {
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
detectLevel();*/


/*function checkSaving() {
    if(appDate.savings == true) {
       let save = +prompt("Какая сумма на депозите?"),
        persent = +prompt("Под какой процент годовых?"); 
        
        appDate.monthIncome = save/100/12*persent;
        alert("Ваш ежемесячный доход с депозита составляет: " + (appDate.monthIncome).toFixed(2));
    }
}
checkSaving();*/

/*function chooseOptExpenses() {
    for(let i = 1; i < 3; i++) {
        let opt = prompt("Введите статью необязательных расходов:", "");
        if(typeof(opt) === "string" && typeof(opt) != null && opt != "" && opt.length < 50){
            appDate.optionalExpenses[i] = opt;
             } else {
                 i = i - 1;
        }
    }
}
chooseOptExpenses();*/
/*function s( expenses ) {
    let rez = 0;
    for( key in expenses ) {
        rez += expenses[key];
    }
return rez;
}*/

//let monthlyBudget2 = (money - appDate.monthlyBudget) / 30;

//alert( "Ваш бюджет на один день составит: " + monthlyBudget2);

for(let key in appDate) {
        console.log(`DATA: ${appDate[key]}`);
}
//console.log(appDate);

}());