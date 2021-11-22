//1
let a = 0;
alert(a === 0 ? 'Верно' : 'Неверно');
//2
let a = 5;
alert(a > 0 ? 'Верно' : 'Неверно');
//3
let a = -1;
alert(a < 0 ? 'Верно' : 'Неверно');
//4
let a = 3;
alert(a >= 0 ? 'Верно' : 'Неверно');
//5
let a = 0;
alert(a <= 0 ? 'Верно' : 'Неверно');
//6
let a = 5;
alert(a !== 0 ? 'Верно' : 'Неверно');
//7
let a = 'test';
alert(a === 'test' ? 'Верно' : 'Неверно');
//8
let a = 1;
alert(a === '1' ? 'Верно' : 'Неверно');
//9
let a = 6;
alert(a > 0 && a < 5 ? 'Верно' : 'Неверно');
//10
let a = 3;
a = (a === 0 || a === 2) ? a += 7 : a /= 10;
alert(a);
//11
let a = 1;
let b = 3;
alert((a <= 1 && b >= 3) ? a + b : a - b);
//12
let b = 5;
alert((a > 2 && a < 11) || (b >= 6 && b < 14) ? 'Верно' : 'Неверно');
//13
const num = prompt('Please enter a number from 1 to 4');
let result;

switch (num) {
  case '1':
    alert(result = 'winter')
    break;
  case '2':
    alert(result = 'spring')
    break;
  case '3':
    alert(result = 'summer')
    break;
  case '4':
    alert(result = 'autumn')
    break;
  default:
    alert('Please try again to enter the number');
}