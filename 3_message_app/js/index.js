var questions = ["What is your name?", "How's your day?", "What can I help you with today?", "OK. Give me a second to look into that."];
var answers = [];
var intCurrentQuestion = 0;

$(function(){

    askQuestion(intCurrentQuestion);

    $("#conversationForm").submit(function(submitEvent){
        submitEvent.preventDefault();

        var answer = $("#answer").val();
        sendAnswer(answer)
    });

});

function askQuestion(questionNumber)
{
    console.log("Inside askQuestion:", questionNumber);
    // Declare a variable called "question" and use the global questions array and the local questionNumber to assign the value
    
    // Write an if(question) statement
        
        // Select #conversation and append the following string:
        // '<li class="list-group-item ai">' + questions[questionNumber] + '</li>'

        // Re-assign the global variable intCurrentQuestion to equal the local questionNumber variable
}

function sendAnswer(answer)
{
    console.log("Inside sendAnswer", answer);
    // Write an if(answer) statement
        
        // Select #answer and set the value to ''
        
        // Select #conversation and append the following string:
        // '<li class="list-group-item human">' + answer + '</li>'

        //  use answers.push() to add the local variable answer to the answers array

        //  call askQuestion() and pass: intCurrentQuestion + 1
}

