import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";

export default function Controller() {
  const { setLightTheme, setDarkTheme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="d-flex justify-content-center gap-2">
      <button className="btn btn-secondary" onClick={setLightTheme}>light</button>
      <button className="btn btn-dark" onClick={setDarkTheme}>dark</button>
      <button className="btn btn-primary" onClick={toggleTheme}>toggle theme</button>
    </div>
  );
}
