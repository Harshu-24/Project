let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset-btn");
let msg = document.querySelector(".hide");
let turnO = true;
let sound = new Audio('mixkit-hard-pop-click-2364.wav');
let win = false;

const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log('clicked');
        if(turnO){
            box.innerText = "X";
            turnO = false;
        }
        else{
            box.innerText = "O";
            turnO = true;
        }
        box.disabled = true

        checkWin();
        sound.play();
        
    })
})
 
const disBtn = () => {
    for(box of boxes){
        box.disabled = true;
    }
}
const ShowWin= (winner)=>{
    msg.innerText = `WINNER IS ${winner}`;
    msg.classList.remove("hide2");
    disBtn();
}

const Draw= ()=>{
    msg.innerText = 'There\'s Draw';
    msg.classList.remove("hide2");
    disBtn();
}

const checkWin = () => {
    for(pattern of winPattern){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
       

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 == pos2 && pos2 == pos3 ){
                ShowWin(pos1);
                win = true;
                
            }
            
            
            
        }
        
    }
    
}


reset_btn.addEventListener("click",()=>{
    location.reload();
})



