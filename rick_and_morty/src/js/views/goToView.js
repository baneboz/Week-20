import View from "./View.js";

class GoToView extends View {
  _containerEl = document.querySelector(".pagination__go");

  addHandlerClick(handler) {
    const btn = this._containerEl.querySelector(".pagination__btn--go");
    const page = this._containerEl.querySelector("#pagination__num");

    btn.addEventListener("click", function (e) {
      const pageGoTo = page.value;

      if (!pageGoTo) return;
      if (pageGoTo < 1 || pageGoTo > 42) {
        alert("Number of page must be between 1 and 42");
        return;
      }

      handler(pageGoTo);
    });
  }
}
export const goToView = new GoToView();
