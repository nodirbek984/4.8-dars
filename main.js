//50
// let yosh = prompt("Yoshingiz nechida")
// let otaona = prompt("Ota onangiz bilanmisiz")
// if (yosh > 15 && otaona == "ha"){
//   alert("True")
// }else{
//   alert("False")
// }

//51
// let a = "";
// let arr = a.split("");
// for (let i = 0; i < 5; i++) {
//   a = prompt("son kiriting");
//   console.log(+a + 1);
// }

//52
// let ism = prompt("Ismingiz nima");
// let familya = prompt("familiyangiz nima");
// console.log(`${ism} ${familya}`);

//53
//hali bizga bu mavzu otilmagan

//54
// let userInput = prompt("Iltimos, istalgan so'zni kiriting:");

// let length = userInput.length;
// if (+length % 2 == 0) {
//   alert("true");
// } else {
//   alert("false");
// }

//55
// let son1 = +prompt("Son1");
// let son2 = +prompt("Son2");
// function sum(x, y) {
//   let res = x ** y;
//   return res;
// }
// alert(sum(son1, son2));

//56
// let arr = "";
// let b = arr.split();
// for (let i = 0; i < 4; i++) {
//   b = prompt("nimadur kiriting");
// }
// alert(b[b.length - 1]);

//57
// let a = prompt("Qaysi yil");
// if (a / 4) {
//   alert("true");
// } else if (a / 100) {
//   if (a / 400) {
//     alert("true");
//   }
// } else {
//   alert("false");
// }

//58
// let soz = prompt("biron soz kiriting");
// let arr = soz.split("");
// arr.shift(arr[0]);
// soz = arr.join("")
// alert(soz);

//59
// if (true) {
//   alert("False");
// } else {
//   alert("true");
// }

//60
// let son = +prompt("son kiriitng");
// if (son % 2 == 0) {
//   alert("juft");
// } else {
//   alert("toq");
// }

//61
// let son = +prompt("Son kiriting");
// function sum(x) {
//   return x ** 2;
// }
// alert(sum(son))

//62
// let arr = [1,2,3,5,6]
// alert(arr.join(""))

//63
// let arr1 = [
//   prompt("nimadur kiriting"),
//   prompt("nimadur kiriting"),
//   prompt("nimadur kiriting"),
// ];
// let arr2 = [
//   prompt("nimadur kiriting"),
//   prompt("nimadur kiriting"),
//   prompt("nimadur kiriting"),
// ];

// function sum(x, y) {
//   return `${x},${y}`;
// }
// alert(sum(arr1, arr2));

//64
// let arr = ["a", "b", "c", "d"];
// let xona = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == "a") {
//     xona = xona + 1;
//   }
// }
// alert(xona);

//65
// function getArrayElement(arr, index) {
//   return arr[index];
// }

// let arr = [1, 2, 3, 4, 5];
// alert(getArrayElement(arr, 2));

//66
// let arr = [1, 2, 3, 4, 5];
// let yig = 0;
// function sum(x) {
//   for (let i = 0; i < arr.length; i++) {
//     yig = yig + x[i];
//   }
//   return yig;
// }
// alert(sum(arr));

//67
// let arr = ["bir", "ikki", "uch", "to'rt", "olti"];
// let soz = prompt("Sonni soz korinishida kiriitng");
// if (soz == arr[0]) {
//   let bir = (arr[0] = "1");
// } else if (soz == arr[1]) {
//   let ikki = (arr[1] = 2);
// } else if (soz == arr[2]) {
//   let uch = (arr[2] = 3);
// } else if (soz == arr[3]) {
//   let tort = (arr[3] = 4);
// } else if (soz == arr[4]) {
//   let besh = (arr[4] = 5);
// } else if (soz == arr[5]) {
//   let olti = (arr[5] = 6);
// }
// alert(soz);

//68
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let son = prompt("Son kiriting");
// function sum(x, y) {
//   for (let i = 0; i < 7; i++) {
//     if (x[i] == y) {
//       return "true";
//     } else {
//       return "false";
//     }
//   }
// }
// alert(sum(arr, son));

//69
// let arr = [1, 2, "a", 4, "f"];
// function sum(x) {
//   return arr.join(", ");
// }
// alert(sum(arr));

//70
// let a = +prompt("Kubigingiz nechi qator");
// function sum(x) {
//   let res = x ** 2 * 6;
//   return res;
// }
// alert(sum(a));

//71
// let a = +prompt("odamlar sonini kiriting");
// function sum(x) {
//   let res = x / 5;
//   return `${res} ta avtomabil ketadi`;
// }
// alert(sum(a));

//72
// let str = prompt("Nimadur kiriting");
// function sum(x) {
//   if (x == " ") {
//     return "true";
//   } else {
//     return "false";
//   }
// }
// alert(sum(str))

//73
// let height = +prompt("Balandligini kiriting");
// let weight = +prompt("enini kiriting");
// let uzunligini = +prompt("uzunligini kiriting");
// function sum(x, y, z) {
//   return x * y * z;
// }
// alert(sum(height,weight,uzunligini))

