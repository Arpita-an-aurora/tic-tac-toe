let turnO=true; //playerO, playerX
let boxes=document.querySelectorAll('.box');
let resetBtn= document.querySelector('.reset');
let winner=document.querySelector('.winner');
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if (turnO){
            box.innerText='O';
            turnO=false;
        }
        else{
            box.textContent='X';
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

resetBtn.addEventListener('click',()=>{
    resetBtn.innerText='Restart Game';
    boxes.forEach((box)=>{
        box.textContent=null;
        box.disabled=false;
        turnO=true;
        winner.style.visibility='hidden';
        winner.innerText=null;
    });
})

const checkWinner=()=>{
    winPatterns.forEach((pattern)=>{
        // console.log(boxes[pattern[0]].textContent,boxes[pattern[1]].textContent,boxes[pattern[2]].textContent)
        if (boxes[pattern[0]].textContent!='' && boxes[pattern[1]].textContent!='' && boxes[pattern[2]].textContent!=''){
            if (boxes[pattern[0]].textContent===boxes[pattern[1]].textContent && boxes[pattern[1]].textContent===boxes[pattern[2]].textContent){
                // console.log(boxes[pattern[0]].textContent,' is winner');
                boxes.forEach((box)=>{box.disabled=true;});
                winner.innerHTML=boxes[pattern[0]].textContent+' is the winner';
                winner.style.visibility='visible';
                resetBtn.innerText='New Game';
            }
            else{}
        }
        else{}
    });
}
