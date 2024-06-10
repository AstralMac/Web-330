/*
  Pragmatic JavaScript
  Chapter 1
  Programming Assignment

  Author: Malcolm Abdullah
  Date: 06-09-2024
  Filename:script.js
*/

"use strict";

function createCharacter(name, gender, characterClass) {
  // TODO: Implement this function
  // Use closures to encapsulate the character's data
  return {
    getName: function() {
      return name;
    },
    getGender: function() {
      return gender;
    },
    getClass: function() {
      return characterClass;
    }
  };
}

document.getElementById("characterForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // TODO: Get form values
  const heroName = document.getElementById("heroName").value;
  const heroGender = document.getElementById("heroGender").value;
  const heroClass = document.getElementById("heroClass").value;

  // TODO: Create character
  let newCharacter = createCharacter(heroName, heroGender, heroClass)
  
  // TODO: Display character information
  displayCharacter(newCharacter);
});

function displayCharacter(character) {
  let characterOutput = document.getElementById("characterOutput");
  characterOutput.innerHTML = `
    <h2>Character Information</h2>
    <p><strong>Name:</strong> ${character.getName()}</p>
    <p><strong>Gender:</strong> ${character.getGender()}</p>
    <p><strong>Class:</strong> ${character.getClass()}</p>
  `;
}
