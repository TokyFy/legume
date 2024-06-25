import _ from "lodash";
import data from "./data.json" with { type: "json" };

/**
 * @typedef {import('../types').Artist} Artist
 */

class Artists {
  /**
   * @type {Array<Artist>}
   */
  #artists = [];

  constructor() {
    this.#artists = data.artists;
  }

  get artists() {
    return this.#artists;
  }

  sort(by) {
    this.#artists = _.sortBy(this.#artists,[by]);
  }
}

export const artistData = new Artists();
