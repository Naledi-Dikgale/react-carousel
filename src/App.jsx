import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import Services from "./components/Services";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      id="app"
      className={
        theme === "dark"
          ? "bg-gradient-to-r from-gray-400 to-gray-600"
          : "bg-secondary-dark"
      }
    >
      <main className="">
        <section id="services">
          <Services />
        </section>
      </main>
    </div>
  );
}

export default App;
