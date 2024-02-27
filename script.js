let userscore=0;
let compscore=0;
const uScorePara=document.querySelector("#user-score");
const cScorePara=document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let uChoice=document.querySelector("#userChoice");
let cChoice=document.querySelector("#compChoice");


choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});

const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const idx=Math.floor(Math.random()*3);
    return options[idx];
}

const playGame=(userChoice)=>{
    console.log("user choice:",userChoice);
    //Generate comp choice
    const compChoice=genCompChoice();
    console.log("computer choice:",compChoice);
    choiceDisplay(userChoice,compChoice);

    if(userChoice===compChoice){
        draw();
    }else{
        let Uwin=true;
        if(userChoice==="rock"){
            Uwin= (compChoice==="paper")? false : true;
            winner(Uwin);
        }else if(userChoice==="paper"){
            Uwin= (compChoice==="scissor")? false:true;
            winner(Uwin);
        }else{
            Uwin= (compChoice==="rock")? false:true;
            winner(Uwin);
        }
    }

}

const choiceDisplay=(userChoice,compChoice)=>{
    uChoice.innerText=userChoice;
    cChoice.innerText=compChoice;
}


const draw=()=>{
    console.log("Match Draw!!!");
    msg.innerText="Match Draw!!  Play Again";
    msg.style.backgroundColor="rgb(26, 10, 81)";
    //choices color
    uChoice.style.color="red";
    cChoice.style.color="red";
}

const winner=(Uwin)=>{
    if(Uwin===true){
        //score board
        uScorePara.innerText=++userscore;
        //choices color
        uChoice.style.color="green";
        cChoice.style.color="red";

        console.log("Congrats! You Won");
        //web page display
        msg.innerText="Congratulations!! You Won";
        msg.style.backgroundColor="green";
    }else{
        //score board
        cScorePara.innerText=++compscore;
        //choices color
        uChoice.style.color="red";
        cChoice.style.color="green";

        console.log(" You Loose");
        //web page display
        msg.innerText="You Loose!!  Try Again";
        msg.style.backgroundColor="red";
    }
}
