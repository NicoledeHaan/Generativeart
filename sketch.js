/*Constants voor sunset achtergrond*/
let box = [];
let colors = ['#ffa500'];
let slider;
let sunsetC1;
let sunsetC2;
let nightC1;
let nightC2;
var x;
var y;
var x1;
var y1;
var x2;
var y2;

function setup() {
  createCanvas(displayWidth, displayHeight);

  slider = createSlider(0, 1, 0, 0.01);
  slider.position(650, 650);
  slider.changed(drawScene);
  
  sunsetC1 = color(115, 194, 251);
  sunsetC2 = color(100, 147, 5);
  nightC1 = color(0, 0, 35);  
  nightC2 = color(222, 186, 139);
  
  drawScene()
}

function draw(){
          for (let i = 0; i < box.length; i++) {
    box[i].display();
    }
}

function drawScene() {
  let c1 = lerpColor(sunsetC1, nightC1, slider.value());
  let c2 = lerpColor(sunsetC2, nightC2, slider.value());
  
  createGradient(c1, c2);
  
  drawHouses();
}

function createGradient(c1, c2) {
  for(let y = 0; y < height; y++){
    n = map(y, 0, height, 0, 1);
    let newc = lerpColor(c1, c2, n);
    stroke(newc);
    line(0, y, width, y);
  }
}

