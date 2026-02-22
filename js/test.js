/* let price = 0;
const subscription = "pro";

if (subscription === "pro") {
  price = 100;
}

console.log(price); // 100

------------------------Subscribe check----------------

function getPrice(subscription) {
  let price = 0;
	
  if (subscription === "pro") {
	price = 100;
  }
	
  return price;
}

console.log(getPrice("free")); // 0	
console.log(getPrice("pro")); // 100	 */

/* ------------------ Age checker----------------------- */

/* function checkAge(age) {
    if (age >= 18) {
    return "You are an adult";
  }
}

console.log(checkAge); */

/* function checkGrade(grade) {
  if (grade >= 70) {
    return "Satisfactory";
  } else {
    return "Unsatisfactory";
  }
}

console.log(checkGrade(40)); // Unsatisfactory
console.log(checkGrade(75)); // Satisfactory */

/* ------------ if else ----------------- */

/* function checkStorage(available, ordered) {
  if (ordered > available) {
    return "Not enough goods in stock!"
  } else {
    return "Order is processed, our manager will contact you"
  }
}

console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(200, 20));
console.log(checkStorage(200, 150));
console.log(checkStorage(150, 180));
 */

/* ----------------------- else if ----------------- */

/* const grade = 90;

if (grade >= 90) {
  console.log("Perfectly");
} else if (grade >= 80) {
  console.log("Good");
} else if (grade >= 70) {
  console.log("Satisfactorily");
} else {
  console.log("Unsatisfactorily");
} */

/* ----------------------------- 2й ПРИКЛАД------------------- */

/*   function checkStorage(available, ordered) {
    if (ordered === 0) {
      return "There are no products in the order!"
    } else if (ordered > available) {
      return "Your order is too large, there are not enough items in stock!"
    } else {
      return "The order is accepted, our manager will contact you"
    }
}

console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(70, 0));
console.log(checkStorage(200, 20));
console.log(checkStorage(200, 250));
console.log(checkStorage(150, 0));
console.log(checkStorage(80, 80)); */

/* ---------------------Тернарний оператор---------------------------

---------if else------------------
let type;
const age = 20;
if (age >= 18) {
  type = 'adult';
} else {
  type = 'child';
}
console.log(type); // 'adult'
 */

/* const age = 20;
const type = age >= 18 ? 'adult' : 'child';
console.log(type); // 'adult' */

/* ----------------------------

const a = 5;
const b = 10;
let biggerNumber;

if (a > b) {
  biggerNumber = a;
} else {
  biggerNumber = b;
}
console.log(biggerNumber); // 10
---------------------------------- */

/* const a = 5;
const b = 10;
const biggerNumber = a > b ? a : b;
console.log(biggerNumber); // 10 */

/* function getBiggerNumber(a, b) {
  return a > b ? a : b;
}
console.log(getBiggerNumber(5, 10)); // 10
console.log(getBiggerNumber(20, 15)); // 20
console.log(getBiggerNumber(7, 7)); // 7 */

/* ------------------------------------------------ */

/* function checkPassword(password) {
  const correctPassword = "jqueryismyjam";
  if (password === correctPassword) {
    return "Access granted";
  } else {
    return "Access denied, wrong password!";
  }
} */

/* function checkPassword(password) {
  const correctPassword = "jqueryismyjam";
  return correctPassword === password ? "Access granted" : "Access denied, wrong password!";
}

console.log(checkPassword("jqueryismyjam"));
console.log(checkPassword("angul4r1sl1f3"));
console.log(checkPassword("r3actsux")); */

/* ---------------switch---------------------- */
/* 
const fruit = 'apple';

switch (fruit) {
  case 'apple':
    console.log('Apple selected');
    break;
  case 'banana':
    console.log('Banana selected');
    break;
  case 'orange':
    console.log('Orange selected');
    break;
  default:
    console.log('The fruit is unknown');
} */

/*     const day = 6;

switch (day) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log('This is a working day');
    break;
  case 6:
  case 7:
    console.log('It is a day off');
    break;
  default:
    console.log('Invalid');
} */

/* function getSubscriptionPrice(type) {
  switch (type) {
    case "starter":
      return 0;

    case "professional":
      return 20;

    case "organization":
      return 50;

    default:
      return "Invalid subscription type!";
  }
} */

/* =================================================
Запам’ятай 6 випадків, які приводяться до false:
1. 0
2. ""
3. Nan
4. null
5. undefined
6. false
================================================= */
/* 
  if(null) {
	console.log("Block if")
} else {
	console.log("Block else")
}

if(0) {
	console.log("Block if")
} else {
	console.log("Block else")
}
 */

