import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";

export const Header = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <p className="display-3 text-center fst-italic" style={{ color: theme.fgColor }}>
      A simple useContext example
    </p>
  );
};
