import View from "./View.js";

class CharactersView extends View {
  _containerEl = document.querySelector(".app__container");

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
          <button class="card__btn">Like</button>
        </figcaption>
      </figure>
    `;
  }
}
export const charactersView = new CharactersView();