/* const screenWidth = 700;
const sm = 320;
const md = 768;
const lg = 1200;

if (screenWidth <= sm) {
  console.log('Mobile screen');
} else if (screenWidth > sm && screenWidth <= md) {
  console.log('Tablet screen');
} else if (screenWidth > md && screenWidth <= lg) {
  console.log('Desktop screen');
} else {
  console.log('Godzilla screen');
}
 */
/* 
function getScreenType(screenWidth) {
  const sm = 320;
  const md = 768;
  const lg = 1200;

  if (screenWidth <= sm) {
    return 'Mobile screen';
  } else if (screenWidth > sm && screenWidth <= md) {
    return 'Tablet screen';
  } else if (screenWidth > md && screenWidth <= lg) {
    return 'Desktop screen';
  } else {
    return 'Godzilla screen';
  }
}

console.log(getScreenType(700)); // "Tablet screen"
console.log(getScreenType(1200)); // "Desktop screen"
console.log(getScreenType(1500)); // "Godzilla screen"
console.log(getScreenType(320)); // "Mobile screen" */
/* 
function isNumberInRange(start, end, number) {
  if (number >= start && number <= end) {
    return 'true';
  } else {
    return 'false';
  }
}

console.log(isNumberInRange(10, 30, 17)); // "true"
console.log(isNumberInRange(10, 30, 5)); // "false"
console.log(isNumberInRange(20, 50, 24)); // "true"
console.log(isNumberInRange(20, 50, 76)); // "false" */

/* --------------------------|АБО|-----------------------------*/

/* function checkAccess(subType) {
  if (subType === "vip" || subType === "pro") {
    return true;
  } else {
    return false;
  }
}

console.log(checkAccess("pro")); // true
console.log(checkAccess("starter")); // false
console.log(checkAccess("vip")); // true
console.log(checkAccess("free")); // false */

/* --------------------------------!!!!!!!!!!!!!!!!!----------------------------- */

/* function canUserChat(isOnline, isBlocked) {
  const canChat = isOnline && !isBlocked;

  if (canChat) {
    return "Can type in chat!";
  } else {
    return "Blocked from typing in chat!";
  }
}

console.log(canUserChat(true, false));  // "Can type in chat!"
console.log(canUserChat(true, true));   // "Blocked from typing in chat!"
console.log(canUserChat(false, false)); // "Blocked from typing in chat!"
console.log(canUserChat(false, true));  // "Blocked from typing in chat!" */

/* function toggleModalVisibility(isVisible) {
  if (!isVisible) {
    return true;
  } else {
    return false;
  }
}

console.log(toggleModalVisibility(true));
console.log(toggleModalVisibility(false)); */

/* ------------------------------------------------------------------------------------- */

/* ------------довжина рядка--------------------------
const message = "JavaScript is awesome";
console.log(message.length); // 21 */

/* ------------------------------- зміна регітру--------------------------------------
const message = "JavaScript is awesome";
console.log(message.toUpperCase()); // "JAVASCRIPT IS AWESOME" */

/* ---------------------slice------------------- */

/* const fullName = "Jacob Mercer";
console.log(fullName.slice(0, 4)); // 'Jaco'
console.log(fullName.slice(3, 9)); // 'ob Mer'
console.log(fullName.slice(0, fullName.length)); // 'Jacob Mercer' */

/* const fullName = "Jacob Mercer";
console.log(fullName.slice(1)); // 'acob Mercer'
console.log(fullName.slice(3)); // 'ob Mercer' */

//------------------------slice---------------------------

/* str.slice(startIndex, endIndex) */

/* const fullName = "Jacob Mercer";
console.log(fullName.slice(0, 4)); // 'Jaco'
console.log(fullName.slice(3, 9)); // 'ob Mer'
console.log(fullName.slice(0, fullName.length)); // 'Jacob Mercer' */

/* const fullName = "Jacob Mercer";
console.log(fullName.slice(1)); // 'acob Mercer'
console.log(fullName.slice(3)); // 'ob Mercer' */

//------------------------------------------
/* const fullName = "Jacob Mercer";
const firstName = fullName.slice(0, 5);
const lastName = fullName.slice(6);

console.log(fullName); // "Jacob Mercer"
console.log(firstName); // "Jacob"
console.log(lastName); // "Mercer" */

/* function getSubstring(string, length) {
  return string.slice(0, length);
}
console.log(getSubstring("Hello world", 3));
console.log(getSubstring("Hello world", 5));
console.log(getSubstring("Hello world", 8));
console.log(getSubstring("Hello world", 11));
console.log(getSubstring("Hello world", 0)); */

