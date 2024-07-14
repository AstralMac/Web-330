/*
  Pragmatic JavaScript
  Chapter 3
  Programming Assignment

  Author: Malcolm Abdullah
  Date: July 24th, 2024
  Filename:
*/

"use strict";

let chefs = [
  // TODO: Create superhero object
  { name: "Gordon Ramsay", specialty: "British cuisine", weakness: "Impatience", location: "London, UK" },
  { name: "Massimo Bottura", specialty: "Italian cuisine", weakness: "Perfectionism", location: "Modena, Italy" },
  { name: "Yannick Alléno", specialty: "French cuisine", weakness: "Overthinking", location: "Paris, France" }
];

function fetchChef1() {
  // TODO: Implement this function
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate a successful data retrieval
      console.log("Server 1: Chef 1 data retrieved.");
      resolve(chefs[0]);
      // Uncomment to simulate an error
      // reject("Failed to retrieve Chef 1 data.");
    }, 1000);
  });
}

function fetchChef2() {
  // TODO: Implement this function
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate a successful data retrieval
      console.log("Server 2: Chef 2 data retrieved.");
      resolve(chefs[1]);
      // Uncomment to simulate an error
      // reject("Failed to retrieve Chef 2 data.");
    }, 2000);
  });
}

function fetchChef3() {
  // TODO: Implement this function
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate a successful data retrieval
      console.log("Server 3: Chef 3 data retrieved.");
      resolve(chefs[2]);
      // Uncomment to simulate an error
      // reject("Failed to retrieve Chef 3 data.");
    }, 3000);
  });
}

// TODO: Use Promise.allSettled to fetch all heroes and update the webpage
Promise.allSettled([fetchChef1(), fetchChef2(), fetchChef3()])
  .then((results) => {
    results.forEach((result, index) => {
      const chefDiv = document.getElementById(`chef${index + 1}`);
      if (result.status === "fulfilled") {
        chefDiv.innerHTML = `
          <h2>${result.value.name}</h2>
          <p><strong>Specialty:</strong> ${result.value.specialty}</p>
          <p><strong>Weakness:</strong> ${result.value.weakness}</p>
          <p><strong>Location:</strong> ${result.value.location}</p>
        `;
      } else {
        chefDiv.innerHTML = `<p class="error">${result.reason}</p>`;
      }
    });
  })
  .catch((error) => {
    console.error("An unexpected error occurred:", error);
    document.body.innerHTML = `<p class="error">An unexpected error occurred. Please try again later.</p>`;
  });