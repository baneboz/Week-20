"use strict";

const btn = document.querySelector(".btn__get");
const jokeContainer = document.querySelector(".joke");

const getJSON = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then(response => {
    if (!response.ok)
      throw new Error("Something went wrong! No joke found! 😢");
    return response.json();
  });
};
const renderJoke = function (joke) {
  jokeContainer.textContent = `${joke.value}`;
};
const renderError = function (err) {
  jokeContainer.textContent = err;
};

const getJoke = function () {
  // prettier-ignore
  getJSON("https://api.chucknorris.io/jokes/random")
    .then(joke => {
      renderJoke(joke);
    })
    .catch(err => {
      renderError(err.message);
    })
};

btn.addEventListener("click", getJoke);
