let str = 'Hello world it is a good day today';
console.log(str.length);

console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.indexOf('world'));
console.log(str.includes('I'));
console.log(str.indexOf(' to '));
console.log(str.includes('world'));

console.log(str.split(' '));///РАЗБИВАЕТ СТРОКУ НА МАССАИВ,В КАВЫЧКАХ УКАЗЫВАЕТСЯ ЗНАК ПО КОТОРОМУ ПРОИЗВОДИТСЯ РАЗДЕЛЕНИЕ;
let arr = str.split(' ');
let strNew = arr.join('+');///OБЪЕДИНЯЕТ МАССИВ В СТРОКУ, в кавычкач указывается знак который будет между элементами.
console.log (strNew);

console.log(str.slice(6,11));//вырезает символы с 6 по 11, не включая 11.
console.log(str.substr(6,5));//вырезает символы с 6 - 5 шт
console.log(str.substring(0,3));//тоже самое, что и slice.
console.log(str);

console.log(str.replace('Hello','Hi')); //заменяет одно слова на другое;

//  МЕТОДЫ ОБЪЕКТА MATH
console.log(Math.floor(2.99));//округляет до меньшего
console.log(Math.ceil(2.0000000000001));//округляет к ближайшему целому
console.log(Math.round(2.4999999999));// округляет по школьным правилам;

console.log(Math.abs(-10));//число по модулю;
console.log(Math.pow(9,2)); //возводит в степень, 9 число, 2 - степень.
console.log(Math.sqrt(4)); // корень квадратный;
console.log(Math.max(-50,-40));
console.log(Math.min(9/12,3/4));

console.log(Math.floor(Math.random()*500)+500);//Math.random выбирает любое случайное число от 0 до 1.В данном случае будет выбирать случайные числа от 500 до 1000.


                        //MY IF ELSE
                        
// let name = prompt ('Enter your name');
// let myName = 'Kate',
//     doughterName = 'Nastia',
//     husbandName = 'Maksim';

// let message = 'Hello, Kate',
//     message2='Hello doughter',
//     message3='Hello dear',
//     message4='Hello stranger, glad to see you, Let\'s get acquainted';

// if (name===myName) {
//     alert(message);
// } 
// else if (name===doughterName) {alert(message2);}
// else if (name===husbandName) {alert(message3);}
// else {alert(message4)};

                        //IN CLASS

// let password = prompt ('Enter password');
// console.log(password.length>=4); //проверка длина должна быть больше или равна 4.

// let a=5;
// let b='5';
// console.log (a==b);
// console.log (a===b);
//  console.log(Boolean(0));// false

                //Проверяем успевает ли человек посмотреть футбол.

//     let time=prompt('Enter time');
// if (Number(time)) {
//     if (time <=21) {
//         alert ('Turn on TV');
//     }

//         else { alert ('Go to bed');
//     }
// }
//     else {
//         alert ('Enter a number');
//     }
 //(!Number.isNaN(time));

//  let month = prompt ('Enter month').toLowerCase();

//  if (month === 'грудень' || month === 'січень'||month === 'лютий'){
//      alert('Winter');
//  }
     
//      else if (month === 'березень' || month === 'квітень' || month === 'травень') {
//          alert('Spring');
//      }
//      else if (month === 'червень' || month === 'липень' || month === 'серпень') {
//         alert('Summer');
//     }
//     else if (month === 'вересень' || month === 'жовтень' || month === 'листопад') {
//         alert('Fall');
//     }
//     else {
//         alert('Такого місяця не існує,перевірте інформацію')
//     }
                            //SWITCH
    // switch (month) {
    //  case 'грудень':
    //         alert('Winter');
    //     break;
    // case 'січень':
    //         alert('Winter');
    //     break;
    // case 'лютий':
    //     alert('Winter');
    // break;
    //     case'червень':
    //     case'липень':
    //    case 'серпень':
    //     alert('Summer');
    // break;
    // case'березень':
    // case'квітень':
    // case 'травень':
    // alert('Spring');
    // break;   
    // case'вересень':
    // case'жовтень':
    // case 'листопад':
    // alert('Fall');
    // break;
    // default:
    // alert('Mistake');
    // break;
    // }

    // let age = prompt('Enter age');
    // let result = age>15? 'Student ':'pupil';
    // log.console(result);

            //ASSIGMENT 1
// let guest;
// let name;
// name='Mango';
// guest=name;
// console.log(guest);

                 //ASSIGMENT 2
// let name2=prompt('What is your name?');
// alert('Hello '+ name2);

                 //ASSIGMENT 3
// const name3 = 'Mango';
// const date = '14/08/2031';
// const roomType = 'люкс';

// const message = `${name3} прибывает на отдых ${date} в ${roomType}.`;

// console.log(message); 

                //ASSIGMENT 4
const padding = "20px";
const border = "5px";
const contentWidth = "100px";

let totalWidth;
totalWidth=Number.parseInt(padding)+Number.parseInt(border)+Number.parseInt(contentWidth);
console.log(totalWidth+'px');

                //ASSIGMENT 6

// let year=prompt('What year is now?');
// if (Number(year)===2018){
//     alert('You are right!')
// }
// else alert('Hey, it\'s 2018 now ;-)');

                //ASSIGMENT 7

let number = prompt('Enter any integer number');
if (number===null) {
    alert ('Come again');
}
else if (Number.isInteger(Number(number))) {
    alert ('Thanks!');
}
else {
    alert('You have to enter integer number!');
}
