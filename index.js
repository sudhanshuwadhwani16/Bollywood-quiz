var readlineSync = require('readline-sync');
var chalk = require("chalk")

var userName = chalk.bold.red(readlineSync.question(chalk.blue(("What's your name?  "))));

console.log("Welocome to the quiz " + userName + "\n");
console.log("Topic of the quiz is" + chalk.yellowBright(" Bollywood"))
var score = 0;

function quiz(options, question, answer){
  var index = readlineSync.keyInSelect(options, chalk.yellow(question));
  var userAnswer = options[index];
  
  var answerIndex = options.indexOf(answer)

  if(userAnswer === answer){
    console.log(chalk.underline.blue("Correct!"))
    score=score + 1;
  
  }else if(index == "-1"){
    console.log("You choose to skip this question")
  }
  else{
    console.log(chalk.underline.red("Incorrect!"));  
    console.log("Correct answer is " + (answerIndex + 1) + " " +  chalk.bgYellow(answer))

  }
  console.log(chalk.bgRed("Your score is : ",score))
  console.log("\n")
}

var questions = [{
  options : ["Salman Khan","Amitabh Bachchan","Shah Rukh Khan","Akshay Kumar"],
  question : "Which Indian actor is known as King of Bollywood?",
  answer : "Shah Rukh Khan"
},{
  options : ["Parthoprotim Ganguly","Abhas Kumar Ganguly","Pradeep Ganguly","Kumar Sanu"],
  question : "What is Kishore Kumar's real name??",
  answer : "Abhas Kumar Ganguly"
},{
  options : ["Sara Ali Khan","Shah Rukh Khan","Ayushmann Khurrana","Yami Gautam"],
  question : "who is the brand ambassador of singapore tourism?",
  answer : "Sara Ali Khan"
},{
  options : ["Shraddha Kapoor","Janhvi Kapoor","Khushi Kapoor","Kareena Kapoor"],
  question : "Which amongst the given is the second daughter of boney kapoor?",
  answer : "Khushi Kapoor"
},{
  options : ["Deepika Padukone","Katrina kaif","Preity Zinta","Aishwarya Rai Bachchan"],
  question : "Who plays the female lead in the movie 'Chandni Chowk to China'?",
  answer : "Deepika Padukone"
}]



for(var i=0; i<questions.length; i++){
  currentQuestion = questions[i];
  quiz(currentQuestion.options,currentQuestion.question, currentQuestion.answer);
}

console.log("You scored " + score + "/" + 5 + ".")
if(score == 0){
  console.log(chalk.bold.redBright("Better luck next time!"))
}else if(score == 1 || score == 2){
  console.log(chalk.bold.redBright("You can do better!"))
}else if(score == 3 || score == 4){
  console.log(chalk.bold.redBright("It was close! You almost did it!"))
}else{
  console.log(chalk.bold.redBright("You nailed it!"))
}