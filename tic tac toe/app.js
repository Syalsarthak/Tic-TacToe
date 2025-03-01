let boxes=document.querySelectorAll(".box");
let rbtn=document.querySelector("#reset");
let ngbtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");


let turnO=true;
const win=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];
const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO)
        {
            box.innerText="O";//playerO
            box.style.color = "#1E90FF";
            turnO=false;
        }
        else{
            box.innerText="X";//playerx
            box.style.color="#FF4500";
            turnO=true;


        }
        box.disabled=true;
        checkWinner();
    });
});
const disableBoxes=()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner =(winner)=>{
    msg.innerText=`congratulations,winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner=()=>{
    for(let pattern of win)
    {
        let p1=boxes[pattern[0]].innerText;
        let p2=boxes[pattern[1]].innerText;
        let p3=boxes[pattern[2]].innerText;
        if(p1!="" && p2!="" && p3!="")
        {
            if(p1===p2 && p2===p3)
            {
                console.log("winner",p1);
                showWinner(p1);
            }
        }
    }
}
ngbtn.addEventListener("click",resetGame);
rbtn.addEventListener("click",resetGame);