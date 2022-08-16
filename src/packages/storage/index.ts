import { LocalStorage } from "@/packages/storage/LocalStorage";

export interface Storable {
  asString(): string;
}

export interface Storage<UKey, TValue> {
  getItem(key: UKey): Promise<TValue | null>;
  setItem(key: UKey, value: TValue): Promise<void>;
  removeItem(key: UKey): Promise<void>;
}

export { LocalStorage } from "./LocalStorage";
