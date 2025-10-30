// helpers.js

/**
 * Select a single element
 * @param {string} selector
 * @param {Element} scope
 * @returns {Element|null}
 */
export const $ = (selector, scope = document) => scope.querySelector(selector);

/**
 * Select multiple elements
 * @param {string} selector
 * @param {Element} scope
 * @returns {Element[]}
 */
export const $$ = (selector, scope = document) =>
  Array.from(scope.querySelectorAll(selector));

/**
 * Create an element with optional attributes and children
 * @param {string} tag
 * @param {object} [props]
 * @param {Array<Node|string>} [children]
 * @returns {Element}
 */
export const h = (tag, props = {}, children = []) => {
  const el = document.createElement(tag);
  Object.entries(props).forEach(([k, v]) => {
    if (k.startsWith("on") && typeof v === "function") {
      el.addEventListener(k.slice(2).toLowerCase(), v);
    } else if (k === "class") {
      el.className = v;
    } else {
      el.setAttribute(k, v);
    }
  });

  children.forEach((child) => {
    el.append(child instanceof Node ? child : document.createTextNode(child));
  });

  return el;
};

/**
 * Replace element content safely
 * @param {Element} el
 * @param {Node|string} content
 */
export const render = (el, content) => {
  if (!el) return;
  el.innerHTML = "";
  el.append(
    content instanceof Node ? content : document.createTextNode(content),
  );
};

/**
 * Simple deep clone for plain objects/arrays
 * @param {object|array} value
 * @returns {object|array}
 */
export const clone = (value) => structuredClone(value);

/**
 * Debounce function calls
 * @param {function} fn
 * @param {number} delay
 * @returns {function}
 */
export const debounce = (fn, delay = 200) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};

/**
 * Throttle function calls
 * @param {function} fn
 * @param {number} limit
 * @returns {function}
 */
export const throttle = (fn, limit = 200) => {
  let inThrottle = false;
  return (...args) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Navigate to a route (for your router)
 * @param {string} path
 */
export const navigate = (path) => {
  history.pushState({}, "", path);
  window.dispatchEvent(new Event("popstate"));
};

/**
 * Check shallow equality between two objects
 * @param {object} a
 * @param {object} b
 * @returns {boolean}
 */
export const isShallowEqual = (a, b) => {
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;
  return keysA.every((key) => a[key] === b[key]);
};

/**
 * Compose multiple functions (right to left)
 * @param  {...function} fns
 * @returns {function}
 */
export const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((v, f) => f(v), x);

/**
 * Pipe multiple functions (left to right)
 * @param  {...function} fns
 * @returns {function}
 */
export const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((v, f) => f(v), x);
