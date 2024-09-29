var quiz = {
    CSS: [
        {
          key: 1,
          question: "What does CSS stand for?",
          options: ["Computer Style Sheets", "Cascading Style Sheets", "Colourfull Style Sheets", "Sheets"],
          correctAns: "Cascading Style Sheets",
        },
        {
          key: 2,
          question: "Which HTML tag is used to define an internal style sheet?",
          options: ["script", "css", "style", "Sheets"],
          correctAns: "style",
        },
        {
          key: 3,
          question: "How do you insert a comment in a CSS file?",
          options: [";this is comment", "// this is comment", "/* this is comment*/" ,"none of these"],
          correctAns: "/* this is comment*/",
        },
        {
          key: 4,
          question: "Which property is used to change the background color?",
          options: ["bgcolor", "color", "background-color" ,"backColor"],
          correctAns: "background-color",
        },
        {
          key: 5,
          question: "Which CSS property is used to change the text color of an element?",
          options: ["color", "text-color", "fg-color", "bgColor"],
          correctAns: "color",
        },
        {
          key: 6,
          question: "Which CSS property controls the text size?",
          options: ["text-size", "font-size", "font-style", "style"],
          correctAns: "font-size",
        },
      ],
}


let question = document.getElementById('question');
let sawalNum = document.getElementById('sawalNum');
let btn = document.getElementById('optBtn')
let adder = document.getElementsByClassName('adder')

let sc = document.getElementById("show");
let innerBox = document.getElementById("innerBox");

let index = 0;
let counter = 0;
let scoreRight=0;
let scoreWrong=0;
let currentNum;
let totalNum;
let percentAge;
let finalResult;

const firstCal = () => {
    
    let sawalat;
    let jawabat;

    for (io of Object.values(quiz)) {
        sawalat = io[index].question;
        jawabat = io[index].options;
        // console.log(io[index].correctAns)

        question.innerHTML = `<h5 class="texter text-center bg-danger py-3 " >Q${index+1}) ${sawalat}</h5>`; 
        btn.innerHTML = `<button type="button" class="btn btn-warning btn-lg cusm my-3" onclick="clicked(this)">${jawabat[0]}</button> 
        <button type="button" class="btn btn-warning btn-lg cusm my-3" onclick="clicked(this)">${jawabat[1]}</button>
        <button type="button" class="btn btn-warning btn-lg cusm my-3" onclick="clicked(this)">${jawabat[2]}</button>
        <button type="button" class="btn btn-warning btn-lg cusm my-3" onclick="clicked(this)">${jawabat[3]}</button>`;
        
        // console.log(io[index].options[1])
        // console.log(io.length)
    }
    currentNum = index + 1;
    totalNum = io.length;
    sawalNum.innerHTML = `<h4 >Question Number ${currentNum}/${totalNum}</h4>`
    
}


let scoreCard = document.getElementById("scoreCard");

const clicked=(ans)=>{
    console.log('got  ' + ans.innerHTML)
    
    
    if(ans.innerHTML== io[index].correctAns){
        scoreRight++;
    }else{
        scoreWrong++;
    }

    index++;
    
    percentAge=`${(scoreRight*100)/io.length}`
    // console.log(percentAge);
    if(percentAge>=80){
      finalResult="Amazing 🥳"
  }else if(percentAge<80 && percentAge>=50){
      finalResult="FAIR 😊"
  }else if(percentAge<50){
      finalResult="Try Again 💔"
  }

    scoreCard.innerHTML=`<h4 class="text-light bg-dark">Total Question : ${io.length}</h4>
    <h4 class="text-success bg-dark">Correct Selected : ${scoreRight}</h4>
    <h4 class="text-info  bg-dark">Your Score : ${Math.round(percentAge)}%</h5>
    <h4 class="text-warning bg-dark">Remarks : ${finalResult}</h4>`;
    
    if(index<io.length){
        firstCal()
        
    }else{  
        innerBox.style.display = "none";
        sc.style.display = "revert";
    }
}


const playAgain=()=>{
    index=0;
    scoreRight=0;
    firstCal()
    sc.style.display = "none";
    innerBox.style.display="revert";
}
const goHome=()=>{
    location.href ="../index.html";
}
// console.log(quiz.html.length)

firstCal()


