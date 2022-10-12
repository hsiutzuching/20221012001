function setup() {
  createCanvas(windowWidth,windowHeight);
	
}

function draw() {
  background(0);
  noFill()//圖形不填色
  stroke(255)//線條顏色
  rectMode(CENTER)//設定方框以圓形中心點為座標點

for(var j=0;j<(height/50);j++){
  for(var i=0;i<(width/50);i++)
  {
  ellipse(25+(i*50),25+(j*50),50+mouseX/10)
  stroke(255,0,0)
  rect(25+(i*50),25+(j*50),50)
  stroke(255)
  ellipse(50+(i*50),50+(j*50),25+mouseY/5)
  }
}
}