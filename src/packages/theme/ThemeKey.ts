import { Storable } from "@/packages/storage";

class ThemeKeyIsEmpty extends Error {
  constructor() {
    super("Theme key key must be not empty string.");
    this.name = "ThemeKeyIsEmpty";

    Object.setPrototypeOf(this, ThemeKeyIsEmpty.prototype);
  }
}

const KEY_NAME = "theme";

export class ThemeKey implements Storable {
  readonly #key: string;

  private constructor(key: string) {
    const keyTrimmed = key.trim();

    if (keyTrimmed === "") {
      throw new ThemeKeyIsEmpty();
    }

    this.#key = keyTrimmed;
  }

  static key(): ThemeKey {
    return new ThemeKey(KEY_NAME);
  }

  asString(): string {
    return this.#key;
  }
}
