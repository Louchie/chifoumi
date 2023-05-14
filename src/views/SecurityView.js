import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function SecurityView() {
  const { user, login, register } = useContext(AuthContext);
  const navigate = useNavigate();
  const { state } = useLocation();
  const pathname = state?.to ?? "/";

  useEffect(() => {
    // eslint-disable-next-line eqeqeq
    if (user != false) return navigate("/");
  }, [user, navigate]);

  if (user !== false) return <></>;

  function handleLogin(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    login(data.get("email"), data.get("password"))
      .then(() => {
        navigate(pathname);
      })
      .catch((e) => console.error("login failed", e.message));
  }
  function handleRegister(event) {
    event.preventDefault();
    const data = Object.values(
      Object.fromEntries(new FormData(event.currentTarget))
    );
    register(...data)
      .then(() => {
        navigate(pathname);
      })
      .catch((e) => console.error("login failed", e.message));
  }

  return (
    <div>
      <div className="flex justify-center mt-10">
        <img className="pt-5 w-16 mr-5 " src={"/logo.png"} alt="logo" />
        <h1 className="text-3xl font-bold pt-10">Chi Fou Mi</h1>
      </div>
      <div className="grid grid-cols-2 gap-2 pt-20">
        <div className="bg-blue-400  h-3/4 m-10">
          {/* <img className="h-14 center mt-10 " src={"/key.png"} alt="Log in" ></img> */}
          <p className="text-xl font-bold pt-20 pb-10">
            Connectez-vous pour jouer !
          </p>
          <div>
            <form onSubmit={handleLogin}>
              <p className="mb-2 text-sm">Identifiant</p>
              <input
                className="mb-8 rounded-lg shadow-2xl text-black"
                name="email"
                type="email"
                autoComplete="username"
              />
              <p className="mb-2 text-sm">Mot de passe</p>
              <input
                className="mb-8 rounded-lg shadow-2xl text-black"
                name="password"
                type="password"
                autoComplete="current-password"
              />
              <br />
              <input className="mr-4 font-bold" type="submit" value="Login" />
            </form>
          </div>
        </div>

        <div className="bg-slate-300 m-10">
          <p className="text-xl font-bold pt-10 pb-5 "> S'inscrire</p>
          <br />
          <form onSubmit={handleRegister}>
            <p className="mb-2 text-sm">Email</p>
            <input
              className="mb-8 rounded-lg text-black"
              name="email"
              type="email"
              autoComplete="username"
            />
            <p className="mb-2 text-sm">Pseudo</p>
            <input className="mb-8 rounded-lg text-black" name="surname" />
            <br />
            <p className="mb-2 text-sm">Mot de passe</p>
            <input
              className="mb-8 rounded-lg text-black"
              name="password"
              type="password"
              autoComplete="current-password"
            />
            <br />
            <input className="mb-10 font-bold" type="submit" value="Register" />
          </form>
        </div>
      </div>
    </div>
  );
}
