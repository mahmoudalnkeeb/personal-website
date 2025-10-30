import { h } from "../lib/index.js";

export const Nav = () => {
  const current = typeof location !== "undefined" ? location.pathname : "/";
  const active = (path) => (current === path ? "page" : "");

  return h("nav", {}, [
    h("div", { class: "nav-inner" }, [
      h("ul", {}, [
        h("li", {}, [
          h("a", { href: "/", "data-link": "", "aria-current": active("/") }, [
            "Home",
          ])
        ]),
        h("li", {}, [
          h(
            "a",
            { href: "/experience", "data-link": "", "aria-current": active("/experience") },
            ["Experience"],
          ),
        ]),
        h("li", {}, [
          h(
            "a",
            { href: "/projects", "data-link": "", "aria-current": active("/projects") },
            ["Projects"],
          ),
        ]),
        h("li", {}, [
          h(
            "a",
            { href: "/skills", "data-link": "", "aria-current": active("/skills") },
            ["Skills"],
          ),
        ]),
      ]),
    ]),
  ]);
};


