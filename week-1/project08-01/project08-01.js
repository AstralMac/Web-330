"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Malcolm Abdullah
      Date:   June 2nd, 2024

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/
// This will be the function got the timer constructor
function timer(min, sec) {
  this.minutes = min;
  this.seconds = sec;
  this.timeID = null;
}
// This will be the runPause function
function runPause(timer,minBox,secBox){
  //this if statement is used in the case timeID is defined
  if(timer.timeID) {
    window.clearInterval(timer.timeID);
    timer.timeID = null;
  } else {
    // the is to setup the interval for timer
    timer.timeID = window.setInterval(function() {
      countdown(timer,minBox,secBox);
    }, 1000)
  }
} 
// This function is for the countdown function
function countdown(timer,minBox,secBox) {
    // this is for if second are more than 0
    if(timer.seconds > 0) {
      timer.seconds -=1;
    }
    // This is for if minutes are more than 0
    else if(timer.minutes > 0) {
      timer.minutes -= 1;
      timer.seconds = 59;
    }
    else {
      // this to the clear the interval
      window.clearInterval(timer.timeID);
      timer.timeID = null;
    }
    // set the minutes and seconds value 
    minBox.value = timer.minutes;
    secBox.value = timer.seconds;
}
/*---------------Interface Code -----------------*/
/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");
const myTimer = new timer(minBox.value, secBox.value);
// change event on minutes box
minBox.onchange = ()=>{
  myTimer.minutes = minBox.value;
}
// The is the change event for the seconds box
secBox.onchange = () => { myTimer.seconds = secBox.value;}
// this is the click event on the runPause button
runPauseTimer.onclick = () =>{
  runPause(myTimer, minBox, secBox)
}


