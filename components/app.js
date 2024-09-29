var quiz = {
    html: [
        {
            key: 1,
            question: "Html Stands For ____________________________",
            options: [
                "Hyper Language",
                "Html",
                "Case Cading Style Sheet",
                "Hypertext Markup language",
            ],
            correctAns: "Hypertext Markup language",
        },
        {
            key: 2,
            question: "Css Stands For _______________________",
            options: [
                "Casecading Style Sheet",
                "Java",
                "Ram",
                "Hypertext markup language",
            ],
            correctAns: "Casecading Style Sheet",
        },
        {
            key: 3,
            question: "Js Stands For _______________________",
            options: ["Java Style", "Java Script", "Script", "Script Src"],
            correctAns: "Java Script",
        },
        {
            key: 4,
            question: "Dom Stands For _______________________",
            options: ["Document Object Model", "html", "Css", "Java"],
            correctAns: "Document Object Model",
        },
        {
            key: 5,
            question: "Ram Stands For _______________________",
            options: ["Read Only Memory", "Dom", "Random Acccess Memory", "Npne"],
            correctAns: "Random Acccess Memory",
        },
        {
            key: 6,
            question: "Rom Stands For _______________________",
            options: [
                "Hyper Text Markup Language",
                "html",
                "HTml",
                "Read Only Memory",
            ],
            correctAns:"Read Only Memory",
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
    // let percentAge = Math.round(percentAge);
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
                        <h4 class="text-info bg-dark">Your Score : ${Math.round(percentAge)}%</h5>
                        <h4 class="text-warning bg-dark">Remarks : ${finalResult}</h4>`;
    
    if(index<io.length){
        firstCal()
        
    }else{
        // index=0;
        // firstCal()  
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


