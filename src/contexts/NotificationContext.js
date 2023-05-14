import { createContext, useEffect, useState } from "react";

export const NotificationContext = createContext();

export default function NotificationProvider({ children }) {
  /**
   * Gestion des notifs
   */
  const [notifs, setNotifs] = useState([]);

  function deleteNotif() {
    fetch("/notifications/" + this.id, {
      method: "DELETE",
    }).then(
      (response) =>
        response.status === 200 &&
        setNotifs(notifs.filter((notif) => notif.id !== this.id))
    );
  }

  function getNotif(id) {
    return fetch("/notifications_/" + id)
      .then((response) => response.status === 200 && response.json())
      .catch((e) => console.error(e));
  }

  useEffect(() => {
    fetch("/notifications")
      .then((response) => response.json())
      .then(setNotifs);
  }, []);

  function addNotif(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    fetch("http://localhost:5001/notifications", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((newNotif) => setNotifs([...notifs, newNotif]));
  }
  return (
    <NotificationContext.Provider
      value={{
        notifs,
        addNotif,
        deleteNotif,
        getNotif,
        notifCount: notifs.length,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}
