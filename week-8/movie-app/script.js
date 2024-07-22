/*
  Pragmatic JavaScript
  Chapter 4
  Programming Assignment

  Author: Malcolm Abdullah
  Date: July 21st, 2024
  Filename: script.js
*/

"use strict";

const movies = [
  {
    title: "Iron Man",
    director: "Jon Favreau",
    releaseYear: 2008,
    synopsis: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil."
  },
  {
    title: "The Incredible Hulk",
    director: "Louis Leterrier",
    releaseYear: 2008,
    synopsis: "Bruce Banner, a scientist on the run from the U.S. Government, must find a cure for the monster he becomes whenever he loses his temper."
  },
  {
    title: "Thor",
    director: "Kenneth Branagh",
    releaseYear: 2011,
    synopsis: "The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders."
  },
  {
    title: "Captain America: The First Avenger",
    director: "Joe Johnston",
    releaseYear: 2011,
    synopsis: "Steve Rogers, a rejected military soldier, transforms into Captain America after taking a dose of a 'Super-Soldier serum'. But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization."
  },
  {
    title: "The Avengers",
    director: "Joss Whedon",
    releaseYear: 2012,
    synopsis: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity."
  },
  {
    title: "Guardians of the Galaxy",
    director: "James Gunn",
    releaseYear: 2014,
    synopsis: "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe."
  },
  {
    title: "Black Panther",
    director: "Ryan Coogler",
    releaseYear: 2018,
    synopsis: "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past."
  },
  {
    title: "Doctor Strange",
    director: "Scott Derrickson",
    releaseYear: 2016,
    synopsis: "While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts."
  },
  {
    title: "Spider-Man: Homecoming",
    director: "Jon Watts",
    releaseYear: 2017,
    synopsis: "Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City."
  },
  {
    title: "Avengers: Endgame",
    director: "Anthony and Joe Russo",
    releaseYear: 2019,
    synopsis: "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe."
  }
];

function fetchMovie(title) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Searching for movie with title: ${title}`);
      const movie = movies.find(movie => movie.title === title);
      if (movie) {
        console.log(`Found movie: ${movie.title}`);
        resolve(movie);
      } else {
        console.log(`Movie with title '${title}' not found.`);
        reject(`Movie with title '${title}' not found.`);
      }
    }, 1000);
  });
}

async function displayMovie(event) {
  event.preventDefault();

  const title = document.getElementById("title-input").value;
  const titleElement = document.getElementById("movie-title");
  const directorElement = document.getElementById("movie-director");
  const yearElement = document.getElementById("movie-year");
  const synopsisElement = document.getElementById("movie-synopsis");
  const errorMessageElement = document.getElementById("error-message");
  const movieInfoElement = document.getElementById("movie-info");

  try {
    const movie = await fetchMovie(title);
    titleElement.textContent = `Title: ${movie.title}`;
    directorElement.textContent = `Director: ${movie.director}`;
    yearElement.textContent = `Release Year: ${movie.releaseYear}`;
    synopsisElement.textContent = `Synopsis: ${movie.synopsis}`;
    movieInfoElement.style.display = "block";
    errorMessageElement.style.display = "none";
  } catch (error) {
    errorMessageElement.textContent = error;
    errorMessageElement.style.display = "block";
    movieInfoElement.style.display = "none";
  }
}

document.getElementById("movie-form").addEventListener("submit", displayMovie);
