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
  return{
    getName:function(){
        return name;
    },
    getGender: function(){
      return gender;
    },
    getClass: function(){
      return characterClass;
    }
  }
}

document.getElementById("generateHero").addEventListener("click", function(e) {
  e.preventDefault();

  // TODO: Get form values
  let heroName = document.getElementById("heroName").value;
  let heroGender = document.getElementById("heroGender").value;
  let heroClass = document.getElementById("heroClass").value;
  // TODO: Create character
  let newCharacter = createCharacter(heroName, heroGender, heroClass);
  displayCharacter(newCharacter);

  // TODO: Display character information
});