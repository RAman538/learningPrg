(function() { 
    "use strict";

/*let person = {
    name: "Vasa",
    age: 28,
    isMarried: false,
};

console.log(person['name']);

let arr = ['red.gpg', 'orang.png', 'blue.bmb'];
console.log(arr[1]);

// let answer = confirm('Are you here?');
// console.log(answer); 

//let answer = +prompt('How old are you?', ''); //унарный + преобразует значение в число
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

    let num = 20;
function showMessage(text) {
     alert(text);
     let num = 10;
     console.log(num);
}

showMessage("hello!");
console.log(num);

function testCase(a) {
    let x;
    switch(a) {
        case 0:
            x = "null";
            break;
            case 1:
                x = "one";
                break;
                case 2:
                    x = "two";
                    break;
    }
    return x;
}
console.log(testCase(2));

function testFactorial(a) {
    let x = 1;
    for(let i = 1; i <= a; i++) {
        x = x * i;
    }
    return x;
}
console.log(testFactorial(5));

function testWhile(a) {
    var x = 2;
    var y = 0;
    while(x <= a) {
        if(x %2 == 0) {
       // console.log(x);
       y += x;
        }
        x++;
        //return x;
    }
    return y;
   }
console.log(testWhile(6));

function learnJs(lang, callback) {
    console.log("I am learning " + lang);
    callback();
}

function done() {
    console.log("I have already completed 3 lessons!");
}

learnJs("JavaScript", done);

let options = {
    width: 1024,
    height: 2028,
    color: "red",
    name: "test",
};

console.log(options.name);
options.bool = false;
delete options.color;
console.log(options);
options.colors = {
     borger: "red",
     background: "white",

};
console.log(options);

for(let key in options) {
    console.log('свойство ' + key + ' имеет значение ' + options[key]);
}

console.log(Object.keys(options).length);


let arr2 = ['a', 'b', 'c', 'd', 'f',];
console.log(arr2);

arr2.pop();
arr2.push(5);
arr2.shift();
arr2.unshift('1');
//console.log(arr2);
/*for(let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}*/
/*arr2.forEach(function(item, i, mass) {
    console.log(i + ': ' + item + '(массив ' + mass + ')');
});

let arr3 = [1, 3, 9, 7,];
for(let key in arr3) {    //получим ключи массива (а не значения)
    console.log(key);
}

let arr4 = [8, 2, 4, 7, 9,];
for(let key of arr4) {    //получаем значения в массиве
    console.log(key);
}*/

/*let answ = prompt("", ""),
    arr5 = [];

    arr5 = answ.split(','); //введенные пользователем данные строим массив с заданным разделителем
    console.log(arr5);*/

    /*let arr6 = ['vvvv', 'lllll', 'ggggg', 'fffff',],
        i = arr6.join(' \n '); // из массива в строку с заданным разделителем

    console.log(i);*/

   /* let arr7 = ['vvvv', 'lllll', 'ggggg', 'fffff',],
        i = arr7.sort(); // выстраиваем по алфавиту

    console.log(i);*/

   /* let arr8 = [1, 15, 25, 8, 11,],
        i = arr8.sort(compareNum);

    function compareNum(a, b) {
          return a-b;
    }
    console.log(arr8);*/


    //ООП
    /*let soldier = {
        health: 500,
        armor: 1000,
    };
    let vasa = {
        health: 300,
    };
    vasa.__proto__ = soldier;

    console.log(vasa);
    console.log(vasa.armor);*/



    /*function testCycle(k, n) {
        let x = "";
       for(let i = 0; i < k; i++) {
            x += String(n) + " ";

       }
       return x;
    }
    console.log(testCycle(5, 88));*/


    /*function testCycle(n) {
        let x = 1;
        for(let i = 2; i <= n; i++) {
            x = x + i;
        }
        return x;
    }
    console.log(testCycle(7));*/


    /*function testCycle(a, b) {
        let x = "";
        for(; a <= b; a++) {
            x += a + " ";
        }
        return x;
    }
    console.log(testCycle(8, 55));*/


   /* function testCycle(a, b) {
        let x;
        
    }*/


   /* let ans = prompt("", ""),
        arr;

    arr = ans.split(',');
    console.log(arr);*/

    /*let arr = ["333", "1111", "8888", "99"],
        i = arr.sort(comperNum);

        function comperNum(a, b) {
            return a-b;
        }

        console.log(arr);*/


        /*let head = {
            glasses: 1
          };
          
          let table = {
            pen: 3
          };
          
          let bed = {
            sheet: 1,
            pillow: 2
          };
          
          let pockets = {
            money: 2000
          };

          table.__proto__= head;
          bed.__proto__=table;
          pockets.__proto__=bed;

          //console.log(pockets.glasses); // 1
          //console.log(bed.pen); // 3
          console.log(head.glasses);*/

          /*let hamster = {
            stomach: [],
          
            eat(food) {
              this.stomach.push(food);
            }
          };
          
          let speedy = {
            __proto__: hamster
          };
          
          let lazy = {
            __proto__: hamster
          };
          
          // Этот хомяк нашёл еду
          speedy.eat("apple");
          console.log(speedy.stomach ); // apple
          
          // У этого хомяка тоже есть еда. Почему? Исправьте
          console.log( lazy.stomach ); // apple*/


         /* function Calc() {
            propities: [];
              this.read = function() {
                let ans = prompt("", ""),
                arr;
                arr = ans.split(',');
                this.propities = arr;
              };

             this.sum = function() {
                 let s = 0;
                 for(let key of this.propities) {
                //for(let i = 0; i<this.propities.length; i++) {
                    s += Number(key);
                //}
            }
            return s;
             };

             this.mul = function() {
                 let m = 1;
                 for(let key of this.propities) {
                     m *= Number(key);
                 }
            return m;
             };
          }
          let calc = new Calc();
          calc.read();
          console.log(calc);
          console.log("Sum=" + calc.sum());
          console.log("Mul=" + calc.mul());*/


         /* function Calculator() {

            this.read = function() {
              this.a = +prompt('a?', 0);
              this.b = +prompt('b?', 0);
            };
          
            this.sum = function() {
              return this.a + this.b;
            };
          
            this.mul = function() {
              return this.a * this.b;
            };
          }
          
          let calculator = new Calculator();
          calculator.read();
          
          console.log( "Sum=" + calculator.sum() );
          console.log( "Mul=" + calculator.mul() );*/


          function Accumulator(startingValue) {
              this.startingValue = startingValue;
              this.read = function() {
                let ac = +prompt('Сколько вы хотите добавить?', 0);
                this.startingValue += ac;
              };
            }

            let accumulator = new Accumulator(5);
            accumulator.read();
            accumulator.read();
            accumulator.read();
            console.log(accumulator.startingValue);


    }());
    