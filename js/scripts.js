const questions = [
  {
    question: "What does DOM stand for?",
    answers: [
      "Document Object Model",
      "Data Object Model",
      "Dynamic Object Model",
    ],
    correct: 0,
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    answers: [
      "var",
      "let",
      "const",
    ],
    correct: 2,
  },
  {
    question: "What is the purpose of the 'typeof' operator?",
    answers: [
      "To check if a variable is defined",
      "To determine the type of a value",
      "To create a new variable",
    ],
    correct: 1,
  },
  {
    question: "What does AJAX stand for?",
    answers: [
      "Asynchronous JavaScript and XML",
      "Advanced JavaScript and XML",
      "Asynchronous JSON and XML",
    ],
    correct: 0,
  },
  {
    question: "How do you write a single-line comment in JavaScript?",
    answers: [
      "// This is a comment",
      "/* This is a comment */",
      "' This is a comment",
    ],
    correct: 0,
  },
  {
    question: "What is the purpose of the 'addEventListener' method?",
    answers: [
      "To remove an event listener",
      "To add a new property to an object",
      "To attach an event handler to an element",
    ],
    correct: 2,
  },
  {
    question: "Which function is used to convert a string to a floating-point number in JavaScript?",
    answers: [
      "parseFloat()",
      "parseInt()",
      "toPrecision()",
    ],
    correct: 0,
  },
  {
    question: "What is the 'this' keyword in JavaScript?",
    answers: [
      "It refers to the current function",
      "It refers to the global object",
      "It refers to the current object",
    ],
    correct: 2,
  },
  {
    question: "What is the purpose of the 'JSON.stringify' method?",
    answers: [
      "To parse a JSON string",
      "To convert an object to a JSON string",
      "To validate a JSON object",
    ],
    correct: 1,
  },
  {
    question: "Which method is used to remove the last element from an array in JavaScript?",
    answers: [
      "pop()",
      "shift()",
      "splice()",
    ],
    correct: 0,
  },
];

const correct = new Set()

for(const question of questions) {
  const template = document.querySelector("template")
  const quizItem = template.content.cloneNode(true)
  
  quizItem.querySelector("h3").textContent = question.question
  for(let answer of question.answers) {
    const dt = quizItem.querySelector("dl dt").cloneNode(true)
    dt.querySelector("span").textContent = answer
    dt.querySelector("input").setAttribute("name", `question-${questions.indexOf(question) + 1}`)
    dt.querySelector("input").value = question.answers.indexOf(answer)
    dt.querySelector("input").onchange = (e) => {
      const isAnswerCorrect = question.correct == Number(e.target.value)
      
      if(correct.has(question)) {
        correct.delete(question)
      }
      
      if(isAnswerCorrect) {
        correct.add(question)
      }
      
      const showTotal = document.querySelector("#hits span")
      showTotal.textContent = `${correct.size} out of ${questions.length}`
    }

    quizItem.querySelector("dl").appendChild(dt)
  }

  quizItem.querySelector("dl dt").remove()
  
  const quiz = document.querySelector("#quiz")
  quiz.appendChild(quizItem)
}