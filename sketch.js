
var gamestate = 0

var playerCount

var database

var form,player,game

function setup(){
    database = firebase.database();
    
    createCanvas(500,500);

    game = new Game()
    game.gamestate()
    game.start()

}

function draw(){
    
}


