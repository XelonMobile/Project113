function setup() {
  canvas = createCanvas(550, 500);
  canvas.position(560, 150);

  video = createCapture(VIDEO);
  video.hide();
}

function draw() {
    image(video, 0, 0, 640,480);
    
    rect(80, 430, 440, 35);
    rect(75, 30, 440, 35);
    rect(70, 30, 40, 435);
    rect(480, 30, 40, 435);
    fill('#03fc39');
    circle(510, 450, 80);
    circle(80, 450, 80);
    circle(490, 50, 80);
    circle(80, 50, 80);
    fill('#34ebe5');
}

function take_snapshot() {
    save('naruto.png');
}

