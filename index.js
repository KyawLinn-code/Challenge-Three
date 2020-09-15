function game(choice){
    var human,computer;
    human = choice.id;
    computer = numberToChoice(randomToRpsInt());
    console.log('computer choice',computer)
    results = checkWinner(human,computer);
    console.log(results);
    message = finalMessage(results);
    console.log('message: ',message);
    rpsFrontEnd(choice.id,computer,message);
}
function checkWinner(human,computer){
    var rpsDatabase = {
        'rock': {'scissor':1, 'rock':0.5, 'paper':0},
        'paper':{'rock':1, 'paper':0.5, 'scissor': 0},
        'scissor':{'paper':1, 'scissor':0.5, 'rock':0}
    }

    var yourScore = rpsDatabase[human][computer];
    var computerScore = rpsDatabase[computer][human];

    return [yourScore,computerScore];
}
function randomToRpsInt(){
    return Math.floor(Math.random() * 3);
}
function numberToChoice(number){
    return ['rock','paper','scissor'][number];
}
function finalMessage(yourChoice,computerChoice){
    if(yourChoice[0] === 0){
        return {'message': 'You Lost!', 'color':'red'};
    }
    else if(yourChoice[0] === 0.5){
        return {'message': 'You Tied!', 'color':'blue'};
    }
    else{
        return {'message': 'You Won!', 'color':'green'};
    }
}

function rpsFrontEnd(human,computer,message){
    var imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src,
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var humanDiv = document.createElement('div');
    var computerDiv = document.createElement('div');
    var messagetDiv = document.createElement('div');

    humanDiv.innerHTML = "<img class = 'test-class' src='"+imageDatabase[human] +"'>";
    computerDiv.innerHTML = "<img class = 'test-class' src='"+imageDatabase[computer] +"'>";
    messagetDiv.innerHTML = "<h1 style= 'color: "+message['color']+"; '>"+message['message']+"</h1>";
    messagetDiv.classList.add('result-text-background');

    document.getElementById('row-container').appendChild(humanDiv);
    document.getElementById('row-container').appendChild(messagetDiv);
    document.getElementById('row-container').appendChild(computerDiv);

}