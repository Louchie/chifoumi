import "./App.css";
import { useContext } from "react";
import ButtonView from "./views/ButtonView";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import NotificationView from "./views/NotificationView";
import { ThemeContext } from "./contexts/ThemeContext";
import NotificationProvider from "./contexts/NotificationContext";
import AuthProvider from "./contexts/AuthContext";
import SecurityView from "./views/SecurityView";
import PrivateRoute from "./components/PrivateRoute";
import FormView from "./views/FormView";
import HomeView from "./views/HomeView";
import GameView from "./views/GameView";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className="App"
      style={{
        backgroundColor: theme === "light" ? "black" : "white",
        color: theme === "light" ? "white" : "black",
      }}
    >
      <BrowserRouter>
        <AuthProvider>
          <NotificationProvider>
            <Routes>
              <Route path="/security" element={<SecurityView />} />
              <Route path="/form" element={<FormView />} />
              <Route
                path="/form-init"
                element={
                  <FormView
                    initialValues={{
                      title: "John",
                      date: "2021-01-01",
                      userId: "2",
                    }}
                  />
                }
              />
              <Route
                path="/form-init-props"
                element={
                  <FormView
                    viaProps={true}
                    initialValues={{
                      title: "John",
                      date: "2021-01-01",
                      userId: "2",
                    }}
                  />
                }
              />
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <AppLayout />
                  </PrivateRoute>
                }
              >
                <Route path="/" element={<HomeView/>} />
                <Route path="/buttons" element={<ButtonView />} />
                <Route path="/notifications" element={<NotificationView />} />
                <Route path="/game" element={<GameView/>} />
                
              </Route>
            </Routes>
          </NotificationProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}
//<Button key={button.title} {...button}/>    <=>   React.createElement(Button, {key: button.title, ...button})

export default App;
