import View from "./View.js";

class CharactersView extends View {
  _containerEl = document.querySelector(".cards__container");

  _generateMarkup() {
    return this._data.characters.map(this._generateMarkupCards).join("");
  }

  _generateMarkupCards(card) {
    return `
      <figure class="card" data-id="${card.id}">
        <img
          src="${card.image}"
          alt="${card.name} Icon"
          class="card__image"
        />
        <figcaption class="card__caption">
          <h3 class="card__name">${card.name}</h3>
          <svg class="like__btn" data-name="like__btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 122.88">
          <path class="like__btn--1" d="M61.44,0A61.44,61.44,0,1,1,0,61.44,61.44,61.44,0,0,1,61.44,0Z"/>
          <path class="like__btn--2" d="M32.5,53.39H43.06a2.18,2.18,0,0,1,2.17,2.18V84.52a2.19,2.19,0,0,1-2.17,2.18H32.5a2.19,2.19,0,0,1-2.18-2.18V55.57a2.19,2.19,0,0,1,2.18-2.18ZM60.2,
          31.68c1.14-5.82,10.66-.46,11.29,8.91a40.41,40.41,0,0,1-.81,9.93H84.29c5.65.23,10.59,4.28,7.1,10.93.8,2.9.92,6.3-1.24,7.65.27,4.57-1,7.41-3.37,9.65A11.42,
          11.42,0,0,1,85,84.63c-1.83,2.58-3.31,2-6.19,2h-23c-3.64,0-5.62-1-8-4V57C54.72,55.17,58.36,45.8,60.2,39.65v-8Z"/></svg>
        </figcaption>
      </figure>
    `;
  }
}
export const charactersView = new CharactersView();
