window.onload = function(){

  var quiz_section = document.getElementById("quiz_section");
  var quiz_start = document.getElementById("quiz_start");
  var quiz_results = document.getElementById("quiz_results");
  var qresults = document.getElementById("results");
  var radios = document.getElementsByName("answer");
  var boxes = document.getElementsByClassName("box");
  var question = document.getElementById("question");
  var l1 = document.getElementById("l1");
  var l2 = document.getElementById("l2");
  var l3 = document.getElementById("l3");
  var l4 = document.getElementById("l4");
  var backBtn = document.getElementById("back");
  var nextBtn = document.getElementById("next");


  var page = 0;
  var responses = new Array(5);
  var results = new Array(5);

  var answers = {
    1 : "a1",
    2 : "a4",
    3 : "a2",
    4 : "a1",
    5 : "a4"
  };
  var questions = {
    1 : "Who is the Chairman of the FCC?",
    2 : "Which country has repealed its net neutrality laws, and is being sold internet in packages like cable?",
    3 : "Which US law currently protects Net Neutrality?",
    4 : "Which New Jersey Legislator supports Net Neutrality?",
    5 : "What can I do to preserve freedom on the internet?"
  };

  var option = {
    1 : "Ajit Pai",
    2 : "Donald Trump",
    3 : "John Oliver",
    4 : "Michael O'Riley",

    5 : "Spain",
    6 : "Costa Rica",
    7 : "Paraguay",
    8 : "Portugal",

    9 : "Net Neutrality Act",
    10 : "Internet Freedom Preservation Act",
    11 : "Open Internet Act",
    12 : "Freedom of Information Act",

    13 : "Senator Corey Booker",
    14 : "Representative Leonard Lance",
    15 : "Senator Bob Menendez",
    16 : "Representative Albio Sires",

    17 : "Call legislators from your state",
    18 : "Donate to organizations fighting for Net Neutrality",
    19 : "Comment on the FCC Website",
    20 : "All the Above"
  };


  document.getElementById("begin").addEventListener("click", function(){
    quiz_start.style.display = "none";
    quiz_section.style.display = "block";
    question.innerHTML = questions[1];
    l1.innerHTML = option[1];
    l2.innerHTML = option[2];
    l3.innerHTML = option[3];
    l4.innerHTML = option[4];
  });
  backBtn.addEventListener("click", back);
  nextBtn.addEventListener("click", next);
  document.getElementById("sbmt").addEventListener("click", submit);
  document.getElementById("box1").onclick = function(){select(0);};
  document.getElementById("box2").onclick = function(){select(1);};
  document.getElementById("box3").onclick = function(){select(2);};
  document.getElementById("box4").onclick = function(){select(3);};

  function select(num){
    for(i=0;i<boxes.length;i++){
      boxes[i].style.background = "#00dbdb";
    }
    boxes[num].style.background = "#00ea6e";
    radios[num].checked = true;
  }

  function checkedRadio(){
    for(i=0;i<radios.length;i++){
      if(radios[i].checked) return radios[i].id;
    }
    return '';
  }

  function next(){
    responses[page] = checkedRadio();
    if(page < 4) page++;
    nextPage();
  }

  function back(){
    if(page > 0) page--;
    lastPage();
  }

  function nextPage(){
    for(i=0;i<boxes.length;i++){
      boxes[i].style.background = "#00dbdb";
    }

    var checker = false;
    for(i=0;i<radios.length;i++){
      if(radios[i] == document.getElementById(responses[page])){
        document.getElementById(responses[page]).checked = true;
        document.getElementById(document.getElementById(responses[page]).value).style.background = "#00ea6e";
        checker = true;
      }
    }
    if(checker === false){
      for(i=0;i<radios.length;i++){
        radios[i].checked = false;
      }
    }

    switch(page){
      case 1:
        backBtn.style.visibility = "visible";
        question.innerHTML = questions[2];
        l1.innerHTML = option[5];
        l2.innerHTML = option[6];
        l3.innerHTML = option[7];
        l4.innerHTML = option[8];
        break;
      case 2:
        question.innerHTML = questions[3];
        l1.innerHTML = option[9];
        l2.innerHTML = option[10];
        l3.innerHTML = option[11];
        l4.innerHTML = option[12];
        break;
      case 3:
        question.innerHTML = questions[4];
        l1.innerHTML = option[13];
        l2.innerHTML = option[14];
        l3.innerHTML = option[15];
        l4.innerHTML = option[16];
        break;
      case 4:
        nextBtn.style.display = "none";
        document.getElementById("sbmt").style.display = "inline";
        question.innerHTML = questions[5];
        l1.classList.add("labelsize");
        l2.classList.add("labelsize");
        l3.classList.add("labelsize");
        l4.classList.add("labelsize");
        l1.innerHTML = option[17];
        l2.innerHTML = option[18];
        l3.innerHTML = option[19];
        l4.innerHTML = option[20];
    }
  }

  function lastPage(){
    for(i=0;i<boxes.length;i++){
      boxes[i].style.background = "#00dbdb";
    }

    var checker = false;
    for(i=0;i<radios.length;i++){
      if(radios[i] == document.getElementById(responses[page])){
        document.getElementById(responses[page]).checked = true;
        document.getElementById(document.getElementById(responses[page]).value).style.background = "#00ea6e";
        checker = true;
      }
    }
    if(checker === false){
      for(i=0;i<radios.length;i++){
        radios[i].checked = false;
      }
    }

    switch(page){
      case 0:
        backBtn.style.visibility = "hidden";
        question.innerHTML = questions[1];
        l1.innerHTML = option[1];
        l2.innerHTML = option[2];
        l3.innerHTML = option[3];
        l4.innerHTML = option[4];
        break;
      case 1:
        question.innerHTML = questions[2];
        l1.innerHTML = option[5];
        l2.innerHTML = option[6];
        l3.innerHTML = option[7];
        l4.innerHTML = option[8];
        break;
      case 2:
        question.innerHTML = questions[3];
        l1.innerHTML = option[9];
        l2.innerHTML = option[10];
        l3.innerHTML = option[11];
        l4.innerHTML = option[12];
        break;
      case 3:
        nextBtn.style.display = "inline";
        document.getElementById("sbmt").style.display = "none";
        question.innerHTML = questions[4];
        l1.classList.remove("labelsize");
        l2.classList.remove("labelsize");
        l3.classList.remove("labelsize");
        l4.classList.remove("labelsize");
        l1.innerHTML = option[13];
        l2.innerHTML = option[14];
        l3.innerHTML = option[15];
        l4.innerHTML = option[16];
    }
  }

  function submit(){
    responses[page] = checkedRadio();

    if(responses[0] == answers[1]) results[0] = true;
    else results[0] = false;
    if(responses[1] == answers[2]) results[1] = true;
    else results[1] = false;
    if(responses[2] == answers[3]) results[2] = true;
    else results[2] = false;
    if(responses[3] == answers[4]) results[3] = true;
    else results[3] = false;
    if(responses[4] == answers[5]) results[4] = true;
    else results[4] = false;

    quiz_section.style.display = "none";
    quiz_results.style.display = "block";

    var score = 0;
    for(i=0;i<results.length;i++){
      if(results[i])  score += 1;
    }

    var p1 = document.createTextNode("You Got ");
    var p2 = document.createTextNode(score);
    var p3 = document.createTextNode("/5 Correct");
    var qrtitle = document.createElement("h1");
    qrtitle.appendChild(p1);
    qrtitle.appendChild(p2);
    qrtitle.appendChild(p3);
    qresults.appendChild(qrtitle);

    var start = 1;
    for(i=0;i<5;i++){
      var qheader = document.createElement('h2');
      qheader.appendChild(document.createTextNode(questions[i+1]));
      if(!results[i]){
        qheader.setAttribute('class', 'red');
      }
      qheader.classList.add("questionsize");
      qresults.appendChild(qheader);
      var ul = document.createElement("ul");
      for(j=start;j<start+4;j++){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(option[j]));
        if(j == 1 || j == 8 || j == 10 || j == 13 || j == 20){
          li.setAttribute('class', 'green');
        }
        ul.appendChild(li);
      }
      start += 4;
      qresults.appendChild(ul);
    }
  }


};
