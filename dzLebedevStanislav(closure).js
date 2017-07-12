// *********************** Занятие №10 (презентация)************
// ДЗ
// Задача №1
// Что выведет следующий код? Почему?


// function getBigName (name){
//     name = name + '';
//     return name.toUpperCase();
// } 

// var userName = 'Ivan';

// getBigName(userName); // 'IVAN'

// В лексическом окружении функции getBigName нет переменной userName,
// но благодаря ссылке scope функция getBigName находит эту переменную
// в лексическом окружении родителя.

// Задача №2
// Какое значение вернет функция test? Почему?

// function test(){
//     var name = 'Vasiliy';
//     return getBigName(userName)
// }

// function getBigName (name){
//     name = name + '';
//     return name.toUpperCase();
// } 

// var userName = 'Ivan';
// test(); // 'IVAN'
// В лексическом окружении функции test нет перемменой userName,
// но благодаря ссылке scope функция test находит эту переменную
// в лексическом окружении родителя.

// Задача №3
// Что выведет функция getFood? Почему?
// var food = 'cucumber';

// (function (){
//     var food = 'bread';
//     getFood();
// })();

// function getFood(){
//     console.log(food);
// }

// // результат - cucumber
// // Самовызывающаяся функция вызывает функцию getFood,
// // которая в своем лексическом окружении не имеет перемменную food
// // и обращается к лексическому окружению родителя, где и находит
// // var food = 'cucumber';


// Задача №4
// Какое значение вернет функция getDollar? Почему?
// var dollar,
//     getDollar;

// (function (){
//     var dollar = 0;
//     getDollar = function (){
//         return dollar;
//     }
// }());

// dollar = 30;
// getDollar(); // 0

// Здесь наблюдаем процес замыкания, соотвецтвенно функция getDollar
// имеет доступ к лексическому окружению родителя - var dollar = 0.

// Задача №5
// var greet = 'Hello';
// (function (){
//     var text = "World";
//     console.log(greet + text);//HelloWorld
// }());
// console.log(greet + text);//Ошибка так как переменная text не определена

// Задача №6
// Создайте функцию которая бы умела делать:
// minus(10)(6)// 4
// minus(5)(6)// -1
// minus(10)()// 10
// minus()(6)// 6
// minus()()// 0

// function minus(num1 = 0){
//     var res;
//     function result(num2 = 0){
//         num1 == 0 ? res = num1 + num2 : res = num1 - num2;
//         return res;
//     }
//     return result;
// };

// console.log(minus(10)(6))
// console.log(minus(5)(6))
// console.log(minus(10)())
// console.log(minus()(6))
// console.log(minus()())

// Задача №7
// Реализовать функцию, которая умножает и умеет запоминать
// возвращаемый результат между вызовами:

// function multiplyMaker(){
//         var res = 1;
//     return function(num){
//         res *= num;
//         return res;
//     }
// };

// const multiply = multiplyMaker(2);
// multiply(2); 4
// multiply(1); 4
// multiply(3); 12
// multiply(10); 120

// Задача № 8
// Реализовать модуль, который работает со строкой и имеет методы:
// - утановить строку
// - получить строку
// - получить длину строки
// - получить строку перевертыш

// const modul = (function(){
//     var res = '';
//     function setString(string){
//         res += string;
//     }
//     function getString(){return res;}

//     function getStringLength(){return res.length}

//     function getStringRevers(){return res = res.split('').reverse().join('');}

//     return {
//         setString,
//         getString,
//         getStringLength,
//         getStringRevers
//     };
// }());

// var str = modul;

// str.setString('abcde');
// str.getString();
// str.getStringLength();







// const calculator = (function (){
//     var result;
//     function setNumber(number){result = number; return this;}

//     function getResult(){console.log(result.toFixed(2));}

//     function pluse(number){result += number; return this;}

//     function minus(number){result -= number; return this;}

//     function multiply(number){result *= number; return this;}

//     function divide (number){result /+ number; return this;}

//     function elevate (){result *= result; return this;}


//     return {
//         setNumber,
//         getResult,
//         pluse,
//         minus,
//         multiply,
//         divide,
//         elevate
//     }


// }());

// var modul = calculator;

// modul.setNumber(12.343556).pluse(7).getResult();