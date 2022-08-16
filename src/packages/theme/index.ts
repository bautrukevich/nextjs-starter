import { LocalStorage } from "@/packages/storage";
import { ThemeValue } from "@/packages/theme/ThemeValue";
import { Theme } from "@/packages/theme/Theme";

const valueFactory = ThemeValue.fromString;
const storage = new LocalStorage(valueFactory);
const theme = new Theme(storage);

export { theme };
