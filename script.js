// //n1
// let a = 10;
// alert(a);
// a = 20;
// alert(a);
// //n2
// let firstPhone = 2007;
// alert(firstPhone);
// //n3
// let createJS = 'brandonEich';
// alert(createJS);
// //n4
// let first = 10;
// let second = 2;
// alert(first + second);
// alert(first - second);
// alert(first * second);
// alert(first / second);
// //n5
// let f = 2;
// let s = 5;
// let result = 2 ** 5;
// alert(result);
// //n6
// let nine = 9;
// let two = 2;
// alert(nine % two);
// //n7
// let num = 1;
// num += 5;
// num -= 3;
// num *= 7;
// num /= 3;
// ++num;
// num--;
// alert(num);

// //n8
// let age = prompt('Сколько вам лет?');
// alert(age);
// //n9.0
// let user = {
//     name: 'Vlad',
//     age: 26,
//     isAdmin: false,
// }
// //n9.1
// user['city of residence'] = 'Pyatigorsk';
// //n9.2
// user.age = 27;
// //n9.3
// delete user['city of residence'];
// //n9.4
// let info = prompt('Какую информацию хотите узнать о пользователе?');
// alert(user.info);
// //n10
// let yourName = prompt('Введите Ваше имя');
// alert(`Привет, ${yourName} !`);
//hw2.3
//n1
let password = 'qwerty';
let message = prompt('Введите пароль');
if (message === password) {
    alert('Пароль введен верно')
} else {
    alert('Пароль введен неправильно')

}
//n2
let c = 0;
if (c === 0 && c < 10) {
    console.log(true);

} else {
    console.log(false);
}

//n3
let d = 27;
let e = 99;
if (d > 100 || e > 100) {
    alert(true);

} else {
    alert(false);
}
//n4
let a = '2';
let b = '3';
let z = parseInt(a);
let x = parseInt(b);
alert(z + x);
//n5
const season = prompt();
switch (season) {
    case '1':
        alert('Январь(зима)')
        break
    case '2':
        alert('Февраль(зима)')
        break
    case '3':
        alert('Март(весна)')
        break
    case '4':
        alert('Апрель(весна)')
        break
    case '5':
        alert('Май(весна)')
        break
    case '6':
        alert('Июнь(лето)')
        break
    case '7':
        alert('Июль(лето)')
        break
    case '8':
        alert('Август(лето)')
        break
    case '9':
        alert('Сентябрь(осень)')
        break
    case '10':
        alert('Октябрь(осень)')
        break
    case '11':
        alert('Ноябрь(осень)')
        break
    case '12':
        alert('Декабрь(зима)')
        break
}
//n7
let number = prompt();
if (+number % 2 === 0) {
    alert('четное');
} else {
    alert('нечетное')

}
//n8
let clientOS = 0;
if (clientOS === 0) {
    alert('Установите версию приложения для iOS по ссылке');
} else if (clientOS === 1) {
    alert('Установите версию приложения для Android по ссылке');
}
//n9
let clientDeviceYear = 2014;
if (clientDeviceYear >= 2015 && clientOS === 0) {
    alert('Установите версию приложения для iOS по ссылке');
} else if (clientDeviceYear >= 2015 && clientOS === 1) {
    alert('Установите версию приложения для Android по ссылке');
} else if (clientDeviceYear <= 2015 && clientOS === 0) {
    alert('Установите облегченную версию приложения для iOS по ссылке');

} else if (clientDeviceYear <= 2015 && clientOS === 1) {
    alert('Установите облегченную версию приложения для Android по ссылке');
}







