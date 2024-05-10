document.addEventListener("DOMContentLoaded", function() {
  const quizData = [
    {
      question: "What is 2 + 2?",
      options: ["1", "2", "4", "22"],
      answer: "4"
    },
    {
      question: "What is 5 + 3?",
      options: ["1", "2", "4", "8"],
      answer: "8"
    },
    {
      question: "Idk bro what is x...",
      options: ["1", "2", "x", "y"],
      answer: "x"
    },
    {
      question: "5 x 6 = ?",
      options: ["11", "30", "22", "1"],
      answer: "30"
    },
    {
      question: "7 x 4 = ?",
      options: ["27", "11", "28", "54"],
      answer: "28"
    },
    // Additional randomized easy math questions
    // Thx hamza
    {
      question: "What are the roots of this equation: x^2 - 4x + 4 = 0?",
      options: ["2 and 2", "2 and -2", "2 and -2", "2 and 2"],
      answer: "2 and -2"
    },
    // Moving on to Quadratics
    {
      question: "What is the vertex of the equation x^2 + 2x + 1?",
      options: ["(1, 1)", "(0, 1)", "(1, 0)", "(0, 0)"],
      answer: "(0, 1)"
    },
    {
      question: "What is the y-intercept of the equation x^2 + 2x + 1?",
      options: ["1", "2", "3", "4"],
      answer: "1"
    },
    {
      question: "What is x^2 + 5x + 6 in factored form?",
      options: ["(x + 3)(x + 3)", "(x - 2)(x + 3)", "(x + 2)(x + 3)", "(x - 2)(x - 4)"],
      answer: "(x + 2)(x + 3)"
    },
    // Two step equations
      {
        question: "Solve: 2x + 3 = 9",
        options: ["2", "3", "4", "5"],
        answer: "3"
      },
      {
        question: "Solve: 4y - 2 = 10",
        options: ["2", "3", "4", "5"],
        answer: "3"
      },
      {
        question: "Solve: 5z + 1 = 21",
        options: ["4", "5", "6", "7"],
        answer: "4"
      },
      {
        question: "Solve: 3a - 4 = 8",
        options: ["3", "4", "5", "6"],
        answer: "4"
      },
      {
        question: "Solve: 6b + 2 = 14",
        options: ["1", "2", "3", "4"],
        answer: "2"
      },
    {
      question: "Calculate the volume: A cube with side length of 3 units",
      options: ["6", "9", "27", "81"],
      answer: "27"
    },
    {
      question: "Calculate the volume: A sphere with a radius of 2 units (use 3.14 for π)",
      options: ["8.08", "16.16", "33.51", "67.02"],
      answer: "33.51"
    },
    {
      question: "Calculate the volume: A cylinder with a radius of 2 units and height of 5 units (use 3.14 for π)",
      options: ["6.28", "12.56", "31.4", "62.8"],
      answer: "62.8"
    },
    {
      question: "Calculate the volume: A cuboid with length 3 units, width 2 units, and height 4 units",
      options: ["6", "12", "24", "48"],
      answer: "24"
    },
    {
      question: "Calculate the volume: A cone with a radius of 2 units and height of 5 units (use 3.14 for π)",
      options: ["6.28", "10.47", "20.94", "41.88"],
      answer: "20.94"
    }
    ];

  const questionContainer = document.getElementById('question');
  const optionsContainer = document.getElementById('options');

  let currentQuestion = 0;
  let score = 0;

  function showQuestion() {
    const question = quizData[currentQuestion];
    questionContainer.textContent = question.question;
    optionsContainer.innerHTML = '';

    question.options.forEach(option => {
      const button = document.createElement('button');
      button.innerHTML = `<button>${option}</button>
      <style>
      button {
        background-color: #232e33;
        border-style:hidden;
        color: white;
        font-size: 35px;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
      }
      </style>`;
      // The code to style the buttons
      optionsContainer.appendChild(button);
      button.addEventListener("click", () => selectAnswer(option));
    });
  }

  function selectAnswer(selectedOption) {
    const answer = quizData[currentQuestion].answer;
    const answerText = document.createElement('p');

  // Pls fix this bro
    if (selectedOption === answer) {
      answerText.innerHTML = `<p>Correct!</p>
      <style>
        p {
          position: fixed;
          bottom: 400px;
          color: black;
        }
      </style>`;
      score++;
    } else {
      answerText.innerHTML = `<p>Incorrect!</p>
        <style>
          p {
            position: fixed;
            bottom: 400px;
          }
        </style>`;
    }

    optionsContainer.appendChild(answerText);
    currentQuestion++;

    if (currentQuestion < quizData.length) {
      setTimeout(showQuestion, 1000); // Move to the next question after 1 second
    } else {
      showResult();
    }

  }

  function showResult() {
    optionsContainer.innerHTML = '';
    questionContainer.innerHTML = `
      <h1>Quiz Completed </h1>
      <p>Your score: ${score}/${quizData.length}</p>
    `;
  }

  showQuestion();
});


/*
Add this as well, basically, the image will show when it hits a certain question, as the user advances, it changes images and gets scarier...

if (currentQuestion == 5) {  
answerText.insertAdjacentHTML("afterend", `<img src=Photo/Image2.heic>`);
}
*/
