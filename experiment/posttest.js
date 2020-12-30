
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


// Don't touch the above code




// Write your MCQs here --- Start --- --------------------

  const myQuestions = [
    {
      question: "Stirring speed is reduced to promote ",
      answers: {
        a: "Turbidity formation",
        b: "Floc formation",
        c: "Both a & b",
        d: "None of above"
      },
      correctAnswer: "b"
    },

    {
      question: "Formula of alum is ",
      answers: {
        a: "[Al<sub>2</sub>(SO<sub>4</sub>)<sub>5</sub> 18H<sub>2</sub>0]",
        b: "[Al<sub>3</sub>(SO<sub>2</sub>)<sub>3</sub> 18H<sub>2</sub>0]",
        c: "[Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> 18H<sub>2</sub>0]",
        d: "[Al<sub>2</sub>(SO<sub>2</sub>)<sub>2</sub> 20H<sub>2</sub>0]"
      },
      correctAnswer: "c"
    },

    {
      question: "Jar test device consists of _________ number of stirrers approximately. ",
      answers: {
        a: "1-2",
        b: "4-6",
        c: "10-20",
        d: "100-150 "
      },
      correctAnswer: "b"
    },
    {
      question: "Graph is plotted between turbidity in NTU against coagulant dosage to determine ",
      answers: {
        a: "% Alum",
        b: "% Iron",
        c: "Optimum Alum dosage",
        d: "Optimum Iron dosage"
      },
      correctAnswer: "c"
    },
    {
      question: "Blank solution is used in colorimetric estimation to  ",
      answers: {
        a: "Nullify the absorbance caused due to the colouring impurities present in the reagents",
        b: "Nullify the error caused by the instrument",
        c: "Nullify the error caused by colour",
        d: "Check the instrument"
      },
      correctAnswer: "a"
    }
  ];

// ---------------------------- End -------------------------------

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
