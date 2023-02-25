"use strict";
const cardContainer = document.querySelector(".card__container");

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const getJSON = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then(response => {
    if (!response)
      throw new Error(
        "Something went wrong! We having trouble displaying your favourite characters."
      );
    return response.json();
  });
};

const renderChars = function (char) {
  const html = `
    <figure class="card" data-id="${char.id}">
      <img
        src="${char.image}"
        alt="${char.name} Icon"
        class="card__image"
      />
      <figcaption class="card__caption">
        <h3 class="card__name">${char.name}</h3>
        <button class="card__btn">Like</button>
      </figcaption>
    </figure>
  `;

  cardContainer.insertAdjacentHTML("beforeend", html);
};

const getCharacters = function () {
  // prettier-ignore
  getJSON("https://rickandmortyapi.com/api/character")
    .then(data => {
      console.log(data);

      const {info, results: characters } = data;

      console.log(characters);

      characters.forEach(char => {
        renderChars(char);
      })  

      cardContainer.addEventListener("click", function (e) {

        const card = e.target.closest(".card");

        if (!card) return;

        const character = characters[card.dataset.id-1]
        const html = `
        <h3>${character.id} - ${character.name}</h3>
        <p>${character.gender}</p>
        <img
          src="${character.image}"
          alt="${character.name}"
        />
        <p>Species: ${character.species}</p>
        <p>Species: ${character.origin.name}</p>
        <p>Status: ${character.status}</p>
        <p>Location: ${character.location.name}</p>
        <p>Episodes: ${character.episode.length}</p>
        `
        modal.innerHTML = html;
         card.addEventListener("click", openModal);
      
      });
    })
    .catch(err => {
      console.log(err.message);
    })
};
getCharacters();

overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
