import { Storage } from "@/packages/storage";
import { ThemeKey } from "@/packages/theme/ThemeKey";
import { ThemeValue } from "@/packages/theme/ThemeValue";

const KEY_NAME = ThemeKey.key();

export class Theme {
  readonly #storage: Storage<ThemeKey, ThemeValue>;

  constructor(storage: Storage<ThemeKey, ThemeValue>) {
    this.#storage = storage;
  }

  async init() {
    const currentTheme = await this.current;

    if (
      currentTheme?.isEqualTo(ThemeValue.dark()) ||
      (currentTheme === null && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      await this.dark();
    } else {
      await this.light();
    }
  }

  get current(): Promise<ThemeValue | null> {
    return this.#storage.getItem(KEY_NAME);
  }

  async light(): Promise<void> {
    await this.#storage.setItem(KEY_NAME, ThemeValue.light());

    document.documentElement.classList.remove("dark");
  }

  async dark(): Promise<void> {
    await this.#storage.setItem(KEY_NAME, ThemeValue.dark());

    document.documentElement.classList.add("dark");
  }

  async os(): Promise<void> {
    await this.#storage.removeItem(KEY_NAME);
  }
}
