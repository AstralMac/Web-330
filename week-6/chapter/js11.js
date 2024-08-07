"use strict";
/*
   JavaScript 7th Edition
   Chapter 11
   Chapter Case

   Author:   Malcolm Abdullah
   Date:     July 4th, 2024

   Filename: js11.js


*/

window.addEventListener("load", init);

function init() {
   // Page Objects
   let stories = document.getElementById("stories");
   let news = document.getElementById("news");
   let sInput = document.getElementById("sInput");
   let sButton = document.getElementById("sButton"); 
   let suggestBox = document.getElementById("suggestBox");

   // Create a request object
   const xhr = new XMLHttpRequest();

   // Handle the changing request state
   xhr.onreadystatechange = function (){
    if(xhr.readyState === 4){
      if (xhr.status >= 200 && xhr.status < 300) {
        // Manage the response
        stories.innerHTML = xhr.responseText;
      } else {
        console.log("Request failed: " + xhr.statusText);
      }
    }
   }

   // Open the request and send it
   xhr.open("get", "commentary.html");
   xhr.send(null);

   // Retrieve archived articles from the web server
   sButton.onclick = () => {
    fetch("archives.pl?skey=" + encodeURIComponent(sInput.value))
    .then(response => {
      if (response.ok) {
        return response.text();
      } else {
        return "Unable to retrieve commentary";
      }
    })
    .then( comtext => stories.innerHTML = comtext )
    .catch (stories.innerHTML = "Network Failure");
   }

   // Fetch current headlines from the web server
   fetch ("headlines.xml")
   .then (response => response.text())
   .then (str => new DOMParser().parseFromString(str, "text/xml"))

   // Write the XML content to HTML
   .then (dom => {
    let items = dom.querySelectorAll("item");

    // Loop through each story item
    for (let story of items) {
      
      //write the story content and append it to the page
      let headline = story.children[0].textContent;
      let link = story.children[1].textContent;
      let summary = story.children[2].textContent;
      let htmlCode= `<article><h2><a href="${link}">${headline}</a></h2>
      <p>${summary}</p></article>`
      news.insertAdjacentHTML("beforeend", htmlCode);
    }
   });
}