/*
  Pragmatic JavaScript
  Chapter 2
  Programming Assignment

  Author:Malcolm Abdullah
  Date: June 30th, 2024
  Filename: script.js
*/

// Create an in-memory object array for each table in the restaurant
let tables = [
  { tableNumber: 1, capacity: 4, isReserved: false },
  { tableNumber: 2, capacity: 2, isReserved: false },
  { tableNumber: 3, capacity: 6, isReserved: false },
  { tableNumber: 4, capacity: 4, isReserved: false },
  { tableNumber: 5, capacity: 8, isReserved: false },
  // Add your table objects here
];

// Create a function reserveTable
function reserveTable(tableNumber, callback, time) {
  // Add your code here
  let table = tables.find(t => t.tableNumber === tableNumber);

  if (table) {
    if (!table.isReserved) {
      table.isReserved = true;
      setTimeout(() => {
        callback(`Table ${tableNumber} reserved successfully!`);
      }, time);
    } else {
      callback(`Error: Table ${tableNumber} is already reserved.`);
    }
  } else {
    callback(`Error: Table ${tableNumber} does not exist.`);
  }
}

// When the form is submitted, call the reserveTable function
document
  .getElementById("reservationForm")
  .addEventListener("submit", function (e) {
    // Add your code here
    e.preventDefault();

  let name = document.getElementById("name").value;
  let tableNumber = parseInt(document.getElementById("tableNumber").value);
  let messageElement = document.getElementById("message");

  reserveTable(tableNumber, function (message) {
    messageElement.textContent = message;
  }, 2000); // Reserve table with a delay of 2 seconds (2000 milliseconds)
  });
