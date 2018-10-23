
let word = 'Lets start JavaScript';
let anotherWord = ' it\'s may be intresting'; //экранування службового символу,также можно использовать ""или `,перед символом.
let w=word+anotherWord;
console.log(w);
console.log(typeof w);


let coffe = { 
    name:'Americano',
 // ключ:значение,
    price: 15,
    curency: 'UAH',
    milk:'true',
}

console.log(typeof coffe);

// let answer = prompt ('Enter your name');
// console.log (answer);

// let answer2 = confirm('Are you happy?');
// console.log (answer2);

// let a = 3.1;
// let b = 0.2;
// let c = (a*b).toFixed(2);
// console.log(c);

let a = 3.1;
let b = 0.2;
let c = +(a*b).toFixed(2); //унарный + превращает переменную с в число.
console.log(c); // console.log(+c); вместо унарного +, можно использовать Number.
// let c = Number((a*b).toFixed(2));
// console.log(Number(c));
a++
console.log(a); 

a+=3
console.log(a);
 let font = '2.532rem';
 console.log(parseInt(font));
 console.log(parseFloat(font));

  let name=prompt('Enter your name');
  let lastName=prompt('Enter your last name')
  let age = prompt('enter your age');

//   console.log('User\'s full name is ' +name+' '+lastName + '.' );
//   console.log('User\'s age is '+age+' years old.');

  console.log(`User's full name is ${name} ${lastName}. He is ${age} years old.`); //шаблонная строка позаоляет объединять текст и значения  переменных, заключается в ``.

