class Question {
  constructor(text, choices, answer){
    this.text = text;
    this.choices = choices;
    this.answer = answer
  }
  isCorrectAnswer(choice){
    return choice === this.answer;
  }
}

// Data in array

const questions = [
  new Question(
    "Quelle méthode Javascript permet de filtrer les éléments d'un tableau",
    ["indexOf()", "map()", "filter()", "reduce()"],
    "filter()"
  ),
  new Question(
    "Quelle méthode Javascript permet de vérifier si un élément figure dans un tableau",
    ["isNaN()", "includes()", "findIndex()", "isOdd()"],
    "includes()"
  ),
  new Question(
    "Quelle méthode transforme du JSON en un objet Javascript ?",
    ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.toJS"],
    "JSON.parse()"
  ),
  new Question(
    "Quel objet Javascript permet d'arrondir à l'entier le plus proche",
    ["Math.ceil()", "Math.floor()", "Math.round()", "Math.random()"],
    "Math.round()"
  ),
];

// 

class Quizz {
  constructor(questions){
    this.score = 0;
    this.questions = questions;
    this.currentQuestionIndex = 0;
  }
  getCurrentQuestion(){
    return this.questions[this.currentQuestionIndex];
  }
  guess(answer){
    if(this.getCurrentQuestion().isCorrectAnswer(answer)){
      this.score ++;
    }
    this.currentQuestionIndex ++;
  }
  hasEnded(){
    return this.currentQuestionIndex >= this.questions.length;
  }
}

// Display app 

const display = {
  elementShown: function(id, text){
    let element = document.getElementById(id);
    element.innerHTML = text;
  },
  questions : function(){
    this.elementShown('question', quizz.getCurrentQuestion().text)
  },
  choices : function(){
    let choices = quizz.getCurrentQuestion().choices;

    guessHandler = (id, guess) => {
      document.getElementById(id).onclick = function() {
        quizz.guess(guess);
        quizzApp();
      }
    }
    for(let i = 0; i < choices.length; i ++){
      this.elementShown('choice' + i, choices[i])
    }
  }
}

// Game logic 

quizzApp = () => {
  if (quizz.hasEnded()){

  } else {
    display.questions();
    display.choices();
  }
}

// Create quizz 
let quizz = new Quizz(questions);
quizzApp();