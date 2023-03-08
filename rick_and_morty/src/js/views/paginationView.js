import View from "./View.js";

class PaginationView extends View {
  _containerEl = document.querySelector(".pagination__list");

  addHandlerClick(handler) {
    this._containerEl.addEventListener("click", function (e) {
      // e.preventDefault();
      const btn = e.target.closest(".pagination__link");

      if (!btn) return;

      const goTo = btn.dataset.goto;

      handler(goTo);
    });
  }

  _generateMarkup() {
    const currentPage = this._data.nextPage
      ? this._data.nextPage.slice(48) - 1
      : this._data.pagesNum;

    if (!this._data.prevPage) {
      return `
      <li class="pagination__link pagination__link--prev disabled" data-goto="prevPage">
        <a href="#">&lt; Previous</a>
      </li>
      <li><p>${currentPage} of ${this._data.pagesNum}</p></li>
      <li class="pagination__link pagination__link--next"  data-goto="nextPage">
        <a href="#">Next &gt;</a
        >
      </li>
    `;
    }

    if (!this._data.nextPage) {
      return `
      <li class="pagination__link pagination__link--prev" data-goto="prevPage">
        <a href="#">&lt; Previous</a>
      </li>
      <li><p>${currentPage} of ${this._data.pagesNum}</p></li>
      <li class="pagination__link pagination__link--next disabled"  data-goto="nextPage">
        <a href="#">Next &gt;</a
        >
      </li>
    `;
    }

    return `
      <li class="pagination__link pagination__link--prev" data-goto="prevPage">
        <a href="#">&lt; Previous</a>
      </li>
      <li><p>${currentPage} of ${this._data.pagesNum}</p></li>
      <li class="pagination__link pagination__link--next"  data-goto="nextPage">
        <a href="#">Next &gt;</a
        >
      </li>
    `;
  }
}
export const paginationView = new PaginationView();
