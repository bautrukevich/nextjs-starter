/* global localStorage */

import { Storable, Storage } from "@/packages/storage";

export class LocalStorage<UKey extends Storable, TValue extends Storable> implements Storage<UKey, TValue> {
  readonly #valueFactory;

  constructor(valueFactory: (value: string) => TValue) {
    this.#valueFactory = valueFactory;
  }

  getItem(key: UKey): Promise<TValue | null> {
    return new Promise<TValue | null>((resolve, reject) => {
      try {
        const data = localStorage.getItem(key.asString());

        if (data !== null) {
          const storable = this.#valueFactory(data);

          resolve(storable);
        }

        resolve(null);
      } catch (e) {
        reject(e);
      }
    });
  }

  removeItem(key: UKey): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      try {
        localStorage.removeItem(key.asString());
        resolve();
      } catch (e) {
        reject(e);
      }
    });
  }

  setItem(key: UKey, value: TValue): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      try {
        localStorage.setItem(key.asString(), value.asString());
        resolve();
      } catch (e) {
        reject(e);
      }
    });
  }
}
