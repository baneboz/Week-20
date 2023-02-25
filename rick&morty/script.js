"use strict";

const btn = document.querySelector(".btn__get");
const jokeContainer = document.querySelector(".joke");

const getJSON = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then(response => {
    if (!response) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};
const renderJoke = function (joke) {
  jokeContainer.textContent = `${joke.value}`;
};

const getJoke = function () {
  getJSON("https://api.chucknorris.io/jokes/random").then(joke => {
    renderJoke(joke);
  });
};

btn.addEventListener("click", getJoke);
