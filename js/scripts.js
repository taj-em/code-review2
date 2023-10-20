function yourLanguage(event) {
  event.preventDefault();
  const answer1 = parseInt(document.querySelector("input[name='question1']:checked").value);
  const answer2 = parseInt(document.querySelector("input[name='question2']:checked").value);
  const answer3 = parseInt(document.querySelector("input[name='question3']:checked").value);
  const answer4 = parseInt(document.querySelector("input[name='question4']:checked").value);
  const answer5 = parseInt(document.querySelector("input[name='question5']:checked").value);


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
  document.getElementById("languageDescription").innerText = languageDescription;
  document.getElementById("yourLanguage").innerText = yourLanguage;
  document.getElementById("display").classList.remove("hide-display");
}

window.addEventListener("load", function () {
  let form = document.querySelector("form");
  form.addEventListener("submit", yourLanguage)
});