/* const message = "Welcome to Bahamas!";
console.log(message.toLowerCase()); // "welcome to bahamas!"
console.log(message); // "Welcome to Bahamas!" */

/* const message = "Welcome to Bahamas!";
console.log(message.toUpperCase()); // "WELCOME TO BAHAMAS!"
console.log(message); // "Welcome to Bahamas!" */

//=============================
//Щоб не вимагати абсолютно точного введення, можна зробити «нормалізацію» введеного користувачем рядка, тобто перетворити всі його символи у верхній або нижній регістр.
//=============================
/* const brandName = 'samsung';
const userInput = 'saMsUng';
const lowercaseInput = userInput.toLowerCase();

console.log(brandName); // 'samsung'
console.log(userInput); // 'saMsUng'
console.log(userInput === brandName); // false
console.log(lowercaseInput); // 'samsung'
console.log(lowercaseInput === brandName); // true */

/* function normalizeInput(input, to) {
  if (to === "upper") {
    return `${input.toUpperCase()}`
  } else {
    return `${input.toLowerCase()}`
  }
} */

/*   function normalizeInput(input, to) {
  return to === "upper" ? input.toUpperCase() : input.toLowerCase();
}

console.log(normalizeInput("This ISN'T SpaM", "lower"));
console.log(normalizeInput("This ISN'T SpaM", "upper"));
console.log(normalizeInput("Big SALE", "lower"));
console.log(normalizeInput("Big SALE", "upper"));
console.log(normalizeInput("Stay Awhile and Listen", "lower"));
console.log(normalizeInput("Stay Awhile and Listen", "upper")); */

/* const username = 'Jacob Mercer';

console.log(username.includes('Jacob')); // true
console.log(username.includes('John')); // false
console.log(username.includes('Mercer')); // true
console.log(username.includes('Doe')); // false */
//=============================================

/* const message = 'Please buy our stuff!';
const hasSpam = message.includes('buy');

if (hasSpam) {
  console.log('Warning: This message contains forbidden words.');
} else {
  console.log('You can safely open this message.');
} */

/* function checkForName(fullName, firstName) {
  const fullNameCheck = fullName.toLowerCase();
  const firstNameCheck = firstName.toLowerCase();
  return fullNameCheck.includes(firstNameCheck);
}

console.log(checkForName('Jason Neis', 'Jason'));
console.log(checkForName('Jason Neis', 'jAsOn'));
console.log(checkForName('Jason Neis', 'Jacob'));
console.log(checkForName('Caty Stars', 'Caty'));
console.log(checkForName('Caty Stars', 'cAtY'));
console.log(checkForName('Caty Stars', 'Andromeda')); */

//=============Методи startsWith() і endsWith()==============

/* const str = "Hello, world!";
console.log(str.startsWith("Hello")); // true
console.log(str.startsWith("hello")); // false (метод чутливий до регістру) */

/* const str = "Hello, world!";
console.log(str.endsWith("world!")); // true
console.log(str.endsWith("World!")); // false (метод чутливий до регістру) */

/* function checkFileExtension(fileName, ext) {
  return fileName.endsWith(ext)
    ? 'File extension matches'
    : 'File extension does not match';
}

console.log(checkFileExtension('styles.css', '.css'));
console.log(checkFileExtension('styles.css', '.js'));
console.log(checkFileExtension('app.js', '.js'));
console.log(checkFileExtension('app.js', '.html'));
console.log(checkFileExtension('index.html', '.html'));
console.log(checkFileExtension('index.html', '.css'));
console.log(checkFileExtension('index.html', '.js')); */

//===========================Метод indexOf()===============================
/* const message = "Welcome to Bahamas!";
const index = message.indexOf("to");
console.log(index); // 8 */

/* function getFileName(file) {
  const index = file.indexOf('.');
  if (index == -1) {
    return file;
  } else {
    return file.slice(0, index);
  }
}

console.log(getFileName('styles.css'));
console.log(getFileName('app.js'));
console.log(getFileName('app'));
console.log(getFileName('index.js'));
console.log(getFileName('index.html'));
console.log(getFileName('index.css'));
console.log(getFileName('index')); */

//================Метод trim() використовується для видалення початкових і кінцевих пробілів із рядка.===============
/* const input = ' JavaScript is awesome!    ';
const trimmedInput = input.trim();
console.log(trimmedInput); // "JavaScript is awesome!"
console.log(input); // " JavaScript is awesome!    " */

/* function createFileName(name, ext) {
  return name.trim() + '.' + ext;
}

console.log(createFileName(' order ', 'txt'));
console.log(createFileName('report ', 'csv'));
console.log(createFileName(' presentation', 'xml')); */

