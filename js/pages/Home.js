import { h } from "../lib/index.js";
import { Nav } from "../componants/Nav.js";

export const Home = () =>
  h("main", {}, [
    Nav(),
    h("h1", {}, ["Mahmoud Alnakeeb"]),
    h("div", { class: "job-title" }, [
      h("span", { class: "role" }, ["NodeJS Backend Developer"]),
      h("span", { class: "company-empty" }, [""]),
    ]),
    h(
      "p",
      {},
      [
        "Node.js Developer with 2 years of experience solving business problems with clean, efficient backend solutions. Specializes in RESTful and real-time APIs, containerization, and cloud deployment. Focused on API security, multi-tenant architectures, testing, and reliable production code.",
      ],
    ),
    // Social links updated with contact info
    h("ul", { class: "socials" }, [
      h(
        "li",
        {},
        [
          h(
            "a",
            { href: "https://www.linkedin.com/in/mahmoud-alnakeeb/", target: "_blank" },
            [h("i", { class: "fa-brands fa-linkedin" }, [])],
          ),
        ],
      ),
      h(
        "li",
        {},
        [
          h(
            "a",
            { href: "https://github.com/mahmoudalnkeeb", target: "_blank" },
            [h("i", { class: "fa-brands fa-square-github" }, [])],
          ),
        ],
      ),
      h(
        "li",
        {},
        [
          h(
            "a",
            { href: "mailto:mahmoudalnakeeb@outlook.com" },
            [h("i", { class: "fa-solid fa-at" }, [])],
          ),
        ],
      ),
      h(
        "li",
        {},
        [
          h(
            "a",
            { href: "tel:+201140485617" },
            [h("i", { class: "fa-solid fa-phone" }, [])],
          ),
        ],
      ),
      h(
        "li",
        {},
        [
          h(
            "a",
            { href: "/Mahmoud_Alnakeeb_Resume.pdf", target: "_blank" },
            [h("i", { class: "fa-solid fa-file-alt" }, [])],
          ),
        ],
      ),
    ])
  ]);


