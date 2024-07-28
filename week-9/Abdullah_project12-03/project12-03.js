"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-3

      Project to show a recipe with expanding/contracting content
      Author: Malcolm Abdullah
      Date: July 28th,2024

      Filename: project12-03.html
*/

// Step 2: Apply the click() method to the article > h2 selector
$("article > h2").click(function (e) {
  // Step 3: Declare variables
  let heading = $(e.target);
  let list = heading.next();
  let headingImage = $(heading).children("img");

  // Step 4: Alternate between hiding and showing the content of the lists by applying the slideToggle() method to the list variable over a half-second (500 ms) interval
  $(list).slideToggle(500);

  // Step 5: Change the symbol displayed in the headings by applying the attr() method to headingImage variable to get the value of the src attribute.
  let src = $(headingImage).attr("src");

  if (src === "plus.png") {
    $(headingImage).attr("src", "minus.png");
  } else {
    $(headingImage).attr("src", "plus.png");
  }
});