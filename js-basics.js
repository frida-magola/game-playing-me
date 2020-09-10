/*
calculate the average for 2 team basket player 
 */

const countGames = 3;
const johnTeam = (116 + 94 + 123) / 3;
const mikeTeam = (116 + 94 + 123) / 3;
const averageScore = mikeTeam - johnTeam;

const scoreFinal = null;

switch (true) {
  case johnTeam > mikeTeam:
    document.write(
      "The winner is John's Team with score is:" +
        johnTeam +
        "Average score is: " +
        averageScore +
        "<br>"
    );
    break;
  case johnTeam < mikeTeam:
    document.write(
      "The winner is Mike's Team with score is:" +
        mikeTeam +
        "Average score is: " +
        averageScore +
        "<br>"
    );
    break;

  case johnTeam == mikeTeam:
    document.write(
      "There is no winner the score is equal, Average score is: " +
        averageScore +
        "<br>"
    );

    break;
  default:
    document.write("No score available", "<br>");
}

// document.write("Mike's Team score is:" + johnTeam, "<br>");
// document.write("Mike's Team score is:" + mikeTeam);

/*--------------------------------
FUNCTIONS
----------------------------------*/

function calculateAge(birthYear) {
  const age = new Date().getFullYear() - birthYear;
  return age;
}

document.write(
  calculateAge(2019) + "Year Old <br>",
  calculateAge(1989) + " Year old <br>"
);

function yearOfRetirement(year, firstname) {
  const currentAge = calculateAge(year);
  const retirementAge = 65 - currentAge;
  if (retirementAge > 0) {
    document.write(
      firstname +
        " you are " +
        currentAge +
        " and left " +
        retirementAge +
        " for your retirement. "
    );
  } else {
    document.write(firstname + "your are retired already.");
  }
}
// yearOfRetirement(1989, "Mwalila");

/**
 * ARRAYS
 */
const john = ["mwalila", "nyira", 1989, "female"];
const fruitsArrays = new Array("banana", "mangoes", "apples", 30, false);

console.log(john);
console.log(fruitsArrays);
//add to the end an element into an array
john[4] = "Deborah";
john[john.length] = "Black";
john.push("Congolese");

// add to the beginning an element into an array
john.unshift("Ms");

// remove element at the end of an array
john.pop();

// remove element at the start of an array
john.shift();

// kowning the index of an element into an array
const indexEl = john.indexOf(6);
john[john.length] = "developer";
const developer =
  john.indexOf("developer") === -1
    ? john[0] + " is not a developer"
    : john[0] + " is developer";

// calculate function
const bills = [124, 48, 268];
const tipCalculator = (bill) => {
  let percentage;
  if (bill < 50) {
    percentage = 0.2;
  } else if (bill >= 50 && bill < 200) {
    percentage = 0.15;
  } else {
    percentage = 0.1;
  }

  return bill * percentage;
};
const tips = [
  tipCalculator(bills[0]),
  tipCalculator(bills[1]),
  tipCalculator(bills[2]),
];

const finalValues = [
  bills[0] + tips[0],
  bills[1] + tips[1],
  bills[2] + tips[2],
];
// console.log(tips, finalValues);
/**
 * OBJECTS AND PROPERTIES
 */
// Object Litteral
const mwalila = {
  fullname: "Mwalila nyira",
  gender: "female",
  age: "1989",
  family: ["mwalila", 4, "christian"],
  job: "Developer",
  isMarried: false,
};
mwalila["family"];
mwalila.gender;
//mutate data
mwalila["job"] = "Software Engineer";
mwalila["isMarried"] = true;

// new Object
const familyPrincipales = new Object();
familyPrincipales["name"] = "Mwalila";
familyPrincipales["origin"] = "DRC";
familyPrincipales["numbers"] = "5";
familyPrincipales.birthDay = "1996";
familyPrincipales.calcAge = function () {
  this.ageFamily = new Date().getFullYear() - this.birthDay;
};
//   familyPrincipales.calcAge();
// console.log(familyPrincipales);

