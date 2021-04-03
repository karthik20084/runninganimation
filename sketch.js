   var run, jake;
   var lboundary;
   var rboundary;
   var lines1;
   var lines2;
   var lines3;
   var lines4;
   

   function preload() {
     //pre-load images
jake =loadImage("Jake1.png","Jake2.png","jake3  .png","jake4.PNG","jake5.png");
    

   }

   function setup() {
     createCanvas(500, 500);
     run=createSprite(250,400,10,10);
     run.addImage("run",jake);
     run.scale = 1;
     lboundary = createSprite(470, 250, 15, 500);
     rboundary = createSprite(30, 250, 15, 500);
     lines1 = createSprite(150, 70, 10, 100);
     lines2 = createSprite(150, 300, 10, 100);
     lines3 = createSprite(350, 300, 10, 100);
     lines4 = createSprite(350, 70, 10, 100);
   }

   function draw() {
     background("black");
     lboundary.shapeColor = ("white");
     rboundary.shapeColor = ("white");
     lines1.shapeColor = ("white");
     lines2.shapeColor = ("white");
     lines3.shapeColor = ("white");
     lines4.shapeColor = ("white");

     lines1.velocityY = 15;
     lines2.velocityY = 15;
     lines3.velocityY = 15;
     lines4.velocityY = 15;

     if (lines1.y > 500) {
       lines1.y = -10;
     }
     if (lines4.y > 500) {
       lines4.y = -10;
     }
     if (lines2.y > 500) {
       lines2.y = -10;
     }
     if (lines3.y > 500) {
       lines3.y = -10;
     }
     run.x=mouseX
     run.bounce(lboundary);
     run.bounce(rboundary);
     drawSprites();
   }