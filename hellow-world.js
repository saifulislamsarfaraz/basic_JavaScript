/*let js = 'decent';
let first_name = 'saiful';
console.log(first_name);
console.log(first_name);
console.log(first_name);
console.log(first_name);
console.log(first_name);

let javascriptIsFun = true;
console.log(typeof true);
console.log(typeof 65);
console.log(typeof "this");
year = 1191
console.log(typeof year);
console.log(typeof null);
const birthYear = 1991;


//console.log(5 + 6 + 5 + 5 + 56);
var pneumonoultramicrescompicsilicovoclanoconiosis = 'programmer';
pneumonoultramicrescompicsilicovoclanoconiosis = 'teacher';
console.log(pneumonoultramicrescompicsilicovoclanoconiosis);
lastname = 'so you will understand little bit letter';
console.log(lastname);
var rohimName = 'rohim';
korimName = 'korim';
console.log(rohimName, korimName);
const youKnow = 89 - 32;
const firstName = 'saif';
const lastName = 'islam';
console.log(firstName + ' ' + lastname);



//comparison operatiors
//console.log ()
*/
var marksWeights = 78;
var marksHeight = 1.69;
var marksBMI = (marksWeights / (marksHeight ** 2));
console.log(marksBMI);
var johnsWeights = 92;
var johnsHeight = 1.95;
var johnsBMI = (johnsWeights / (johnsHeight ** 2));
console.log(johnsBMI);
console.log(marksBMI > johnsBMI);


var marksWeights = 95;
var marksHeight = 1.88;
var marksBMI = (95 / (1.88 * 1.88));
console.log(marksBMI);
var johnsWeights = 85;
var johnsHeight = 1.76;
var johnsBMI = (85 / (1.76 * 1.76));
console.log(johnsBMI);
console.log(marksBMI > johnsBMI);
if (marksBMI > johnsBMI) {
  console.log(`Marks BMI is higher than Johns`);
} else {
  console.log(`Johns BMI is higher than marks!`);
}

if (marksBMI > johnsBMI) {
  console.log(`Makrs BMI (${marksBMI}) values is higher than Johns (${johnsBMI})`);
} else {
  console.log(`Johns BMI (${johnsBMI}) values is higher than Marks (${marksBMI})`);
}
const firstName = 'saiful';
const lastName = 'islam';
const ocupation = 'web developer';
const birthYear = 2000;
const currentYear = 2021;

const saif = "I'am " + firstName + ' ' + lastName + ', a ' + (currentYear - birthYear) + ' years old ' + ocupation + '!';
console.log(saif);
//upgrade 
const saifNew = `I'am ${firstName} , a ${currentYear - birthYear} year old ${ocupation}!`;
console.log(saifNew);
const age = 15;

if (age >= 18) {
  console.log('saiful can start driving license 🚗🚗🚓🚓🚓🚓🚓🚓🚓🚑🚑🚑🚑🚒🚒🚑🚗🚗🚗🚗🚗🚗🚗');
} else {
  const yearsLeft = 18 - age;
  console.log(`saiful is too young. wait another ${yearsLeft} years :)`);
}

//type conversion 
const inputYear = '1991';
console.log(Number(inputYear) + 18, inputYear);
console.log(inputYear + 18);
//type coercion
console.log("I'am " + 23 + ' years old.');
let n = '1' + 1;
n = n - 1;
console.log(n);
// 5 falst values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('saiful'));
console.log(Boolean(''));
console.log(Boolean({}));

const ages = '18';
if (ages === 18) console.log('You just became an adult :D(strict)')
if (ages == 18) console.log('You just became an adult :D(loose)')

const favourite = Number(prompt("what's your favourite number"));
console.log(favourite);

if (favourite === 23) {
  console.log('cool! 23 is an amazing number!');
}

const aTeam = (96 + 108 + 89) / 3;
const bTeam = (88 + 91 + 110) / 3;
if (aTeam && bTeam >= 100) {
  console.log('draw both team');
} else if (aTeam > 100 && bTeam > 100) {
  if (aTeam > bTeam)
    console.log('win team aTeam');
} else if (bTeam > 100 && aTeam > 100) {
  if (bTeam > aTeam)
    console.log('win team bTeam');
} else if (aTeam === bTeam) {
  console.log('draw team both');
} 
