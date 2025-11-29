// Variables to store the GIFs
let interactable;
let bgAnim;

function preload() {
  // Load them like normal images
  // The foreground gif file was exported with no looping
  interactable = loadImage("dancingman01stop.gif");
  // The background gif was file exported with looping
//  bgAnim = loadImage('bg-anim.gif');
    sound = loadSound('SNARE20_delay.mp3');

}

function setup() {
  createCanvas(400, 400);
  // プレイボタンを作成
  playButton = createButton('Play');
  playButton.position(80, 350);
  playButton.size(200, 40);
  playButton.style('background-color', '#00a0fF'); // 背景色を緑に設定
  playButton.style('color', '#FFFFFF'); // 文字色を白に設定
//addClassメソッドを使用してクラスを追加することもできます
  //playButton.addClass('my-class');
  // プレイボタンがクリックされたらサウンドを再生
  playButton.mousePressed(() => {
    sound.play();
  });
}

function draw() {
  background(255);
  // Will loop forever
//  image(bgAnim, 0, 0, width, height);
  // Will only play once when it is not reset
  image(interactable, 30, 30);
}

// On mouse click
function mousePressed() {
  // Set the frame back to 0 (restart it)
  interactable.setFrame(0);
  // Play it again
  interactable.play();
      sound.play();
}
