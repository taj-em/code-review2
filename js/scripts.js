function calculate(answer1, answer2, answer3, answer4, answer5) {
  let runningCount = 0;
  if (answer1 == 1) {
    runningCount -= 1
  } else if (answer1 == 2) {
    runningCount = runningCount
  } else if (answer1 == 3) {
    runningCount += 1
  }
  
  if (answer2 == 1) {
    runningCount -= 1
  } else if (answer2 == 2) {
    runningCount = runningCount
  } else if (answer2 == 3) {
    runningCount += 1
  }
  
  if (answer3 == 1) {
    runningCount -= 1
  } else if (answer3 == 2) {
    runningCount = runningCount
  } else if (answer3 == 3) {
    runningCount += 1
  }
  
  if (answer4 == 1) {
    runningCount -= 1
  } else if (answer4 == 2) {
    runningCount = runningCount
  } else if (answer4 == 3) {
    runningCount += 1
  }
  
  if (answer5 == 1) {
    runningCount -= 1
  } else if (answer5 == 2) {
    runningCount = runningCount
  } else if (answer5 == 3) {
    runningCount += 1
  }
  
  let img = document.getElementById("img");
  let yourLanguage;
  let languageDescription;
  if (runningCount >= 2) {
    yourLanguage = "C#"
    img.src = "img/c.png"
    languageDescription = "C# is a general-purpose high-level programming language supporting multiple paradigms. C# encompasses static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines."
  } else if (runningCount <= -2) {
    yourLanguage = "Swift"
    img.src = "img/swift.jpg"
    languageDescription = "Swift is a high-level general-purpose, multi-paradigm, compiled programming language developed by Apple Inc. and the open-source community. Swift compiles to machine code, as it is an LLVM-based compiler."
  } else {
    yourLanguage = "JavaScript"
    img.src = "img/javascript.png"
    languageDescription = "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2023, 98.7% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries."
  }
  display(languageDescription, yourLanguage);
  }






function gatherInput(event) {
  event.preventDefault();
const answer1 = parseInt(document.querySelector("input[name='question1']:checked").value);
const answer2 = parseInt(document.querySelector("input[name='question2']:checked").value);
const answer3 = parseInt(document.querySelector("input[name='question3']:checked").value);
const answer4 = parseInt(document.querySelector("input[name='question4']:checked").value);
const answer5 = parseInt(document.querySelector("input[name='question5']:checked").value);
calculate(answer1, answer2, answer3, answer4, answer5);
}

function display(languageDescription, yourLanguage) {
document.getElementById("languageDescription").innerText = languageDescription;
document.getElementById("yourLanguage").innerText = yourLanguage;
document.getElementById("display").classList.remove("hide-display");
}

function reset(event) {
  location.reload();
}

function darkMode(event) {
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector("body").style.color = "white";
  document.getElementById("img").style.borderColor = "white";
  document.getElementById("q1-title").style.textDecorationColor = "#8948E9";
  document.getElementById("q2-title").style.textDecorationColor = "#8948E9";
  document.getElementById("q3-title").style.textDecorationColor = "#8948E9";
  document.getElementById("q4-title").style.textDecorationColor = "#8948E9";
  document.getElementById("q5-title").style.textDecorationColor = "#8948E9";
  document.getElementById("sub-title1").style.textDecorationColor = "#8948E9";
  document.getElementById("sub-title2").style.textDecorationColor = "#8948E9";
  document.getElementById("reset-btn").style.backgroundColor = "#8948E9";
  document.getElementById("darkMode-btn").style.display = "none";
  document.getElementById("lightMode-btn").style.display = "initial"
}

function lightMode(event) {
  document.querySelector("body").style.backgroundColor = "white";
  document.querySelector("body").style.color = "black";
  document.getElementById("img").style.borderColor = "black";
  document.getElementById("q1-title").style.textDecorationColor = "#852C15";
  document.getElementById("q2-title").style.textDecorationColor = "#852C15";
  document.getElementById("q3-title").style.textDecorationColor = "#852C15";
  document.getElementById("q4-title").style.textDecorationColor = "#852C15";
  document.getElementById("q5-title").style.textDecorationColor = "#852C15";
  document.getElementById("sub-title1").style.textDecorationColor = "#852C15";
  document.getElementById("sub-title2").style.textDecorationColor = "#852C15";
  document.getElementById("reset-btn").style.backgroundColor = "#852C15";
  document.getElementById("lightMode-btn").style.display = "none";
  document.getElementById("darkMode-btn").style.display = "initial"
}

window.addEventListener("load", function () {
  let form = document.querySelector("form");
  document.getElementById("reset-btn").addEventListener("click", reset)
  document.getElementById("darkMode-btn").addEventListener("click", darkMode)
  document.getElementById("lightMode-btn").addEventListener("click", lightMode)
  form.addEventListener("submit", gatherInput)
});