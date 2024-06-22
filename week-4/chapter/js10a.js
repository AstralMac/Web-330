"use strict";
/*  JavaScript 7th Edition
    Chapter 10
    Chapter case

    Oak Top House
    Author: Malcolm Abdullah   
    Date: June 21st, 2024

    Filename: js10a.js
*/


window.addEventListener("load", setupRoom);

// perform setup tasks when page first loads
function setupRoom() {
   //Page objects
   let room = document.getElementById("room");                            // banquet hall
   let storage = document.getElementsByTagName("storage");                // storage room
   let roomTables = document.querySelectorAll("#room > div.table");       // Tables in the banquet hall
   let storageTables = document.querySelectorAll("#storage > div.table"); // Tables in the storage room
   let zIndexCounter = 0; // Count the highest z-Index value
   let startingX, startingY; // initial pointer coordinates      
   let tableX, tableY; // initial table coordinates                                           
   
   // Function to calculate available seats in the room layout
   function countSeats() {
      let guests = 0;
            let seatCount = document.getElementById("seatCount");      
      let tablesToCount = document.querySelectorAll("#room > div.table");
      for (let  items of tablesToCount) {
         guests += parseInt(items.textContent);
      }
      seatCount.textContent = guests;
    }

    // Add tables from storage to the banquet hall
    for (let items of storageTables) {
      items.onclick = function (){
        let storageCopy = items.cloneNode(true);
        room.appendChild(storageCopy);

        zIndexCounter++;
        storageCopy.style.zIndex = zIndexCounter;
        countSeats();

        // Grab the table in response to the pointerdown event
        storageCopy.addEventListener("pointerdown", grabTable);
      }
    }
    // Grab a table from the banquet hall
    function grabTable(e) {

      // Test whether the "shift" key was pressed, remove table from layout
      if (e.shiftKey) {
        // remove table from the room
        e.target.parentElement.removeChild(e.target);
        countSeats();
      } else{
      startingX = e.clientX;
      startingY = e.clientY;
      e.target.style.touchAction = "none";
      zIndexCounter++;
      e.target.style.zIndex = zIndexCounter;
      tableX = e.target.offsetLeft;
      tableY = e.target.offsetTop;
      e.target.addEventListener("pointermove", moveTable);
      e.target.addEventListener("pointerup", dropTable);
    }
  }

    // Move the table along with pointer
    function moveTable(e) {
      let currentX = e.clientX;
      let currentY= e.clientY;
      let deltaX = currentX - startingX;
      let deltaY = currentY - startingY;
      // Calculate the table's new position
      e.target.style.left = tableX + deltaX + "px";
      e.target.style.top = tableY +deltaY + "px";
    }

    //drop table at desired coordinates
    function dropTable(e) {
      e.target.removeEventListener("pointermove", moveTable);
      e.target.removeEventListener("pointerup", dropTable);
    }
}