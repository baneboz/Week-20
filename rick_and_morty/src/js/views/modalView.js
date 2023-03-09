import View from "./View.js";

class ModalView extends View {
  _containerEl = document.querySelector(".modal");
  _modalTargetContainer = document.querySelector(".cards__container");
  _overlay = document.querySelector(".overlay");

  addHandlerClick(handler) {
    const modal = this._containerEl;
    const overlay = this._overlay;

    this._modalTargetContainer.addEventListener("click", function (e) {
      const modalTarget = e.target.closest(".card");

      if (!modalTarget) return;

      handler(modalTarget.dataset.id);

      modal.classList.remove("hidden");
      overlay.classList.remove("hidden");
    });

    overlay.addEventListener("click", function (e) {
      modal.classList.add("hidden");
      overlay.classList.add("hidden");
    });
  }

  _generateMarkup() {
    const char = this._data.singleCharacter;

    return `
      <div class="">
        <h3>${char.name}</h3>
        <p>Gender: ${char.gender}</p>
        <p>Specie: ${char.species}</p>
        <p>Status: ${char.status}</p>
      </div>
    `;
  }
}

export const modalView = new ModalView();
