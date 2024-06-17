"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-02

      Project to read field values from web storage
      Author: Malcolm Abdullah
      Date:   Jun 16th, 2024

      Filename: project09-02a.js
*/

/* Page Objects */

let riderName = document.getElementById("riderName");
let ageGroup = document.getElementById("ageGroup");
let bikeOption = document.getElementById("bikeOption");
let routeOption = document.getElementById("routeOption");
let accOption = document.getElementById("accOption");
let region = document.getElementById("region");
let miles = document.getElementById("miles");
let comments = document.getElementById("comments");

// Add an onclick event handler to the submit button that runs shwData() function when the button is clicked
document.getElementById("submitButton").addEventListener("click", showData);

//showData() function
function showData() {
  console.log("showData() function called");
  //store the value of the all object in a session storage objects named after the objects.
  sessionStorage.riderName = riderName.value;
  sessionStorage.ageGroup = ageGroup.value;
  sessionStorage.bikeOption = bikeOption.value;
  sessionStorage.routeOption = routeOption.value;
  sessionStorage.accOption = accOption.value;
  sessionStorage.region = region.value;
  sessionStorage.miles = miles.value;
  sessionStorage.comments = comments.value

  //command that changes the value of the location.href object to the Project-B file
  location.href = "project09-02b.html";
}