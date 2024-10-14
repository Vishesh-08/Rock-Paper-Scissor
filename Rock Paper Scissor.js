let user_score=0;
let computer_score=0;

let choices=document.querySelectorAll('.choice');
let msg=document.querySelector("#msg");

let userscore=document.querySelector("#user");
let computerscore=document.querySelector("#computer");

function gencompchoice(){
    let options=["rock","paper","scissors"];
    let ind=Math.floor(Math.random()*3);
    return options[ind];
}

function game(user_choice){
    let comp_choice=gencompchoice();
    console.log("user:",user_choice);
    console.log("computer:",comp_choice);

    if(user_choice===comp_choice){
        draw();
    }
    else{
        let userWin=true;
        if(user_choice=="rock"){
            userWin=comp_choice=="scissors"?true:false;
        }
        else if(user_choice=="paper"){
            userWin=comp_choice=="rock"?true:false;
        }
        else{
            userWin=comp_choice=="paper"?true:false;
        }
        showWinner(userWin);
    }
}

function draw(){
    msg.innerText="Draw";
    msg.style.backgroundColor="black";
    console.log("draw");
}

function showWinner(userWin){
    if(userWin){
        msg.innerText="You Win";
        msg.style.backgroundColor="green";
        user_score++;
        userscore.innerText=`${user_score}`;    
        console.log("You win");    
    }
    else{
        msg.innerText="Computer Win";
        msg.style.backgroundColor="red";
        computer_score++;
        computerscore.innerText=`${computer_score}`;    
        console.log("Computer win");
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let user_choice=choice.getAttribute("id");
        game(user_choice);
    })
})