var startButton = document.getElementById("start")

var btn = document.createElement("button")
var btnTxt = document.createTextNode("Start Quiz")

btn.appendChild(btnTxt)
btn.setAttribute("onClick","startingQuiz()")

startButton.appendChild(btn)


var questions = [
    {
        Q1:"Q1: What is your name?",
        answers:"Usman",
        options:[
            "Usman",
            "Sami",
            "Khalid"
        ]
        
    },
    
    {
        Q1:"What is your name?",
        answers:"Usman",
        options:[
            "Usman",
            "Sami",
            "Khalid"
        ]
        
    },
    
    {
        Q1:"What is your name?",
        answers:"Usman",
        options:[
            "Usman",
            "Sami",
            "Khalid"
        ]
        
    },
    {
        Q1:"What is your name?",
        answers:"Usman",
        options:[
            "Usman",
            "Sami",
            "Khalid"
        ]
        
    }
]


function startingQuiz(){
    startButton.remove();

    
}

// var question1 = document.getElementById("quest-1")
// var opt1 =  document.getElementById("q1_a")


// for (let i = 0; i < questions.length; i++) {
//     // let question1 = document.getElementById("quest-1")
//     question1.innerHTML = questions[i].Q1   
//     for (let j = 0; j < questions[0].length; j++) {
//         // const element = questions[0][j];
//         // let opt1 =  document.getElementById("q1_a")
//         opt1.innerHTML = questions[i].options[j]
//         console.log(opt1.innerHTML);
//     } 
// }

let question1 = document.getElementById("quest-1")
question1.innerHTML = questions[0].Q1

let opt1 =  document.getElementById("q1_a")
opt1.innerHTML = questions[0].options[0]

let opt2 =  document.getElementById("q1_b")
opt2.innerHTML = questions[0].options[1]

let opt3 =  document.getElementById("q1_c")
opt3.innerHTML = questions[0].options[2]


function getAnswer(e){
    // console.log(e.innerHTML)

    if(e.innerHTML === questions[0].answers){
        alert("You won")
    }else{
        alert("Try again")
    }
}