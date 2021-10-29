// A function that causes our program sleep
// IE: wait around for a whle before goign to the next line
//
// Parameters
//
// milliseconds: the number of milliseconds to sleep for
function sleep(milliseconds) {
  var startTime = Date.now();
  while(Date.now() - startTime < milliseconds) {
    // we'll just do nothing for a while
  } 
}


// rainbow in slow motion
background(rgb(5, 55, 255));
sleep(500);
fill(rgb(255,102,102));
sleep(500);
ellipse(200, 200, 400, 400);
sleep(500);
fill(rgb(255,178,102));
ellipse(200, 200, 340, 340);
sleep(500);
fill(rgb(255,255,102));
ellipse(200, 200, 280, 280);
sleep(500);
fill(rgb(178,255,102));
ellipse(200, 200, 220, 220);
sleep(500);
fill(rgb(51,153,255));
ellipse(200, 200, 160, 160);
sleep(500);
fill(rgb(153,153,255));
ellipse(200, 200, 100, 100);
sleep(500);
fill(rgb(229,204,255));
ellipse(200, 200, 40, 40);
sleep(500);
fill(rgb(25, 255, 0));
rect(0, 200, 400, 200);
