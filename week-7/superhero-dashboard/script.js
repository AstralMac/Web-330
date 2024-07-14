/*
  Pragmatic JavaScript
  Chapter 3
  Programming Assignment

  Author: Malcolm Abdullah
  Date: July 24th, 2024
  Filename:
*/

"use strict";

let heroes = [
  // TODO: Create superhero object
  {name: "Batman", specialty: "Melee Combat", weakness: "Superpowers", city: "Gotham"},
  {name: "Superman", specialty: "Super strength, Super speed, Flight, invincibility", weakness: "Kryptonite", city: "Metropolis"},
  {name: "Deadpool", specialty: "super-healing", weakness: "decapitation", city: "New York"}
];

function fetchHero1() {
  // TODO: Implement this function
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      // simulate a successful data retrieval
      console.log("Hero 1 data retrieved.")
      //line to simulate rejection un/comment to simulate
      // return reject ("Failed to retrieve hero 1 data.");
      resolve (hero[0]);
    }, 1000);
  });
}

function fetchHero2() {
  // TODO: Implement this function
  return new Promise((resolve, reject) => {
    //simulate a successful data retrieval
    console.log("Hero 2 data retrieved.")
    //line to simulate rejection un/comment to simulate
    // return reject("failed to retrieve hero 2 data.")
    resolve (hero[1]);
  }, 2000);
}

function fetchHero3() {
  // TODO: Implement this function
  return new Promise((resolve, reject) => {
    //simulate a successful data retrieval
    console.log("Hero 3 data retrieved.")
    // line to simulate rejection un/comment to simulate
    // return reject("failed to retrieve hero 3 data.")
    resolve(hero[2]);
  }, 3000);
}

// TODO: Use Promise.allSettled to fetch all heroes and update the webpage
Promise.allSettled([fetchHero1(), fetchHero2(), fetchHero3()])
  .then((results) => {
    results.forEach((result, index) => {
      const heroDiv = document.getElementById("hero${index + 1}");
      if (result.status === "fulfilled") {
        heroDiv.innerHTML = 
        `<h2>${result.value.name}</h2><p><strong>Specialty:</strong> ${result.value.specialty}</p><p><strong>Weakness:</strong> ${result.value.weakness}</p><p><strong>Location:</strong> ${result.value.location}</p>`;
      } else {
        heroDiv.innerHTML=`<p class = "error">${result.reason}</p>`;
      }
    });
  })
  .catch((error) => {
    console.error("An unexpected error occurred:", error);
    document.body.innerHTML = `<p class="error> An unexpected error occurred. Please try again later.</p>`;
  });
