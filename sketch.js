function setup() {
    createCanvas(400, 600);
  }
  
  function draw() {
    noStroke()
    background(242, 207, 187);
    fill( 68, 166, 156)
    beginShape()
    vertex(0,0)
    vertex(0,350)
    vertex(190,0)
    endShape()
    
    rect(200,450,200,100)
    
    fill(89, 46, 21)
    beginShape()
    vertex(0,350)
    vertex(200,350)
    vertex(200,0)
    vertex(190,0)
    endShape()
      rect(0,550,width,50)
    
    fill(140, 103, 81)
    beginShape()
    vertex(200,0)
    vertex(400,0)
    vertex(400,90)
    vertex(200,450)
    endShape()
    rect(0,450,200,100)
    
    fill(191, 156, 136)
    arc(300,90,200,200,PI,0)
    rect(0,350,200,100)
    
    fill(242, 207, 187)
    arc(100,450,200,200,0,PI)
    
   fill(255)
    textFont('helvetica')
    textSize(28)
    text('loren', -35+width/2,-80+height/2)
    textAlign(CENTER)
   
    text('ipsum',40+width/2,-100+height/2)
    
  }
  