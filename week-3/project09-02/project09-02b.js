"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-01

      Project to read field values from session storage
      Author: Malcolm Abdullah
      Date:   Jun 16th, 2024
      Filename: project09-02b.js
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

// retrieve the value of the riderName key from session storage and store that value in the text content of the riderName object in the web page.
// do same for the ageGroup, bikeOption, routeOption, accOption, region, miles, and comments keys.

riderName.textContent = sessionStorage.riderName;
ageGroup.textContent = sessionStorage.ageGroup;
bikeOption.textContent = sessionStorage.bikeOption;
routeOption.textContent = sessionStorage.routeOption;
accOption.textContent = sessionStorage.accOption;
region.textContent = sessionStorage.region;
miles.textContent = sessionStorage.miles;
comments.textContent = sessionStorage.comments;


