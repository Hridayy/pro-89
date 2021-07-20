player1_name= localStorage.getItem("player1_name");
player2_name= localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question Turn -"+player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn -"+player2_name;

function send()
{number_given=document.getElementById("number").value;


first=number.charAt(1);
console.log(first);

middle=Math.floor(number.length/2);

second=number.charAt(middle);
console.log(second)

last=number.length-1;
third=number.charAt(last)
console.log(third)
}
question_turn="player1";
answer_turn="player2";

function check(){
get_answer=document.getElementById("input_check").value;

if(answer==number){
 if(answer_turn="player1"){   
player1_score=player1_score+1
document.getElementById("player1_score").innerHTML=player1_score

 }
 else{player2_score=player2_score+1
    document.getElementById("player2_score").innerHTML=player2_score
 }    
}
if(question_turn=="player1"){
question_turn="player2"
document.getElementById("player_question").innerHTML="Question Turn-"+player2_name;
}
else{question_turn="player1"
document.getElementById("player_question").innerHTML="Question Turn-"+player1_name;
}


if(answer_turn=="player1"){
    answer_turn="player2"
    document.getElementById("player_answer").innerHTML="answer Turn-"+player2_name;
    }
    else{answer_turn="player1"
    document.getElementById("player_answer").innerHTML="answer Turn-"+player1_name;
    }document.getElementById("output").innerHTML=""
}

