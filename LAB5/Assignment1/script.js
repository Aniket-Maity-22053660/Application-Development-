let randomInt1
let randomInt2
function clicked1(){
    let temp1 = document.getElementsByClassName('dice')
    let temp2 = temp1[0].children[1]
    const min = 1;
    const max = 6;
    randomInt1 = Math.floor(Math.random() * (max - min + 1)) + min;
    switch(randomInt1) {
        case 1:
            temp2.style.display="block"
            temp2.src="./Dice_Pic/dice1.png";
            break;
        case 2:
            temp2.style.display="block"
            temp2.src="./Dice_Pic/dice2.png";
            break;
        case 3:
            temp2.style.display="block"
            temp2.src="./Dice_Pic/dice3.png";
            break;
        case 4:
            temp2.style.display="block"
            temp2.src="./Dice_Pic/dice4.png";
            break;
        case 5:
            temp2.style.display="block"
            temp2.src="./Dice_Pic/dice5.png";
            break;
        case 6:
            temp2.style.display="block"
            temp2.src="./Dice_Pic/dice6.png";
            break;
        default:
            temp1[0].children[0].innerHTML="Wrong Choice!";
    }
    if (randomInt1 > randomInt2){
        document.getElementById('win').innerHTML="<h2>Player 1 Won!</h2>"
    }
    else if(randomInt1 < randomInt2){
        document.getElementById('win').innerHTML="<h2>Player 2 Won!</h2>"
    }
    else if(randomInt1 === randomInt2 ){
        document.getElementById('win').innerHTML="<h2>Draw!</h2>"
    }
}
function clicked2(){
    let temp1 = document.getElementsByClassName('dice')
    let temp2 = temp1[1].children[1]
    const min = 1;
    const max = 6;
    randomInt2 = Math.floor(Math.random() * (max - min + 1)) + min;
    switch(randomInt2) {
        case 1:
            temp2.style.display="block"
            temp2.src="./Dice_Pic/dice1.png";
            break;
        case 2:
            temp2.style.display="block"
            temp2.src="./Dice_Pic/dice2.png";
            break;
        case 3:
            temp2.style.display="block"
            temp2.src="./Dice_Pic/dice3.png";
            break;
        case 4:
            temp2.style.display="block"
            temp2.src="./Dice_Pic/dice4.png";
            break;
        case 5:
            temp2.style.display="block"
            temp2.src="./Dice_Pic/dice5.png";
            break;
        case 6:
            temp2.style.display="block"
            temp2.src="./Dice_Pic/dice6.png";
            break;
        default:
            temp1[1].children[0].innerHTML="Wrong Choice!";
    }

    if (randomInt1 > randomInt2){
        document.getElementById('win').innerHTML="<h2>Player 1 Won!</h2>"
    }
    else if(randomInt1 < randomInt2){
        document.getElementById('win').innerHTML="<h2>Player 2 Won!</h2>"
    }
    else if(randomInt1 === randomInt2 ){
        document.getElementById('win').innerHTML="<h2>Draw!</h2>"
    }
}
