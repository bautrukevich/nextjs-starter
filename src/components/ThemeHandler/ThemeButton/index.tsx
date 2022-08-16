import { useTheme } from "./presenter";

export function ThemeButton() {
  const { setDark, setLight, setSystem } = useTheme();

  return (
    <>
      <button onClick={setDark}>Dark</button>
      <button onClick={setLight}>Light</button>
      <button onClick={setSystem}>System</button>
    </>
  );
}
