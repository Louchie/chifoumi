import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../contexts/ThemeContext";

function Button({
  color,
  variant = "default",
  title,
  onClick,
  component: Component = "button",
  children,
  ...rest
}) {
  const { theme } = useContext(ThemeContext);
  const style = {
    backgroundColor: color ?? (theme === "light" ? "dark" : "white"),
    color: theme === "light" ? "white" : "black",
    textDecoration: "none",
    border: "1px solid " + (theme === "light" ? "white" : "black"),
  };

  switch (variant) {
    case "rounded":
      style.height = "50px";
      style.width = "50px";
      title = title[0];
      break;
    default:
      break;
  }

  return (
    <Component style={style} onClick={onClick} {...rest}>
      {children || title}
    </Component>
  );
}

export default Button;
