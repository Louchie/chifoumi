import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Button from "../components/Button";
import { AuthContext } from "../contexts/AuthContext";
import { NotificationContext } from "../contexts/NotificationContext";
import { ThemeContext } from "../contexts/ThemeContext";


export default function AppLayout() {
  const { notifs } = useContext(NotificationContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, logout } = useContext(AuthContext);
  const notifCount = notifs.length;
  const buttons = [
    {
      variant: "rounded",
      title: "",
      onClick: toggleTheme,
    },
  ];

  return (
    <div >
      <div className="flex justify-between p-10 mb-20 shadow-2xl">
      <img className="w-20" src={"/logo.png"} alt="logo" />
        <Button className=" w-28 p-4" component={Link} to="/">
          Home
        </Button>
        <Button className=" w-28 p-4" component={Link} to="/game">
          Jouer
        </Button>
        {buttons.map((button) => (
        <Button key={button.title} {...button} />
      ))}
        {user && <Button  className=" w-28 p-4" onClick={logout}>Logout</Button>}
      </div>
      <Outlet />
    </div>
  );
}
