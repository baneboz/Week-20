import View from "./View.js";

class ModalView extends View {
  _containerEl = document.querySelector(".modal");
  _modalTargetContainer = document.querySelector(".cards__container");
  _overlay = document.querySelector(".overlay");

  addHandlerClick(handler) {
    const modal = this._containerEl;
    const overlay = this._overlay;
    const closeBtn = this._closeBtn;

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
    console.log(char);
    return `
      <div class="modal__inner">

        <div class="modal__heading">
          <img src="${char.image}" alt="${char.name}" />
        </div>

        <div class="modal__content">
          <h3>${char.name}</h3>
          <p>${char.status} | ${char.species} | ${char.gender}</p>
          <p>
            <span class="">Place of Origin:</span>
            <br /> 
            ${char.origin.name}
          </p>
          <p>
            <span class="">
              Last know Location: 
            </span>
            <br />
            ${char.location.name}
          </p>
        </div>
      </div>
    `;
  }
}

export const modalView = new ModalView();