function drawHouses() {
    /*Bron voor sterren: https://codeburst.io/sunsets-and-shooting-stars-in-p5-js-92244d238e2b */
    /*Sterren bovenin het scherm, wisselt als je refresht*/
    for (var i = 0; i < 50; i++) {
    var x = random(windowWidth);
    var y = random(windowHeight-200);
    noStroke();
    fill(255, 255, 0);
    ellipse(x, y, 2, 2);
    }
    
    /*Bron voor de huizen: https://www.youtube.com/watch?v=riZB_qCQXtI*/
    /*huis1*/
    fill(102);
    rect(100, 200, 200, 400);
    fill(102);
    
    /*Bron random driehoek: https://editor.p5js.org/awade5/sketches/rkWIYwPsX*/
    x =random(200,200);
    y =random(20,180);
    x1 =random(100, 100);
    x2  =random(100,100);
    y1 =random(200,200);
    x2 =random(300,300);
    y2 =random(200,200);
    triangle(x,y,x1,y1,x2,y2);
  
    /*Bron random: /*https://happycoding.io/tutorials/p5js/random*/
    /*Kleur van ramen huis 1*/
    const colors10 = ['yellow', 'red', 'blue'];
    fill(random(colors10));
    /*Vlakken van ramen huis 1*/
    var rectX = random(100, 150);
    var recty = random(200, 250);
    var rectSize = random (30, 40);
    rect(rectX, recty, rectSize);
    
    var rectX = random(200, 250);
    var recty = random(200, 250);
    var rectSize = random (30, 40);
    rect(rectX, recty, rectSize);

    var rectX = random(100, 150);
    var recty = random(300, 350);
    var rectSize = random (30, 40);
    rect(rectX, recty, rectSize);
    
    var rectX = random(200, 250);
    var recty = random(300, 350);
    var rectSize = random (30, 40);
    rect(rectX, recty, rectSize);
    
    var rectX = random(100, 150);
    var recty = random(400, 450);
    var rectSize = random (30, 40);
    rect(rectX, recty, rectSize);
    
    var rectX = random(200, 250);
    var recty = random(400, 450);
    var rectSize = random (30, 40);
    rect(rectX, recty, rectSize);

    var rectX = random(100, 150);
    var recty = random(500, 550);
    var rectSize = random (30, 40);
    rect(rectX, recty, rectSize);
    
    var rectX = random(200, 250);
    var recty = random(500, 550);
    var rectSize = random (30, 40);
    rect(rectX, recty, rectSize);
    
    /*huis2*/
    fill(102);
    rect(310, 200, 200, 400);
    noStroke();
    fill(102);
    var rectX20 = random(360, 360);
    var recty20 = random(150, 150);
    var rectSize20 = random (60, 100);
    rect(rectX20, recty20, rectSize20);
    
    /*Kleur van ramen huis 2*/
    const colors2 = ['pink', 'purple', 'green'];
    fill(random(colors2));
    /*Vlakken van ramen huis 2*/
    var rectX2 = random(310, 360);
    var recty2 = random(200, 250);
    var rectSize2 = random (30, 40);
    rect(rectX2, recty2, rectSize2);
    
    var rectX2 = random(410, 460);
    var recty2 = random(200, 250);
    var rectSize2 = random (30, 40);
    rect(rectX2, recty2, rectSize2);

    var rectX2 = random(310, 360);
    var recty2 = random(300, 350);
    var rectSize2 = random (30, 40);
    rect(rectX2, recty2, rectSize2);
    
    var rectX2 = random(410, 460);
    var recty2 = random(300, 350);
    var rectSize2 = random (30, 40);
    rect(rectX2, recty2, rectSize2);
    
    var rectX2 = random(310, 360);
    var recty2 = random(400, 450);
    var rectSize2 = random (30, 40);
    rect(rectX2, recty2, rectSize2);
    
    var rectX1 = random(410, 460);
    var recty1 = random(400, 450);
    var rectSize1 = random (30, 40);
    rect(rectX1, recty1, rectSize1);

    var rectX2 = random(310, 360);
    var recty2 = random(500, 550);
    var rectSize2 = random (30, 40);
    rect(rectX2, recty2, rectSize2);
    
    var rectX2 = random(410, 460);
    var recty2 = random(500, 550);
    var rectSize2 = random (30, 40);
    rect(rectX2, recty2, rectSize2);
    
    /*huis3*/
    fill(102);
    rect(520, 200, 200, 400);
    
    fill(102);
    var rectX30 = random(570, 570);
    var recty30 = random(150, 150);
    var rectSize30 = random (80, 150);
    rect(rectX30, recty30, rectSize30);
    
    fill(102);
    noStroke();
    var rectX40 = random(595, 595);
    var recty40 = random(110, 110);
    var rectSize40 = random (50, 60);
    rect(rectX40, recty40, rectSize40);
    
    /*Kleur van ramen huis 3*/
    const colors1 = ['yellow', 'red', 'blue'];
    fill(random(colors1));
    /*Vlakken van ramen huis 3*/
    var rectX1 = random(520, 570);
    var recty1 = random(200, 250);
    var rectSize1 = random (30, 40);
    rect(rectX1, recty1, rectSize1);
    
    var rectX1 = random(620, 670);
    var recty1 = random(200, 250);
    var rectSize1 = random (30, 40);
    rect(rectX1, recty1, rectSize1);

    var rectX1 = random(520, 570);
    var recty1 = random(300, 350);
    var rectSize1 = random (30, 40);
    rect(rectX1, recty1, rectSize1);
    
    var rectX1 = random(620, 670);
    var recty1 = random(300, 350);
    var rectSize1 = random (30, 40);
    rect(rectX1, recty1, rectSize1);
    
    var rectX1 = random(520, 570);
    var recty1 = random(400, 450);
    var rectSize1 = random (30, 40);
    rect(rectX1, recty1, rectSize1);
    
    var rectX1 = random(620, 670);
    var recty1 = random(400, 450);
    var rectSize1 = random (30, 40);
    rect(rectX1, recty1, rectSize1);

    var rectX1 = random(520, 570);
    var recty1 = random(500, 550);
    var rectSize1 = random (30, 40);
    rect(rectX1, recty1, rectSize1);
    
    var rectX1 = random(620, 670);
    var recty1 = random(500, 550);
    var rectSize1 = random (30, 40);
    rect(rectX1, recty1, rectSize1);
    
    /*huis4*/
    fill(102);
    rect(730, 200, 200, 400);
    
    fill(102);
    noStroke();
    x =random(830,830);
    y =random(20,180);
    x1 =random(730, 730);
    x2  =random(730,730);
    y1 =random(200,200);
    x2 =random(930,930);
    y2 =random(200,200);
    triangle(x,y,x1,y1,x2,y2);
  
    
   /*Kleur van ramen huis 4*/
    const colors3 = ['pink', 'purple', 'green'];
    fill(random(colors3));
    /*Vlakken van ramen huis 4*/
    var rectX3 = random(730, 780);
    var recty3 = random(200, 250);
    var rectSize3 = random (30, 40);
    rect(rectX3, recty3, rectSize3);
    
    var rectX3 = random(830, 880);
    var recty3 = random(200, 250);
    var rectSize3 = random (30, 40);
    rect(rectX3, recty3, rectSize3);

    var rectX3 = random(730, 780);
    var recty3 = random(300, 350);
    var rectSize3 = random (30, 40);
    rect(rectX3, recty3, rectSize3);
    
    var rectX3 = random(830, 880);
    var recty3 = random(300, 350);
    var rectSize3 = random (30, 40);
    rect(rectX3, recty3, rectSize3);
    
    var rectX3 = random(730, 780);
    var recty3 = random(400, 450);
    var rectSize3 = random (30, 40);
    rect(rectX3, recty3, rectSize3);
    
    var rectX3 = random(830, 880);
    var recty3 = random(400, 450);
    var rectSize3 = random (30, 40);
    rect(rectX3, recty3, rectSize3);

    var rectX3 = random(730, 780);
    var recty3 = random(500, 550);
    var rectSize3 = random (30, 40);
    rect(rectX3, recty3, rectSize3);
    
    var rectX3 = random(830, 880);
    var recty3 = random(500, 550);
    var rectSize3 = random (30, 40);
    rect(rectX3, recty3, rectSize3);
    
    /*huis5*/
    fill(102);
    rect(940, 200, 200, 400);
    
    fill(102);
    noStroke();
    var rectX50 = random(990, 990);
    var recty50 = random(130, 130);
    var rectSize50 = random (80, 150);
    rect(rectX50, recty50, rectSize50);
    
   /*Kleur van ramen huis 5*/
    const colors4 = ['yellow', 'red', 'blue'];
    fill(random(colors4));
    /*Vlakken van ramen huis 5*/
    var rectX4 = random(950, 1000);
    var recty4 = random(200, 250);
    var rectSize4 = random (30, 40);
    rect(rectX4, recty4, rectSize4);
    
    var rectX4 = random(1050, 1090);
    var recty4 = random(200, 250);
    var rectSize4 = random (30, 40);
    rect(rectX4, recty4, rectSize4);

    var rectX4 = random(950, 1000);
    var recty4 = random(300, 350);
    var rectSize4 = random (30, 40);
    rect(rectX4, recty4, rectSize4);
    
    var rectX4 = random(1050, 1090);
    var recty4 = random(300, 350);
    var rectSize4 = random (30, 40);
    rect(rectX4, recty4, rectSize4);
    
    var rectX4 = random(950, 1000);
    var recty4 = random(400, 450);
    var rectSize4 = random (30, 40);
    rect(rectX4, recty4, rectSize4);
    
    var rectX4 = random(1050, 1090);
    var recty4 = random(400, 450);
    var rectSize4 = random (30, 40);
    rect(rectX4, recty4, rectSize4);

    var rectX4 = random(950, 1000);
    var recty4 = random(500, 550);
    var rectSize4 = random (30, 40);
    rect(rectX4, recty4, rectSize4);
    
    var rectX4 = random(1050, 1090);
    var recty4 = random(500, 550);
    var rectSize4 = random (30, 40);
    rect(rectX4, recty4, rectSize4);
    
    /*huis6*/
    fill(102);
    rect(1150, 200, 200, 400);
  
    fill(102);
    var rectX30 = random(1200, 1200);
    var recty30 = random(140, 140);
    var rectSize30 = random (100, 150);
    rect(rectX30, recty30, rectSize30);
    
    fill(102);
    noStroke();
    var rectX40 = random(1225, 1225);
    var recty40 = random(90, 90);
    var rectSize40 = random (50, 90);
    rect(rectX40, recty40, rectSize40);
    
   /*Kleur van ramen huis 6*/
    const colors5 = ['pink', 'purple', 'green'];
    fill(random(colors5));
    /*Vlakken van ramen huis 6*/
    var rectX5 = random(1150, 1200);
    var recty5 = random(200, 250);
    var rectSize5 = random (30, 40);
    rect(rectX5, recty5, rectSize5);
    
    var rectX5 = random(1250, 1300);
    var recty5 = random(200, 250);
    var rectSize5 = random (30, 40);
    rect(rectX5, recty5, rectSize5);

    var rectX5 = random(1150, 1200);
    var recty5 = random(300, 350);
    var rectSize5 = random (30, 40);
    rect(rectX5, recty5, rectSize5);
    
    var rectX5 = random(1250, 1300);
    var recty5 = random(300, 350);
    var rectSize5 = random (30, 40);
    rect(rectX5, recty5, rectSize5);
    
    var rectX5 = random(1150, 1200);
    var recty5 = random(400, 450);
    var rectSize5 = random (30, 40);
    rect(rectX5, recty5, rectSize5);
    
    var rectX5 = random(1250, 1300);
    var recty5 = random(400, 450);
    var rectSize5 = random (30, 40);
    rect(rectX5, recty5, rectSize5);

    var rectX5 = random(1150, 1200);
    var recty5 = random(500, 550);
    var rectSize5 = random (30, 40);
    rect(rectX5, recty5, rectSize5);
    
    var rectX5 = random(1250, 1300);
    var recty5 = random(500, 550);
    var rectSize5 = random (30, 40);
    rect(rectX5, recty5, rectSize5);
}

/*Bron voor raam tekenen: https://editor.p5js.org/LindaKlaver/sketches/7qnbwB3PC */
function mousePressed() {
    box.push(new Box(mouseX, mouseY));
}

class Box {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = random(25);
    }

    display() {
        noStroke();
        fill(colors);
        rect(this.x, this.y, this.r * 2, this.r * 2);
    }
}