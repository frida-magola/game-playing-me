// FUNCTIONS CONSTRUCTOR
let john = {
  name: 'mwalila',
  job: 'web developer',
};

const Person = function (name, year, job) {
  this.name = name;
  this.year = year;
  this.job = job;
  //   this.calcAge = function () {
  //     this.age = new Date().getFullYear - this.year;
  //   };
};

// prototype
Person.prototype.calcAge = function () {
  this.age = new Date().getFullYear - this.year;
};

const person1 = new Person('mwalila', 1900, 'designer');
// person1.calcAge();
const person2 = new Person('mwalila2', 1300, 'Teacher');
// person2.calcAge();
// console.log(person1);
// console.log(person2);

// Object.create()
const personProto = {
  calcAge() {
    this.age = new Date().getFullYear - this.year;
  },
};

const mwalila = Object.create(personProto);
mwalila.name = 'Mireille';
mwalila.lastname = 'vigne';

const personne = Object.create(personProto, {
  name: { value: 'mbumba' },
  job: { value: 'designer' },
});

// console.log(mwalila);
// console.log(personne);

/**
 * Passing function as an argument
 */
let years = [1245, 1980, 1956, 1990, 2000, 2018];

function arrayCalcAge(arr, fn) {
  let arrayRes = [];

  for (let i = 0; i < arr.length; i++) {
    arrayRes.push(fn(arr[i]));
  }
  return arrayRes;
}

function calcAgeFn(el) {
  return 2020 - el;
}

// function isFullAge(el) {
//   return el >= 18;
// }
function isFullAge(limit, el) {
  return el >= limit;
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - 0.67 * el);
  } else {
    return -1;
  }
}

const ageRes = arrayCalcAge(years, calcAgeFn);
// const fullAge = arrayCalcAge(ageRes, isFullAge);
const rate = arrayCalcAge(ageRes, maxHeartRate);

console.log(ageRes);

console.log(rate);

// use bind methode on isFullAge function
const fullAge = arrayCalcAge(ageRes, isFullAge.bind(this, 25));
console.log(fullAge);
/**
 * First class function return function
 */

function interviewQuestion(job) {
  if (job === 'teacher') {
    return function (name) {
      console.log(name + ' What subject do you teach?');
    };
  } else if (job === 'designer') {
    return function (name) {
      console.log('Please could you tell us more about UX designer ' + name);
    };
  } else {
    return console.log('What do you do?');
  }
}

// const teachQuestionInterv = interviewQuestion('teacher');
// const designQuestionInterv = interviewQuestion('designer');
// teachQuestionInterv('Mwalila');
// designQuestionInterv('Vigne');
// interviewQuestion('Engineer')('vigne');

/**
 * IIFE
 */

// decorator func
// function game() {
//   let score = Math.round() * 10;
//   console.log(score >= 5);
// }
// game();

//IIFE
//for privacy data
(function () {
  let score = Math.round() * 10;
  console.log(score >= 5);
})();
(function (goodLuck) {
  let score = Math.round() * 10;
  console.log(score >= 5 - goodLuck);
})(5);

/**
 * CLOSURE
 */

// retirement
function retirementAge(age) {
  let a = 'Year left for your retirement';

  return function (yearOfBirthDay, name) {
    let currentAge = 2020 - yearOfBirthDay;
    let retirementLeft = age - currentAge;
    console.log('Hey ' + name + ' ' + retirementLeft + ' ' + a);
  };
}
const retirementUs = retirementAge(66);
retirementUs(1990, 'mwalila');

const retirementDRC = retirementAge(65);
retirementDRC(1990, 'Vigne');

const retirementZA = retirementAge(70);
retirementZA(1990, 'Deborah');

//  Interview question
function closureInterviewQuestion(job) {
  return function (name) {
    if (job === 'teacher') {
      console.log(
        name +
          ' your job is ' +
          job +
          ' Please can you tell us which topic do you teach?'
      );
    } else if (job === 'designer') {
      console.log(
        ' you are  ' + job + ' Please can you tell us more about UX design?'
      );
    } else {
      console.log('Hi ' + name + ' what do you do?');
    }
  };
}

closureInterviewQuestion('Teacher')('mwalila');
closureInterviewQuestion('designer')('vigne');
closureInterviewQuestion('teacher')('Mbumba');
closureInterviewQuestion('singer')('chenani');

/**
 * Bind , call and apply met
 */

const mireille = {
  name: 'mwalila',
  job: 'designer',
  age: 30,
  presentation: function (style, timeOfDay) {
    if (style === 'formal') {
      console.log(
        `${timeOfDay} ladies and gentlemen, I am ${this.name}, I am ${this.job}, and I am ${this.age} year old`
      );
    } else if (style === 'friendly') {
      console.log(
        `Hey whats\'up, I am ${this.name}, I am ${this.job}, and I am ${this.age} year old have a ${timeOfDay}`
      );
    }
  },
};

const vigne = {
  name: 'Vine',
  job: 'Web developer',
  age: 20,
};

mireille.presentation('formal', 'morning');
// console.log(mireille);

// boreing a method of mireille by calling the function to vigne object
//call function
mireille.presentation.call(vigne, 'friendly', 'afternoon');

//apply method except an array as params
// mireille.presentation.apply(vigne, ['friendly', 'night'])

// bind method
const vigneBind = mireille.presentation.bind(vigne, 'friendly'); //bind method return a function
vigneBind('night');
const vigneBind2 = mireille.presentation.bind(vigne, 'formal'); //bind method return a function
vigneBind2('good night');
