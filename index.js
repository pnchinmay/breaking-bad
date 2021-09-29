var readlineSync = require("readline-sync");
const chalk = require('chalk');
var currentScore = 0;
var userName = readlineSync.question(chalk.blue("What is your name ? "));

console.log(chalk.italic("Welcome " + " to \"Breaking Bad Trivia Quiz\", " + userName + "\nHere goes the questions:\n"));

function play(question, answer) {
  var userAnswer = readlineSync.question(chalk.blue(question));

  if(userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green("You're amazing! :)"));
    currentScore = currentScore + 1;
  }
  else {
    console.log(chalk.red("Wrong :("));
  }

  console.log("Current Score: ", currentScore);
  console.log(chalk.yellow("------------------------"));
}

var questionList = [{
  question: "What subject does Walter White teaches in high school ? \na. Physics \nb. Chemistry\nc. Biology\nd. History\n",
  answer: "b"
}, {
  question: "In which New Mexico City does the show 'Breaking Bad' take place ? \na. Santa Fe \nb. Alburquerque\nc. Las Cruces\nd. Roswell\n",
  answer: "b"
}, {
  question: "What is the slogan of Saul Goodman's law firm in 'Breaking Bad' ? \na. Turn Your Pain Into Rain. \nb. One Call…That’s All!\nc. Better Call Saul!\nd. Get What’s Yours.\n",
  answer: "c"
}, {
  question: "Gus Fring, a crime syndicate boss, owns a restaurant in the show. What is the name of that fried chicken restaurant? \na. Pollos Hermanos \nb. Pollo Feliz\nc. Delicioso Pollo\nd. Amigos de Pollo \n",
  answer: "a"
}, {
  question: "Which of the following characters do not die by the end of Breaking Bad ? \na. Uncle Jack  \nb. Skinny Pete\nc. Walter White\nd. Hank \n",
  answer: "b"
}];

var scoreList = [{
  name: "Chinmay Manas",
  score: 5
}, {
  name: "Akash",
  score: 4
}];

for(var i=0; i<questionList.length; i++) {
  play(questionList[i].question, questionList[i].answer);
}

console.log(chalk.yellow("------------------------"));
console.log(chalk.italic.bold.cyanBright("Your final score is: ", currentScore , "\n"));

if(currentScore > scoreList[1].score) {
  console.log("Yay! you made it to the high scoreres :)");
  scoreList[1].name = userName;
  scoreList[1].score = currentScore;
}
else {
  console.log(chalk.bold.magentaBright("Top scores are: "));
}
for(var i=0; i<2; i++) {
  console.log(chalk.italic.bold.greenBright(scoreList[i].name + "\t" + scoreList[i].score));
}
