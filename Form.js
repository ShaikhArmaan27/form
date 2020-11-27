class Form{
    constructor(){
    }

 display(){
    var title = createElement("h2")
    title.html("Multiplayer Car Racing")
    title.position(100,50);
    var input = createInput("Name")
    input.position(120,150)
    var button = createButton("Join")
    button.position(200,200)
    
    button.mousePressed(function(){

        input.hide()
        button.hide()
        var name = input.value()
        playerCount+=1
        player.update(name)
        player.updateCount(playerCount)
        var greeting = createElement("h3")
        greeting.html("Hello"+name)
        greeting.position(150,150)   

    })

   
 }



}