//74
// let a = [1, 2, 3];
// let b = [34, 12, 5];
// let arr = "";
// function filterArray(number1, number2, array) {
//   let result = [];

//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];

//     if (number1 < element && element < number2) {
//       result.push(element);
//     }
//   }

//   return result;
// }
// alert(filterArray(a, b, arr));

//75
// let x = [+2, +4, "salom", +3];
// if (x[0] == "") {
//   x[0] = "number";
// } else {
//   x[0] = "string";
// }

// if (x[1] == "") {
//   x[1] = "number";
// } else {
//   x[1] = "string";
// }

// if (x[2] == "") {
//   x[2] = "number";
// } else {
//   x[2] = "string";
// }

// if (x[3] == "") {
//   x[3] = "number";
// } else {
//   x[3] = "string";
// }

// if (x[4] == "") {
//   x[4] = "number";
// } else {
//   x[4] = "string";
// }

// alert(x)

//76
// function repeatString(inputString, times) {
//     if (times < 0)
//       return 'Soni manfiy bo\'lishi mumkin emas';
//     let result = '';
//     for (let i = 0; i < times; i++) {
//       result += inputString;
//     }
//     return result;
//   }

//   let inputString = 'hello';
//   let times = 3;
//   let repeatedString = repeatString(inputString, times);
//   console.log(repeatedString);

//77
// let soz = prompt("Sizga sozingiz koplik yoke birlikligini aniqlab beraman");
// let arr = soz.split("");
// function sum(x) {
//   if (
//     x[arr.length - 1] == "r" &&
//     x[arr.length - 2] == "a" &&
//     x[arr.length - 3] == "l"
//   ) {
//     return "true";
//   } else {
//     return "false";
//   }
// }

// alert(sum(soz));

//78
// let soz = "nodirbek";
// let arr = soz.split("");
// function sum(x) {
//   let bosh = soz[0];
//   let oxir = soz[arr.length - 1];
//   return `${bosh} ${oxir}`;
// }
// alert(sum(soz));

//79
// let soz = prompt("soz kiriting");
// let arr = soz.split("");
// function sum(x) {
//   let qayta = `${x[0]}${x[1]}`;
//   let jami = arr.join("");
//   return `${qayta} . . . ${qayta} . . . ${jami}`;
// }
// alert(sum(soz));

//80
// let soz = prompt("Soz kiriting");
// function sum(x) {
//   return `I am feeling ${x}`;
// }
// alert(sum(soz));

//81
//Uzur bu misolni ishlay olmadim

//82
// function getAsciiCode(character) {
//     return character.charCodeAt(0);
//   }

//   let character = 'A';
//   let asciiCode = getAsciiCode(character);
//   console.log(asciiCode);

//83
// function checkEquality(word1, word2) {
//     return word1.toLowerCase() === word2.toLowerCase();
//   }

//   let result1 = checkEquality("Hello", "hello");
//   let result2 = checkEquality("Hi", "bye");
//   console.log(result1); // true
//   console.log(result2); // false

//84
// let soz = "Nodir";
// let arr = soz.split("");
// let jam = 0;
// function sum(x) {
//   for (let i = 0; i < 100; i++) {
//     x[i] = 1;
//     jam = jam + 1;
//     return jam;
//   }
// }

// alert(sum(soz))

//85
// let jami = +prompt("Kasalanganlar soni qancha ");
// let yangi = +prompt("YAngi kasalanganlar soni");
// let hozirda = +prompt("Hozirda kasalanganlar");
// function sum(x, y, z) {
//   return x - z - y;
// }

// alert(sum(jami,yangi,hozirda));

//86
// let a = "";
// let arr = a.split("");
// for (let i = 0; i < 3; i++) {
//   a[i] = prompt("nimadur kiriting");
// }
// function sum(x) {
//   return x.length * 2;
// }
// arr.join("");
// console.log(sum(a));

//87
// function wordLengths(words) {
//   let lengths = [];
//   for (let i = 0; i < words.length; i++) {
//     lengths.push(words[i].length);
//   }
//   return lengths;
// }

// let words = ["apple", "banana", "orange"];
// let lengths = wordLengths(words);
// console.log(lengths); // Konsolga [5, 6, 6] chiqadi

//88
// function calculateDistance(totalPayment) {
//   let baseFare = 4000;
//   let additionalFare = 1000;
//   return (totalPayment - baseFare) / additionalFare + 1;
// }

// let totalPayment = 6000;
// let distance = calculateDistance(totalPayment);
// console.log(distance); // Konsolga 3 chiqadi

//89
// function countLetterD(text) {
//   let count = 0;
//   for (let i = 0; i < text.length; i++) {
//     if (text[i] === 'd' || text[i] === 'D') {
//       count++;
//     }
//   }
//   return count;
// }

// let text = "Hello World. How are you doing today?";
// let dCount = countLetterD(text);
// console.log(dCount); // Konsolga 1 chiqadi

//90
// function addSpaceInMiddle(inputString) {
//   return inputString.split('').join(' ');
// }
// console.log(addSpaceInMiddle("hello")); // "h e l l o"

