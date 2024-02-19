var correct = 0;
var wrong = 0;
var empty = 3;
var finalScore = document.getElementById("result");
function question1() {
  document.getElementById("q1").style.display = "none";
  document.getElementById("q2").style.display = "block";
  var ele = document.getElementsByName("q1");
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked)
      if (ele[i].value == 32) {
        correct++;
        document.getElementById("q1r").style.backgroundColor =
          "rgb(69, 177, 73)";
      } else {
        wrong++;
        document.getElementById("q1r").style.backgroundColor =
          "rgb(134, 28, 28)";
      }
  }
}
function question2() {
  document.getElementById("q2").style.display = "none";
  document.getElementById("q3").style.display = "block";
  var ele = document.getElementsByName("q2");
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked)
      if (ele[i].value == 52) {
        correct++;
        document.getElementById("q2r").style.backgroundColor =
          "rgb(69, 177, 73)";
      } else {
        wrong++;
        document.getElementById("q2r").style.backgroundColor =
          "rgb(134, 28, 28)";
      }
  }
}
function question3() {
  document.getElementById("q3").style.display = "none";
  document.getElementById("q4").style.display = "block";
  var ele = document.getElementsByName("q3");
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked)
      if (ele[i].value == 84) {
        correct++;
        document.getElementById("q3r").style.backgroundColor =
          "rgb(69, 177, 73)";
      } else {
        wrong++;
        document.getElementById("q3r").style.backgroundColor =
          "rgb(134, 28, 28)";
      }
  }
}
function question4() {
  document.getElementById("q4").style.display = "none";
  document.getElementById("q5").style.display = "block";
  var ele = document.getElementsByName("q4");
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked)
      if (ele[i].value == 196) {
        correct++;
        document.getElementById("q4r").style.backgroundColor =
          "rgb(69, 177, 73)";
      } else {
        wrong++;
        document.getElementById("q4r").style.backgroundColor =
          "rgb(134, 28, 28)";
      }
  }
}
function question5() {
  document.getElementById("q5").style.display = "none";
  document.getElementById("q6").style.display = "block";
  var ele = document.getElementsByName("q5");
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked)
      if (ele[i].value == 91) {
        correct++;
        document.getElementById("q5r").style.backgroundColor =
          "rgb(69, 177, 73)";
      } else {
        wrong++;
        document.getElementById("q5r").style.backgroundColor =
          "rgb(134, 28, 28)";
      }
  }
}
function question6() {
  document.getElementById("q6").style.display = "none";
  document.getElementById("q7").style.display = "block";
  var ele = document.getElementsByName("q6");
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked)
      if (ele[i].value == 720) {
        correct++;
        document.getElementById("q6r").style.backgroundColor =
          "rgb(69, 177, 73)";
      } else {
        wrong++;
        document.getElementById("q6r").style.backgroundColor =
          "rgb(134, 28, 28)";
      }
  }
}
function question7() {
  document.getElementById("q7").style.display = "none";
  document.getElementById("q8").style.display = "block";
  var ele = document.getElementsByName("q7");
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked)
      if (ele[i].value == 2401) {
        correct++;
        document.getElementById("q7r").style.backgroundColor =
          "rgb(69, 177, 73)";
      } else {
        wrong++;
        document.getElementById("q7r").style.backgroundColor =
          "rgb(134, 28, 28)";
      }
  }
}
function question8() {
  document.getElementById("q8").style.display = "none";
  finalScore.style.display = "block";
  var ele = document.getElementsByName("q8");
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked)
      if (ele[i].value == 3) {
        correct++;
        document.getElementById("q8r").style.backgroundColor =
          "rgb(69, 177, 73)";
      } else {
        wrong++;
        document.getElementById("q8r").style.backgroundColor =
          "rgb(134, 28, 28)";
      }
  }
  empty = 8 - (correct + wrong);
  clearInterval(interval);
  clearInterval(endInterval);
  finalScore.innerHTML =
    "تعداد پاسخ‌های درست " +
    correct +
    "<br><br>تعداد پاسخ‌های غلط " +
    wrong +
    "<br><br>تعداد پاسخ‌های سفید " +
    empty;
}
var text1 = document.getElementById("demo");
var text2 = document.getElementById("demo2");
text1.innerHTML = 90;
var interval = setInterval(manfi, 1000);
var endInterval = setInterval(stop, 1000);
var warningInterval = setInterval(warning, 1000);
function manfi() {
  text1.innerHTML = text1.innerHTML - 1;
}
function warning() {
  if (text1.innerHTML <= 10) {
    setInterval(cheshmak, 1000);
  }
}
function stop() {
  if (text1.innerHTML <= 0) {
    clearInterval(interval);
    clearInterval(endInterval);
    question8();
    document.getElementById("q1").style.display = "none";
    document.getElementById("q2").style.display = "none";
    document.getElementById("q3").style.display = "none";
    document.getElementById("q4").style.display = "none";
    document.getElementById("q5").style.display = "none";
    document.getElementById("q6").style.display = "none";
    document.getElementById("q7").style.display = "none";
    alert("پایان زمان");
    text2.innerHTML = "وقت شما به پایان رسید";
  } else {
    text2.innerHTML = "به زمان باقی مانده خود توجه داشته باشید";
  }
}
function cheshmak() {
  text1.style.color = "white";
  setTimeout(chechmak2, 500);
}
function chechmak2() {
  text1.style.color = "red";
}
