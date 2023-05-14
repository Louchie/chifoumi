import React, { useContext } from "react";
import Button from "../components/Button";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ButtonView() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const buttons = [
    {
      variant: "squared",
      title: "",
      onClick: toggleTheme,
    },
  ];

  return (
    <div>
      {theme}
      <br />
      {buttons.map((button) => (
        <Button key={button.title} {...button} />
      ))}
    </div>
  );
}
