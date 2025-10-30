import { h } from "../lib/index.js";
import { Nav } from "../componants/Nav.js";

const toBrandClass = (name) =>
  `brand-` + name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const Badge = (label) =>
  h("li", { class: `skill-badge ${toBrandClass(label)}` }, [label]);

const TechList = (items) =>
  h("ul", { class: "skill-list" }, items.map((t) => Badge(t)));

const TimelineItem = ({ title, company, location, period, bullets, tech }) =>
  h("li", { class: "timeline-item" }, [
    h("div", { class: "timeline-dot" }, []),
    h("div", { class: "timeline-content" }, [
      h("div", { class: "timeline-header" }, [
        h("h2", {}, [title]),
        h("span", { class: "period muted" }, [period]),
      ]),
      h("div", { class: "job-title" }, [
        h("span", { class: "role" }, [company]),
        h("span", { class: "company" }, [location]),
      ]),
      h("ul", {}, bullets.map((b) => h("li", {}, [b]))),
      tech && tech.length ? h("div", { class: "tech" }, [TechList(tech)]) : "",
    ]),
  ]);

export const Experience = () =>
  h("main", { class: "experience" }, [
    Nav(),
    h("h1", {}, ["Experience"]),
    h("ul", { class: "timeline" }, [
      TimelineItem({
        title: "Backend Developer",
        company: "DevGlobal • Remote",
        location: "",
        period: "January 2025 - Present",
        bullets: [
          "Built multi-tenant SaaS backend (Node.js, Bun, Express.js, MongoDB).",
          "Implemented secure JWT auth with RBAC for tenant isolation.",
          "Shipped AI chat with real-time streaming (SSE) using GPT-4 and Claude.",
          "Developed Twilio SMS/calls, messenger with Socket.io.",
          "Integrated Stripe subscriptions and AWS S3 storage.",
          "Dockerized deployment on EC2; CI/CD with GitHub Actions; Pino logging; Swagger docs.",
        ],
        tech: [
          "Node.js", "Bun", "ExpressJS", "MongoDB", "JWT", "RBAC", "GPT-4", "Claude", "SSE", "Twilio", "Socket.IO", "Stripe", "AWS", "Docker", "Pino", "Swagger", "OpenAPI",
        ],
      }),
      TimelineItem({
        title: "NodeJS Developer (Freelance)",
        company: "Multiple Clients • Remote",
        location: "",
        period: "November 2023 - January 2025",
        bullets: [
          "Developed RESTful APIs, microservices, and scraping tools with performance focus.",
          "Reduced memory by 50% in image conversion via streaming and chunking.",
          "Delivered automation and AI-powered WordPress content system (Groq AI).",
          "Implemented scraping with Puppeteer and scheduling via cron/systemd.",
        ],
        tech: [
          "Node.js", "RESTful APIs", "Microservices", "Puppeteer", "Groq AI", "WordPress", "ExpressJS", "EJS", "Cron", "Systemd", "CSV",
        ],
      }),
    ]),
  ]);


