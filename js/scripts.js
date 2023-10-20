function yourLanguage(event) {
  event.preventDefault();
  const answer1 = parseInt(document.querySelector("input[name='question1']:checked").value);
  const answer2 = parseInt(document.querySelector("input[name='question1']:checked").value);
  const answer3 = parseInt(document.querySelector("input[name='question1']:checked").value);
  const answer4 = parseInt(document.querySelector("input[name='question1']:checked").value);
  const answer5 = parseInt(document.querySelector("input[name='question1']:checked").value);

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
    
    let yourLanguage;
    if (runningCount >= 2) {
      yourLanguage = "C#"
    } else if (runningCount <= -2) {
      yourLanguage = "Swift"
    } else {
      yourLanguage = "Javascript"
    }




  // if (answer1 == 1 && answer2 == 1 && answer3 == 1) {
  //   yourLanguage = "Swift - Apple"
  // } else if (answer1 == 2 && answer2 == 2 && answer3 == 2) {
  //   yourLanguage = "Javascript"
  // } else if (answer1 == 3 && answer2 == 3 && answer3 == 3) {
  //   yourLanguage = "C#"
  // }

  document.getElementById("yourLanguage").innerText = yourLanguage;
  document.getElementById("display").removeAttribute("class");
}

window.addEventListener("load", function () {
  let form = document.querySelector("form");
  form.addEventListener("submit", yourLanguage)
});