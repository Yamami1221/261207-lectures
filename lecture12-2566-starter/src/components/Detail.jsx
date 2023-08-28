import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";

export const Detail = () => {
  const { theme } = useContext(ThemeContext);
  return <p className="text-center" style={{ color: theme.fgColor }}>theme {theme.name} is activated</p>;
};
