var quiz = {
    javaScript: [
        {
            id: 1,
            question: "Inside which HTML element do we put the JavaScript?",
            options: ["script", "javascript", "style", "none of these"],
            correctAns: "script",
        },
        {
            id: 2,
            question: "Where is the correct place to insert a JavaScript?",
            options: ["head section", "body section", "both", "none of these"],
            correctAns: "both",
        },
        {
            id: 3,
            question: "What is the correct syntax for referring to an external script called ?",
            options: ["script name=", "scripy href=", "scripy src= ", "none of these"],
            correctAns: "scripy src= ",
        },
        {
            id: 4,
            question: "The external JavaScript file must contain the <script> tag",
            options: ["true", "false", "none", "dont know"],
            correctAns: "false",
        },
        {
            id: 5,
            question: "How do you create a function in JavaScript?",
            options: ["function myFuntion()", "function: myFuntion()", "function = myfunction()"],
            correctAns: "function myFuntion()",
        },
    ]
}


let question = document.getElementById('question');
let sawalNum = document.getElementById('sawalNum');
let btn = document.getElementById('optBtn')
let adder = document.getElementsByClassName('adder')

let sc = document.getElementById("show");
let innerBox = document.getElementById("innerBox");

let index = 0;
let counter = 0;
let scoreRight = 0;
let scoreWrong = 0;
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
        console.log(sawalat)

        question.innerHTML = `<h5 class="texter text-center bg-danger py-3 " >Q${index + 1}) ${sawalat}</h5>`;
        btn.innerHTML = `<button type="button" class="btn btn-warning btn-lg cusm my-3" onclick="clicked(this)">${jawabat[0]}</button> 
        <button type="button" class="btn btn-warning btn-lg cusm my-3" onclick="clicked(this)">${jawabat[1]}</button>
        <button type="button" class="btn btn-warning btn-lg cusm my-3" onclick="clicked(this)">${jawabat[2]}</button>
        <button type="button" class="btn btn-warning btn-lg cusm my-3" onclick="clicked(this)">${jawabat[3]}</button>`;

        console.log(jawabat[1])
        // console.log(io[index].options[1])
        // console.log(io.length)
    }
    currentNum = index + 1;
    totalNum = io.length;
    sawalNum.innerHTML = `<h4 >Question Number ${currentNum}/${totalNum}</h4>`

}


let scoreCard = document.getElementById("scoreCard");

const clicked = (ans) => {
    console.log('got  ' + ans.innerHTML)


    if (ans.innerHTML == io[index].correctAns) {
        scoreRight++;
    } else {
        scoreWrong++;
    }

    index++;

    percentAge = `${(scoreRight * 100) / io.length}`
    // console.log(percentAge);
    if(percentAge>=80){
        finalResult="Amazing 🥳"
    }else if(percentAge<80 && percentAge>=50){
        finalResult="FAIR 😊"
    }else if(percentAge<50){
        finalResult="Try Again 💔"
    }

    scoreCard.innerHTML = `<h4 class="text-light bg-dark">Total Question : ${io.length}</h4>
    <h4 class="text-success bg-dark">Correct Selected : ${scoreRight}</h4>
    <h4 class="text-info bg-dark">Your Score : ${Math.round(percentAge)}%</h5>
    <h4 class="text-warning bg-dark">Remarks : ${finalResult}</h4>`;

    if (index < io.length) {
        firstCal()

    } else {
        // index=0;
        // firstCal()  
        innerBox.style.display = "none";
        sc.style.display = "revert";
    }
}


const playAgain = () => {
    index = 0;
    scoreRight = 0;
    firstCal()
    sc.style.display = "none";
    innerBox.style.display = "revert";
}
const goHome = () => {
    location.href = "../index.html";
}
// console.log(quiz.html.length)

firstCal()