// using this key word representing current object
// Object and methode
let mwalila2 = {
  fullname: "Mwalila nyira",
  gender: "female",
  age: "1989",
  family: ["mwalila", 4, "christian"],
  job: "Developer",
  isMarried: false,
  calcMwalilaAge: function () {
    this.mwalilaAge = new Date().getFullYear() - this.age;
  }, // methode for this object
};
// mwalila2.calcMwalilaAge();
// console.log(mwalila2);

/**
 * Challenges on Objects, properties  and methodes
 */

const johnInfo = {
  firstName: "John ",
  lastNname: "Smith",
  mass: 54,
  height: 2.1,
  calcJohnBMI: function () {
    this.johnBMI = this.mass / (this.height * this.height);
    return this.johnBMI;
  },
};
johnInfo.calcJohnBMI();
// console.log(johnInfo);

const markInfo = {
  firstName: "Mark ",
  lastNname: "Generator",
  mass: 60,
  height: 1.5,
  calcMarkBMI: function () {
    this.markBMI = this.mass / (this.height * this.height);
    return this.markBMI;
  },
};
markInfo.calcMarkBMI();
// console.log(markFinalVal);

switch (true) {
  case johnInfo.johnBMI > markInfo.markBMI:
    console.log(
      johnInfo.firstName +
        "is BMI " +
        johnInfo.johnBMI +
        " is higher than" +
        markInfo.firstName +
        "BMI is" +
        markInfo.markBMI
    );
    break;

  case markInfo.markBMI > johnInfo.johnBMI:
    console.log(
      markInfo.firstName +
        "is BMI " +
        markInfo.markBMI +
        " is higher than" +
        johnInfo.firstName +
        "BMI is" +
        johnInfo.johnBMI
    );
    break;
  case markInfo.markBMI === johnInfo.johnBMI:
    console.log(
      markInfo.firstName +
        "and " +
        johnInfo.firstName +
        " they have the same BMI"
    );
    break;
  default:
    console.log("No match");
}

/**
 * Loop and iteration
 */
// looping forbackward
for (let i = 0; i <= 19; i += 2) {
  // console.log(i);
}

for (let i = 0; i < fruitsArrays.length; i++) {
  // continue
  if (typeof fruitsArrays[i] !== "string") continue;
  // if (typeof fruitsArrays[i] !== "string") break;
  // console.log(fruitsArrays[i]);
}
for (let i = 0; i < fruitsArrays.length; i++) {
  //  breaking
  if (typeof fruitsArrays[i] !== "string") break;
  // console.log(fruitsArrays[i]);
}

// looping backward
for (let i = fruitsArrays.length - 1; i >= 0; i--) {
  // console.log(fruitsArrays[i]);
}

/**
 * Challenges on Object and loops
 */

const tipsCalculator = {
  billVal: [124, 48, 268, 180, 42],
  calcTip: function () {
    this.bills = [];
    this.tipBillPaid = [];
    for (let i = 0; i < this.billVal.length; i++) {
      let percentageBill;
      const billIt = this.billVal[i];
      if (billIt < 50) {
        percentageBill = 0.2;
      } else if (billIt >= 50 && billIt < 200) {
        percentageBill = 0.15;
      } else {
        percentageBill = 0.1;
      }
      this.bills[i] = billIt * percentageBill;
      this.tipBillPaid[i] = billIt + billIt * percentageBill;
    }
  },
};

tipsCalculator.calcTip();
console.log(tipsCalculator);

// calculate average
const tipCalcAverage = function (tips) {
  let sum = 0;
  for (let i = 0; i < tips.length; i++) {
    sum = sum + tips[i];
  }
  return sum / tips.length;
};
tipCalcAverage(tipsCalculator.tipBillPaid);
console.log(tipCalcAverage(tipsCalculator.tipBillPaid));