//===============================ЦИКЛИ=============================

/* let count = 0;
while (count < 10) {
  console.log(`Count: ${count}`);
  count += 1;
} */

//========================Реєстрація у готелі================

/*   let clientCounter = 18;
  const maxClients = 25;

  while (clientCounter < maxClients) {
    console.log(clientCounter);
    clientCounter += 1;
  } */

/* function countClients(clientCounter, maxClients) {
  let counter = clientCounter; // створюємо локальну змінну
  while (counter < maxClients) {
    console.log(counter);
    counter += 1;
  }
}
countClients(18, 25); */

//=============================== цикл while==================
/* function calculateTotal(number) {
  let total = 0;
  let count = 1;
  while (count <= number) {
    total += count;
    count += 1;
  }
  return total;
}

console.log(calculateTotal(1));
console.log(calculateTotal(3));
console.log(calculateTotal(0));
console.log(calculateTotal(18));
console.log(calculateTotal(24));
console.log(calculateTotal()); */

//=============================== цикл do while==================
/* let count = 0;

do {
  console.log(`Count: ${count}`);
  count += 1;
} while (count < 5); */

//=============================== цикл for ==================

/* for (let i = 0; i <= 20; i += 5) {
  console.log(i);
} */

/*   У наведеному прикладі циклу for змінна i ініціалізується значенням 20. Цикл виконується доти, доки i більше або дорівнює 0. Після кожної ітерації значення i зменшується на 5. У результаті в консоль будуть виведені числа 20, 15, 10, 5 і 0. */
/* for (let i = 20; i >= 0; i -= 5) {
  console.log(i);
} */

/* function sumUpTo(number) {
  let sum = 0;
  for (let i = 0; i <= number; i += 1) {
    sum += i;
  }
  return sum;
}

console.log(sumUpTo(5)); // 15
console.log(sumUpTo(10)); // 55
console.log(sumUpTo(7)); // 0 */

//==================Інкремент Ці операції корисні, коли тобі потрібно змінювати значення змінних одразу на одиницю, що може бути важливо, наприклад, при створенні лічильників у циклах, замість комбінованих операторів += і -=.
/* let x = 5;
const y = ++x;
const z = x++;
console.log(x); // 6
console.log(y); // 6 */

//==================Декремент
/* let x = 5;
const y = --x;
const z = --x;
console.log(x); // 4
console.log(y); // 4
console.log(z); */

/* for (let i = 0; i <= 5; i++) {
  console.log(i);
} */

/* function calculateEvenTotal(number) {
  let total = 0;
  for (let count = 1; count <= number; count += 1) {
    if (count % 2 === 0) {
      total += 1;
    }
  }
  return total;
} */

/*   function calculateTotal(number) {
  let total = 0;
  let count = 2;
  while (count <= number) {
    total += count;
    count += 2;
  }
  return total;
} */

/* function calculateEvenTotal(number) {
  let total = 0;
  for (let count = 1; count <= number; count+=1) {
    if (count % 2 === 0) {
      total += count;
    }
  }
  return total;
}

console.log(calculateEvenTotal(1)); //0
console.log(calculateEvenTotal(3)); //2
console.log(calculateEvenTotal(7)); //12
console.log(calculateEvenTotal(18)); //90
console.log(calculateEvenTotal(27)); //182
console.log(calculateEvenTotal()); // */

/* for (let i = 0; i < 10; i+=1) {
  console.log(i);

  if (i === 5) {
    console.log('Met the number 5, interrupt the execution of the cycle');
    break;
  }
}

console.log('Log after cycle'); */

/* const start = 17;
const end = 25;
let number;

for (let i = start; i <= end; i += 1) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
}
console.log(number); */

/* function findNumber(max, target) {
	console.log("Log in the body of the function before the cycle");

  for (let i = 5; i <= max; i += 1) {
    console.log("Current counter value i:", i);

    if (i === target) {
      console.log(`Found the number $ {target}, interrupt the cycle`);
			break;
    }
  }

  console.log("Log in body function after cycle");
}

findNumber(10, 6);
console.log("Log after exiting function"); */

//Проверка на четность: Создай функцию isEven(n), которая возвращает true для четных чисел и false для нечетных.

/* function isEven(n) {
  return n % 2 === 0;
}
console.log(isEven(4)); */

//Шаблон адреса: Создай функцию formatAddress(city, street), которая собирает строку: "City: [город], Street: [улица]".

/* const formatAddress = (city, street) => {
  return `City: ${city}, Street: ${street}`;
};

console.log(formatAddress('Kyiv', 'Ant')); */

