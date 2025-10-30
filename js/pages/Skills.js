import { h } from "../lib/index.js";
import { Nav } from "../componants/Nav.js";

const toBrandClass = (name) =>
  `brand-` + name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const Badge = (label) =>
  h("li", { class: `skill-badge ${toBrandClass(label)}` }, [label]);

const List = (title, items) =>
  h("section", { class: "skill-section" }, [
    h("h2", {}, [title]),
    h("ul", { class: "skill-list" }, items.map((i) => Badge(i))),
  ]);

export const Skills = () =>
  h("main", { class: "skills" }, [
    Nav(),
    h("h1", {}, ["Skills"]),
    h("div", { class: "skills-grid" }, [
      List("Programming & Runtimes", [
        "JavaScript", "Typescript", "Golang", "NodeJS", "Bun",
      ]),
      List("Frameworks & Libraries", [
        "ExpressJS", "NestJS", "Socket.IO",
      ]),
      List("Databases & Caches", [
        "PostgreSQL", "MongoDB", "Redis",
      ]),
      List("Infra & DevOps", [
        "Linux", "Docker", "Nginx", "AWS",
      ]),
      List("Payments & Messaging", [
        "Stripe", "Twilio", "RabbitMQ", "Firebase",
      ]),
      List("Tools & Practices", [
        "Git", "Postman", "Swagger", "ESLint", "Prettier", "Pino", "Joi", "Jest", "Bun Test", "TDD", "Modular Design", "Microservices", "Multi-Tenant Systems", "API Security", "RBAC", "Problem-Solving", "Teamwork", "Ownership",
      ]),
    ]),
  ]);


