function setup(){
    canvas = createCanvas(850, 650);
    canvas.position(550, 275);
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 200, 150, 600, 400);
    //first circle
    fill(0, 255, 115);
    noStroke();
    circle(200, 150, 50)
    //second circle
    fill("red");
    noStroke();
    circle(450, 300, 60);
    //third circle
    fill(171, 218, 252);   
    noStroke();
    circle(700, 400, 40);
    //fourth circle
    fill(51, 78, 88);   
    noStroke();
    circle(800, 175, 80);
    //first rectangle
    fill("orange");
    noStroke();
    rotate(PI/4);
    rect(410, -325, 500, 50);
}
function take_snapshot(){
    save('picture.png');
}