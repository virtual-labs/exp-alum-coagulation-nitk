
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
      question: " When alum solution is added to water, the dissociated molecule is / are ",
      answers: {
        a: "S<sup>2+</sup>",
        b: "SO<sub>4</sub><sup>2-</sup>",
        c: "H<sup>+</sup>",
        d: "None of the above"
      },
      correctAnswer: "b"
    },
    {
      question: "Coagulation along with turbidity removes",
      answers: {
        a: "Colour",
        b: "Taste",
        c: "Microorganisms",
        d: "All of the above"
      },
      correctAnswer: "d"
    },
    {
      question: "Metal hydroxides are good",
      answers: {
        a: "Absorbents",
        b: "Decomposer",
        c: "Reactor",
        d: "Chelating agent"
      },
      correctAnswer: "a"
    },
    {
        question: "Unit of turbidity is NTU where NTU stands for  ",
        answers: {
          a: "Neogenic turbidity units",
          b: "Neophenometeric turbidity units",
          c: "Nephelometric turbidity units",
          d: "Nefermetic turbidity units"
        },
        correctAnswer: "c"
      },
    {
        question: "A jar test simulates the _________ process. ",
    answers: {
          a: "Flocculation",
          b: "Coagulation",
          c: "Both a & b",
          d: "None of above"
        },
        correctAnswer: "c"
      }
  ];

// ---------------------------- End -------------------------------

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
