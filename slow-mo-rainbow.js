// We've used many functions that come built in to Game Lab
// like rect(), fill(), etc...
//
// Here's a function I wrote that puts your program to sleep
// for a number of milliseconds (1000 milliseconds = 1 second).
//
// Copy and paste this function at the top of any program in
// Game Lab, and use it like this:
//
// sleep(500);
//


// sleep function
function sleep(milliseconds) {
  var startTime = Date.now();
  while(Date.now() - startTime < milliseconds) {
    // we'll just do nothing for a while
  } 
}


// Here's the rainbow example we looked at with a 500ms sleep
// between each line. Copy and paste it into Game Lab and see
// how it works.


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
