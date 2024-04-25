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
      question: "10x^2 = 100. Find x",
      options: ["1", "10", "2", "8"],
      answer: "1"
    },
    {
      question: "5 * 6 = ?",
      options: ["11", "30", "22", "1"],
      answer: "30"
    },
    {
      question: "7 * 4 = ?",
      options: ["27", "11", "28", "54"],
      answer: "28"
    },
    // Additional randomized easy math questions
    // Thx hamza
    {
      question: "What is 3 + 4?",
      options: ["6", "7", "8", "9"],
      answer: "7"
    },
    {
      question: "What is 9 - 5?",
      options: ["3", "4", "5", "6"],
      answer: "4"
    },
    {
      question: "What is 6 * 2?",
      options: ["10", "11", "12", "13"],
      answer: "12"
    },
    {
      question: "What is 10 / 2?",
      options: ["3", "4", "5", "6"],
      answer: "5"
    },
    {
      question: "What is 8 + 2?",
      options: ["9", "10", "11", "12"],
      answer: "10"
    },
    // Additional randomized easy math questions
    {
      question: "What is 15 - 8?",
      options: ["5", "6", "7", "8"],
      answer: "7"
    },
    {
      question: "What is 4 * 3?",
      options: ["9", "10", "11", "12"],
      answer: "12"
    },
    {
      question: "What is 18 / 3?",
      options: ["3", "4", "5", "6"],
      answer: "6"
    },
    {
      question: "What is 10 + 5?",
      options: ["14", "15", "16", "17"],
      answer: "15"
    },
    {
      question: "What is 9 * 2?",
      options: ["16", "17", "18", "19"],
      answer: "18"
    },
    // Moving on to Quadratics
    {
      question: "What is x^2 + 5x + 6 in factored form?",
      options: ["(x + 3)(x + 3)", "(x - 2)(x + 3)", "(x + 2)(x + 3)", "(x - 2)(x - 4)"],
      answer: "(x + 2)(x + 3)"
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
      button.innerText = option;
      optionsContainer.appendChild(button);
      button.addEventListener("click", () => selectAnswer(option));
    });
  }

  function selectAnswer(selectedOption) {
    const answer = quizData[currentQuestion].answer;
    const answerText = document.createElement('p');

    if (selectedOption === answer) {
      answerText.textContent = "Correct!";
      score++;
    } else {
      answerText.textContent = "Incorrect!";
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
