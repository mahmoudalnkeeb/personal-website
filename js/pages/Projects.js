import { h } from "../lib/index.js";
import { Nav } from "../componants/Nav.js";

const toBrandClass = (name) =>
  `brand-` + name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const Badge = (label) =>
  h("li", { class: `skill-badge ${toBrandClass(label)}` }, [label]);

const TechList = (items) =>
  h("ul", { class: "skill-list" }, items.map((t) => Badge(t)));

const Project = ({ name, description, technologies }) =>
  h("section", { class: "project-card" }, [
    h("h2", {}, [name]),
    h("p", {}, [description]),
    technologies && technologies.length ? h("div", { class: "tech" }, [TechList(technologies)]) : "",
  ]);

export const Projects = () =>
  h("main", { class: "projects" }, [
    Nav(),
    h("h1", {}, ["Projects"]),
    h("div", { class: "cards" }, [
      Project({
        name: "Shoperz E-Commerce REST API",
        description:
          "Full-featured e-commerce API with scalable architecture, JWT auth, RBAC, payments, uploads, email verification, Swagger, centralized errors, logging, and security hardening.",
        technologies: [
          "Node.js", "ExpressJS", "MongoDB", "Mongoose", "JWT", "Stripe", "PayPal", "Swagger", "Winston", "Joi", "Multer", "Nodemailer", "Firebase", "Vercel",
        ],
      }),
      Project({
        name: "Aiticle – AI-Powered Article Generation System",
        description:
          "Automated article generation platform using LLMs with modular Node.js architecture, structured outputs, role-based generation, schema validation, and robust error handling.",
        technologies: [
          "Node.js", "Groq SDK", "Llama3-8b", "JSON Schema", "Prompt Engineering", "File System API",
        ],
      }),
    ]),
  ]);


