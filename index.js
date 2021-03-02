let box =Array.from(document.querySelectorAll("button"))
let textdiv = document.querySelector("#game_status")

// vrifier frist les valeurs horizontal

const winningCombinations = [
    [box[0], box[1], box[2]],
    [box[3], box[4], box[5]],
    [box[6], box[7], box[8]],
    [box[0], box[3], box[6]],
    [box[1], box[4], box[7]],
    [box[2], box[5], box[8]],
    [box[0], box[4], box[8]],
    [box[2], box[4], box[6]]
]

function winner(){
    for(let i=0;i<winningCombinations.length;i++){
        if(winningCombinations[i][0].innerHTML===winningCombinations[i][1].innerHTML&&
             winningCombinations[i][1].innerHTML===winningCombinations[i][2].innerHTML
            &&(winningCombinations[i][0].innerHTML!==""))
        {
            winningCombinations[i][0].style.backgroundColor="green"
            winningCombinations[i][1].style.backgroundColor="green"
            winningCombinations[i][2].style.backgroundColor="green"
            textdiv.textContent="the winner is"+" "+winningCombinations[i][0].innerHTML
        }
        
}
}

// donn le text X O
let count=0
function changerLeText(e){

    if(count%2==0){
        e.target.innerHTML="X"
        textdiv.textContent= "is O turn"
    }else{
        e.target.innerHTML="O"
        textdiv.textContent= "is X turn"
    }
    count++
    winner()
}

box.forEach(button=>{
    button.addEventListener('click', changerLeText)
})