//91
// function calculateMaxDivide(num1, num2) {
//   return Math.max(num1, num2) / Math.min(num1, num2);
// }
// console.log(calculateMaxDivide(10, 5)); // 2

//92
// let coffeeCount = 3;
// function calculateTotalCoffee(coffeeToAdd) {
//   coffeeCount += coffeeToAdd;
//   return coffeeCount;
// }
// console.log(calculateTotalCoffee(1)); // 4

//93
// function repeatLastCharacter(text, times) {
//   let result = '';
//   for (let i = 0; i < times; i++) {
//     result += text.charAt(text.length-1);
//   }
//   return result;
// }
// console.log(repeatLastCharacter("Hello", 3)); // "ooo"

//94
// function sumOfNumbersAboveFive(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 5) {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }
// console.log(sumOfNumbersAboveFive([3, 7, 8, 2, 4, 6])); // 21

//95
// function getFileName(filePath) {
//   return filePath.split('/').pop();
// }
// console.log(getFileName("/path/to/folder/file.txt")); // "file.txt"

//96
// function distanceToHome(traveledDistances) {
//   let totalDistance = traveledDistances.reduce((a, b) => a + b, 0);
//   let distanceToHome = totalDistance > 0 ? totalDistance : -totalDistance;
//   return distanceToHome;
// }
// console.log(distanceToHome([10, -5, 3])); // 18

//97
// function isTriangle(side1, side2, side3) {
//   if (side1 + side2 > side3 && side2 + side3 > side1 && side3 + side1 > side2) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isTriangle(3, 4, 5)); // true
// console.log(isTriangle(1, 1, 12)); // false

//98
// function isInRange(num1, num2) {
//   let sum = num1 + num2;
//   if (sum > num1 && sum > num2) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isInRange(4, 6)); // true
// console.log(isInRange(2, 1)); // false

//99
// function createHTMLTags(str) {
//   let parts = str.split('*');
//   let tag = parts[0];
//   let count = parseInt(parts[1]);
//   let result = '';
//   for (let i = 0; i < count; i++) {
//     result += '<' + tag + '></' + tag + '>';
//   }
//   return result;
// }
// console.log(createHTMLTags("div*2"));
// console.log(createHTMLTags("p*1"));
// console.log(createHTMLTags("li*3"));

//100
// function sumOfNumbersUpTo(num) {
//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(sumOfNumbersUpTo(5)); // 15

//101
// function checkMinMaxInRange(value, obj) {
//   return (value > obj.min && value < obj.max);
// }
// let range = {min: 3, max: 8};
// console.log(checkMinMaxInRange(5, range)); // true
// console.log(checkMinMaxInRange(2, range)); // false

//102
// function isSquareEndsWithItself(num) {
//   return (Math.pow(num, 2) % 10 === num % 10);
// }
// console.log(isSquareEndsWithItself(5)); // true
// console.log(isSquareEndsWithItself(7)); // false

//103
// function addIndexToElements(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] + i;
//   }
//   return arr;
// }
// console.log(addIndexToElements([3, 6, 8, 2])); // [3, 7, 10, 5]

//104
// function getNonSugarDrinks(drinks) {
//   return drinks.filter(function(drink) {
//     return drink !== "sugar";
//   });
// }
// console.log(getNonSugarDrinks(["water", "sugar", "tea", "coffee"])); // ["water", "tea", "coffee"]

//105
// function countDigits(num) {
//   let count = num.toString().split('').filter(x => !isNaN(parseInt(x, 10))).length;
//   return count;
// }
// console.log(countDigits(12345)); // 5

//106
// let son = +prompt("Son kiriting men nechi xona ekanligini aytib beraman");
// let soz = son.toString();
// let arr = soz.split("");
// let quti = 0;
// function sum(x) {
//   for (let i = 0; i < soz.length; i++) {
//     if (x[i]) {
//       quti = quti + 1;
//     }
//   }
//   return quti;
// }

// alert(sum(arr));

//107
// function rearrangeDigits(num) {
//   let digitArray = Array.from(String(num), Number);
//   digitArray.sort((a, b) => b - a);
//   let rearrangedNum = parseInt(digitArray.join(''));
//   return rearrangedNum;
// }
// console.log(rearrangeDigits(78924));

//108
// function getRandomNumberBetween(num1, num2) {
//   return Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
// }
// console.log(getRandomNumberBetween(5, 10));

//109
// function isNarcissisticNumber(num) {
//   let numString = num.toString();
//   let n = numString.length;
//   let sum = 0;
//   for (let i = 0; i < n; i++) {
//     sum += Math.pow(parseInt(numString[i]), n);
//   }
//   return sum === num;
// }
// console.log(isNarcissisticNumber(153)); // true
// console.log(isNarcissisticNumber(370)); // true
// console.log(isNarcissisticNumber(123)); // false

//110
// function countUpperCaseLetters(text) {
//   let count = text.split('').filter(char => char === char.toUpperCase() && char !== char.toLowerCase()).length;
//   return count;
// }
// console.log(countUpperCaseLetters("Hello World")); // Konsolga 2 chiqadi
