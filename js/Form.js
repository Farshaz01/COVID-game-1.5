class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton("Reset")
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.setElementStyle()
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 50, 0);
    this.reset.position(displayWidth - 100, 40);
    this.input.position(displayWidth/2 - 40 ,130);
    this.button.position(displayWidth/2 - 35,180);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });
    this.reset.mousePressed(() => {
      player.updateCount(0);
      game.update(0);
      database.ref("players/").remove();
      Player.updateCarsAtEnd(0)
    });
  }
  setElementStyle() {
    this.button.class("customButton");
    this.input.class("customInput");
    this.reset.class("customButton1");
    this.title.class("customHeading");
  }
}
