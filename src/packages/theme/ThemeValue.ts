import { Storable } from "@/packages/storage";

class ThemeValueIsEmpty extends Error {
  constructor() {
    super("Theme value must be not empty string.");
    this.name = "ThemeValueIsEmpty";

    Object.setPrototypeOf(this, ThemeValueIsEmpty.prototype);
  }
}

const AVAILABLE_THEMES = {
  DARK: "dark",
  LIGHT: "light",
};

export class ThemeValue implements Storable {
  readonly #value: string;

  private constructor(value: string) {
    const trimmedValue = value.trim();

    if (trimmedValue === "") {
      throw new ThemeValueIsEmpty();
    }

    this.#value = trimmedValue;
  }

  static fromString(value: string): ThemeValue {
    return new ThemeValue(value);
  }

  static dark(): ThemeValue {
    return new ThemeValue(AVAILABLE_THEMES.DARK);
  }

  static light(): ThemeValue {
    return new ThemeValue(AVAILABLE_THEMES.LIGHT);
  }

  isDark(): boolean {
    return this.isEqualTo(ThemeValue.dark());
  }

  isEqualTo(other: ThemeValue) {
    return this.#value === other.#value;
  }

  asString(): string {
    return this.#value;
  }
}
