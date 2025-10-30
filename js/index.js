import { Router, h } from "./lib/index.js";
import { Home } from "./pages/Home.js";
import { Experience } from "./pages/Experience.js";
import { Projects } from "./pages/Projects.js";
import { Skills } from "./pages/Skills.js";

const NotFound = () =>
  h("main", {}, [
    h("h1", {}, ["404"]),
    h("p", {}, ["The page you are looking for was not found."]),
  ]);

const routes = {
  "/": Home,
  "/experience": Experience,
  "/projects": Projects,
  "/skills": Skills,
  "/404": NotFound,
};

const router = Router(routes, { mode: "history" });
router.start();


