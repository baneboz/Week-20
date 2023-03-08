// import { API_URL, START_PAGE } from "./config.js";
import { getJSON } from "./helpers.js";

export const state = {
  characters: [],
  info: {},
};

export const loadCharacters = async function (url) {
  try {
    const data = await getJSON(url);

    state.characters = data.results;
    state.info.pagesNum = data.info.pages;
    state.info.prevPage = data.info.prev;
    state.info.nextPage = data.info.next;
  } catch (err) {
    throw err;
  }
};
