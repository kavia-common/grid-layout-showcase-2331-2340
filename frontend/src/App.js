import React, { useEffect, useMemo, useState } from "react";
import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar.jsx";
import ControlPanel from "./components/ControlPanel.jsx";
import GridCanvas from "./components/GridCanvas.jsx";
import Footer from "./components/Footer.jsx";
import { useGridState } from "./hooks/useGridState";

// PUBLIC_INTERFACE
function App() {
  /**
   * App root rendering:
   * - Ocean themed layout with Navbar, ControlPanel, GridCanvas, and Footer.
   * - Theme toggle controls a data attribute that can be used for future dark mode.
   */
  const systemPrefersDark = useMemo(
    () => window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches,
    []
  );
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("app-theme") || (systemPrefersDark ? "dark" : "light");
    } catch {
      return "light";
    }
  });

  const { config, styles, setColumns, setGap, setRowHeight, toggleResponsive, toggleGuides } =
    useGridState();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("app-theme", theme);
    } catch {
      // ignore
    }
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <div className="min-h-screen flex flex-col bg-ocean-soft transition-colors">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main className="flex-1" role="main" aria-label="Grid layout showcase main content">
        <div className="bg-app-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
            <h1 className="text-2xl sm:text-3xl font-semibold text-[color:var(--color-text)]">
              Grid Layout Showcase
            </h1>
            <p className="mt-2 text-sm text-[color:var(--color-text-subtle)] max-w-2xl">
              Experiment with a responsive grid. Adjust columns, gaps, and row height. Cards below
              update instantly.
            </p>
          </div>
        </div>

        <ControlPanel
          config={config}
          setColumns={setColumns}
          setGap={setGap}
          setRowHeight={setRowHeight}
          toggleResponsive={toggleResponsive}
          toggleGuides={toggleGuides}
        />

        <GridCanvas config={config} styles={styles} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
