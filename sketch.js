

function setup() {
    createCanvas(400, 600);
  }
  
  function draw() {
    noStroke()
    background(242, 207, 187);
    fillRandomColor();
   
    beginShape()
    vertex(0,0)
    vertex(0,350)
    vertex(190,0)
    endShape()
    
    rect(200,450,200,100)
    
   
   fillRandomColor();
    beginShape()
    vertex(0,350)
    vertex(200,350)
    vertex(200,0)
    vertex(190,0)
    endShape()
      rect(0,550,width,50)
    
  
   fillRandomColor();
    beginShape()
    vertex(200,0)
    vertex(400,0)
    vertex(400,90)
    vertex(200,450)
    endShape()
    rect(0,450,200,100)
    
  
   fillRandomColor();
    arc(300,90,200,200,PI,0)
    rect(0,350,200,100)
    
    fillRandomColor();
    arc(100,450,200,200,0,PI)

    fillRandomColor();
    beginShape()
    vertex(0,450)
    vertex(200,450)
    vertex(200,350)
    endShape()
    
   fill(255)
    textFont('helvetica')
    textSize(28)
    text('random', -98+width/2,-80+height/2)
    textAlign(CENTER)
    
   
    text('colors',40+width/2,-100+height/2)
    noLoop();
  }
      ///this is kind of a redundant function. im realizing 
      // i could have used an array here!. but storing sets of 3 numbers in an array sounds a bit tricky to me.
      // so very long if-statement it is.
  function fillRandomColor(){
    let randomNum = floor(random(1,10))
    if (randomNum == 1){
        fill( 68, 166, 156)
         }else if(randomNum == 2){
            fill(89, 46, 21)
         }else if(randomNum == 3){
            fill(140, 103, 81)
         }else if(randomNum == 4){
            fill(191, 156, 136)
         }else if(randomNum == 5){
            fill(242, 207, 187)
         }else if(randomNum == 6){
             fill(166, 75, 41)
         }else if(randomNum == 7){
             fill(242, 192, 41)
         }else if(randomNum == 8){
             fill(191, 161, 143)
         }else if(randomNum == 9){
             fill(64, 60, 38)
         }else{
             fill(115, 96, 61)
         }

  }