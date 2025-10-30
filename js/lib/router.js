import { $, render } from "./helpers.js";

export const Router = (routes, options = { mode: "history" }) => {
  const mode = options.mode === "hash" ? "hash" : "history";

  const getPath = () => (mode === "hash" ? (location.hash.slice(1) || "/") : location.pathname);
  const setPath = (path) => {
    if (mode === "hash") {
      if (!path.startsWith("#/")) path = `#${path.startsWith("/") ? path : "/" + path}`;
      location.hash = path;
    } else {
      history.pushState({}, "", path);
    }
  };

  const matchRoute = (path) => routes[path] || routes["/404"]; 

  const renderCurrent = () => {
    const Component = matchRoute(getPath());
    const root = $("#app");
    if (!Component) {
      render(root, "");
      return;
    }
    const node = typeof Component === "function" ? Component() : Component;
    render(root, node);
  };

  const navigate = (path) => {
    setPath(path);
    renderCurrent();
  };

  const handleLink = (e) => {
    const link = e.target.closest("a[data-link]");
    if (!link) return;
    e.preventDefault();
    const href = link.getAttribute("href");
    navigate(href);
  };

  const start = () => {
    if (mode === "hash") {
      window.addEventListener("hashchange", renderCurrent);
      // Normalize initial hash for direct hits
      if (!location.hash) {
        location.hash = "#/";
      }
      renderCurrent();
    } else {
      window.addEventListener("popstate", renderCurrent);
      renderCurrent();
    }
    document.addEventListener("click", handleLink);
  };

  return Object.freeze({ start, navigate, mode });
};
