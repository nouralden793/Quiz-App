let countSpan = document.querySelector(".quiz-info .numb");
let spansCont = document.querySelector(".bullets .spans");
let title = document.querySelector(".quiz-app .quiz-area");
let answerArea = document.querySelector(".quiz-app .answers-area");
let subBtn = document.querySelector(".subBtn");
let bullets = document.querySelector(".bullets");
let resFirstCont = document.querySelector(".resCont");
let resSecondCont = document.querySelector(".resCont .results");
let countDownElement = document.querySelector(".count-down");
let playAgain = document.querySelector(".playAgain");

let currentIndex = 0;
let rightAnswers = 0;
let countDownInterval;

title.textContent = "";
answerArea.textContent = "";
spansCont.textContent = "";
let NumberOfQuestions = 10;
let pastQuesObj = [
  {
    title: "Why We Use <br> Element ?",
    answer_1: "To Make Text Bold",
    answer_2: "To Make Text Italic",
    answer_3: "To Add Breakline",
    answer_4: "To Create Horizontal Line",
    right_answer: "To Add Breakline",
  },
  {
    title: "Is <img> Element Has Attribute href ?",
    answer_1: "Yes",
    answer_2: "No Its For Anchor Tag <a>",
    answer_3: "All Elements Has This Attribute",
    answer_4: "Answer 1 And 3 Is Right",
    right_answer: "No Its For Anchor Tag <a>",
  },
  {
    title: "How Can We Make Element Text Bold ?",
    answer_1: "Putting It Inside <b> Tag",
    answer_2: "Putting It Inside <strong> Tag",
    answer_3: "Customizing It With Font-Weight Property In CSS",
    answer_4: "All Answers Is Right",
    right_answer: "All Answers Is Right",
  },
  {
    title: "What Is The Right Hierarchy For Creating Part Of Page ?",
    answer_1: "<h2> Then <p> Then <h1> Then <p> Then <h3> Then <p> Then <img>",
    answer_2: "<h1> Then <p> Then <h3> Then <p> Then <h2> Then <p> Then <img>",
    answer_3: "<h2> Then <p> Then <h3> Then <p> Then <h1> Then <p> Then <img>",
    answer_4: "All Solutions Is Wrong",
    right_answer: "All Solutions Is Wrong",
  },
  {
    title: "How Can We Include External Page Inside Our HTML Page ?",
    answer_1: "By Using Include in HTML",
    answer_2: "By Using Load In HTML",
    answer_3: "By Using iFrame Tag",
    answer_4: "All Solutions Is Wrong",
    right_answer: "By Using iFrame Tag",
  },
  {
    title: "What Is The Tag That Not Exists in HTML ?",
    answer_1: "<object>",
    answer_2: "<basefont>",
    answer_3: "<abbr>",
    answer_4: "All Tags Is Exists in HTML",
    right_answer: "All Tags Is Exists in HTML",
  },
  {
    title: "How We Specify Document Type Of HTML5 Page ?",
    answer_1: "<DOCTYPE html>",
    answer_2: "<DOCTYPE html5>",
    answer_3: "<!DOCTYPE html5>",
    answer_4: "<!DOCTYPE html>",
    right_answer: "<!DOCTYPE html>",
  },
  {
    title: "What Is The Element Thats Not Exists in HTML5 Semantics ?",
    answer_1: "<article>",
    answer_2: "<section>",
    answer_3: "<blockquote>",
    answer_4: "<aside>",
    right_answer: "<blockquote>",
  },
  {
    title: "In HTML Can We Use This Way To Add Attributes ?",
    answer_1: "<div class='class-name'>",
    answer_2: "<div class=class-name>",
    answer_3: '<div class="class-name">',
    answer_4: "All Is Right",
    right_answer: "All Is Right",
  },
  {
    title: "In Input Type Radio How To Set A Right Name ?",
    answer_1: "The Same Name",
    answer_2: "Diffrent Name On Every Input",
    answer_3: "Diffrent Name On Two Inputs But The Rest Is The Same Name",
    answer_4: "All Answers Is Right",
    right_answer: "The Same Name",
  },

  {
    title: "Why We Create JSON Object ?",
    answer_1: "To Style The Website",
    answer_2: "To Make Text Italic",
    answer_3: "To Save Data In Safe File",
    answer_4: "To Get Data Online",
    right_answer: "To Save Data In Safe File",
  },
  {
    title: "How Can We Make Element Text Italic ?",
    answer_1: "Putting It Inside <b> Tag",
    answer_2: "Putting It Inside <em> Tag",
    answer_3: "Customizing It With Font-Weight Property In CSS",
    answer_4: "All Answers Is Right",
    right_answer: "Putting It Inside <em> Tag",
  },
  {
    title: "What Is The Right Hierarchy For Creating Part Of Page ?",
    answer_1: "<h2> Then <p> Then <h1> Then <p> Then <h3> Then <p> Then <img>",
    answer_2: "<h1> Then <p> Then <h3> Then <p> Then <h2> Then <p> Then <img>",
    answer_3:
      "<h2> Then <p> Then </p> Then </h2> Then <h1> Then </h1> Then <img>",
    answer_4: "All Solutions Is Wrong",
    right_answer:
      "<h2> Then <p> Then </p> Then </h2> Then <h1> Then </h1> Then <img>",
  },
  {
    title: "How Can We Style Background Color Yellow On Element ?",
    answer_1: "Putting It Inside <mark> Tag",
    answer_2: "Style The Elements Into Css File",
    answer_3: "Style The Elements Into Js File",
    answer_4: "All Solutions Is Right",
    right_answer: "All Solutions Is Right",
  },
  {
    title: "What Is The Tag That Not Exists in HTML ?",
    answer_1: "<object>",
    answer_2: "<blockquote>",
    answer_3: "<abbr>",
    answer_4: "All Tags Is Exists in HTML",
    right_answer: "<blockquote>",
  },
  {
    title: "How We Specify Document Type Of HTML5 Page ?",
    answer_1: "<DOCTYPE html>",
    answer_2: "<DOCTYPE html5>",
    answer_4: "<!DOCTYPE html3>",
    answer_3: "All Solutions Is Wrong",
    right_answer: "All Solutions Is Wrong",
  },
  {
    title: "What Is The Tag That Exists in HTML ?",
    answer_1: "<article>",
    answer_2: "<section>",
    answer_3: "<footer>",
    answer_4: "All Tags Is Exists in HTML",
    right_answer: "All Tags Is Exists in HTML",
  },
  {
    title: "In HTML Can't We Use This Way To Add Attributes ?",
    answer_1: "<div class='class-name'>",
    answer_2: "<div class=/class-name/>",
    answer_3: '<div class="class-name">',
    answer_4: "All Is Right",
    right_answer: "<div class=/class-name/>",
  },
  {
    title: "In Input Type Radio How To Set A Right Id In HTML5 ?",
    answer_1: 'id="Your Id"',
    answer_2: 'id "Your Id"',
    answer_3: "Add The Id With Js File",
    answer_4: "All Answers Is Right",
    right_answer: 'id="Your Id"',
  },
];
let quesObj = [];
for (let i = 0; i < NumberOfQuestions; i++) {
  quesObj.push([...pastQuesObj][Math.floor(Math.random() * NumberOfQuestions)]);
}
let quesCount = quesObj.length;
count(quesCount);
addQuestionsData(quesObj[currentIndex], quesCount);
clearInterval(countDownInterval);
countDown(60, quesCount);
subBtn.onclick = function () {
  clearInterval(countDownInterval);
  countDown(60, quesCount);
  checkAnswer(quesObj[currentIndex].right_answer);
  currentIndex++;
  title.textContent = "";
  answerArea.textContent = "";
  addQuestionsData(quesObj[currentIndex], quesCount);
  handleBullets();
  showResults(quesCount);
};
playAgain.onclick = function () {
  currentIndex = 0;
  rightAnswers = 0;
  subBtn.style.display = "block";
  title.style.display = "block";
  answerArea.style.display = "block";
  bullets.style.display = "flex";
  playAgain.style.display = "none";
  answerArea.textContent = "";
  spansCont.textContent = "";
  resFirstCont.style.display = "none";
  count(quesCount);
  addQuestionsData(quesObj[currentIndex], quesCount);
};

