player1name = localStorage.getItem("player1");
player2name = localStorage.getItem("player2");

player1score = 0;
player2score = 0;

document.getElementById("player1_name").innerHTML=player1name + " : ";
document.getElementById("player2_name").innerHTML=player2name + " : ";

document.getElementById("player1_score").innerHTML = player1score;
document.getElementById("player2_score").innerHTML = player2score;

document.getElementById("player_question").innerHTML = "Question Turn : " + player1name;
document.getElementById("player_answer").innerHTML = "Answer Turn : " + player2name;

function send(){
    getword = document.getElementById("word").value;
    word = getword.toLowerCase();
    console.log("word in lowercase is" + word);
     
    charat1 = word.charAt(1);
    console.log(charat1);

    lengthdivide = Math.floor(word.length/2);
    charat2 = word.charAt(lengthdivide);
    console.log(charat2);

    lengthminus = word.length - 1;
    charat3 = word.charAt(lengthminus);
    console.log(charat3); 

    word1 = word.replace(charat1, "_");
    word2 = word1.replace(charat2, "_");
    word3 = word2.replace(charat3, "_");
    console.log(word3);

    question_word="<h4 id='word_display'> Q. "+ word3 +" </h4>";
    inputbox="<br> Answer : <input type='text' id='inputbox'>";

    checkbutton="<br> <br> <button class='btn btn-info' onclick='check()'> Check </button>";
    row=question_word + inputbox + checkbutton;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}
question_turn="player1";
answer_turn="player2";

function check(){
 getanswer=document.getElementById("inputbox").value;
 answer=getanswer.toLowerCase();
 if(answer==word){
     if(answer_turn=="player1"){
         player1score=player1score+1;
         document.getElementById("player1_score").innerHTML=player1score;
     }
     else{
        player2score=player2score+1;
        document.getElementById("player2_score").innerHTML=player2score; 
     }
 }

 if(question_turn=="player1"){
question_turn="player2";
document.getElementById("player_question").innerHTML="Question Turn - "+player2name;
 }
 else{
    question_turn="player1";
document.getElementById("player_question").innerHTML="Question Turn - "+player1name; 
 }

 if(answer_turn=="player1"){
   answer_turn="player2";
    document.getElementById("player_answer").innerHTML="Answer Turn - "+player2name;
     }
     else{
        answer_turn="player1";
    document.getElementById("player_answer").innerHTML="Answer Turn - "+player1name; 
     }

     document.getElementById("output").innerHTML="";
}