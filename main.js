
// RockPaperScissors 
// The game RockPaperScissors written in javascript

var display = document.getElementById('display')
display.innerHTML = 'Hello, '

var options = ['rock', 'paper', 'scissors']
var user = document.getElementById('user')
display.innerHTML = '<div style="text-align: center"> <h3>Make a move Rock, Paper, or Scissors </h3></div>'
function rps(){
    let num = rnd()
    let pc = options[num]
    user = document.getElementById('user')
    user = user.value
    console.log(pc)
    console.log(num)
    
    if(user == pc){
        display.innerHTML = "It's A Tie"
    }
    else{
        if(user == 'rock'){
            if(pc == 'scissors'){
                display.innerHTML = 'You Win'
            }
            else{
                display.innerHTML = 'You Lose'
            }
        }
        if(user == 'paper'){
            if(pc == 'rock'){
                display.innerHTML = 'You Win'
            }
            else{
                display.innerHTML = 'You Lose'
            }
        }
        if(user == 'scissors'){
            if(pc == 'paper'){
                display.innerHTML = 'You Win'
            }
            else{
                display.innerHTML = 'You Lose'
            }
        }
        else{
            display.innerHTML = "<h3> Enter in <br> Rock, Paper, Or Scissors </h3>"
        }
    }
}

function rnd(){
    return Math.floor(Math.random()* (3 - 0)) + 0
}