function count(num) {
  countSpan.textContent = num;
  for (let i = 0; i < num; i++) {
    let span = document.createElement("span");
    if (i == 0) {
      span.className = "on";
    }
    spansCont.appendChild(span);
  }
}

function addQuestionsData(obj, count) {
  if (currentIndex < count) {
    let h2 = document.createElement("h2");
    h2.appendChild(document.createTextNode(`${obj.title}`));
    title.appendChild(h2);
    for (let i = 1; i <= 4; i++) {
      let mainDiv = document.createElement("div");
      mainDiv.className = "answer";
      let input = document.createElement("input");
      input.type = "radio";
      input.name = "questions";
      input.id = `answer_${i}`;
      input.dataset.answer = obj[`answer_${i}`];
      if (i == 1) {
        input.checked = true;
      }
      let label = document.createElement("label");
      label.htmlFor = `answer_${i}`;
      label.appendChild(document.createTextNode(obj[`answer_${i}`]));
      mainDiv.appendChild(input);
      mainDiv.appendChild(label);
      answerArea.appendChild(mainDiv);
    }
  }
}

function checkAnswer(answer) {
  let answers = document.getElementsByName("questions");
  let choosenAnswer;
  for (let i = 0; i < answers.length; i++) {
    if (answers[i].checked) {
      choosenAnswer = answers[i].dataset.answer;
    }
  }
  if (answer === choosenAnswer) {
    rightAnswers++;
  }
}

function handleBullets() {
  let arrBulletsSpans = Array.from(
    document.querySelectorAll(".bullets .spans span")
  );
  arrBulletsSpans.forEach((span, index) => {
    if (currentIndex == index) {
      span.className = "on";
    }
  });
}

function showResults(count) {
  resSecondCont.innerHTML = "";
  let theResults;
  if (currentIndex == count) {
    subBtn.style.display = "none";
    title.style.display = "none";
    answerArea.style.display = "none";
    bullets.style.display = "none";
    if (rightAnswers > count / 2 && rightAnswers < count) {
      theResults = `<span class="good">Good</span> You Answered ${rightAnswers} From ${count}`;
    } else if (rightAnswers == count) {
      theResults = `<span class="perfect">Perfect</span> You Answered ${rightAnswers} From ${count}`;
    } else {
      theResults = `<span class="bad">Bad</span> You Answered ${rightAnswers} From ${count}`;
    }
    resFirstCont.style.display = "block";
    resSecondCont.innerHTML = theResults;
    playAgain.style.display = "block";
  }
}

function countDown(duration, count) {
  if (currentIndex < count) {
    countDownInterval = setInterval(() => {
      let mins = parseInt(duration / 60);
      let secs = parseInt(duration % 60);
      mins = mins < 10 ? `0${mins}` : mins;
      secs = secs < 10 ? `0${secs}` : secs;
      countDownElement.innerHTML = `<span class="mins">${mins}</span> : <span class="secs">${secs}</span>`;
      --duration;
      if (duration < 0) {
        clearInterval(countDownInterval);
        subBtn.click();
      }
    }, 1000);
  }
}
