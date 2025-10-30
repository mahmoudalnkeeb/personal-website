function createRenderer(root = document.getElementById("app")) {
  let currentHTML = "";

  const render = (content) => {
    const html = typeof content === "function" ? content() : content;
    if (html === currentHTML) return; // avoid unnecessary re-renders
    root.innerHTML = html;
    currentHTML = html;
  };

  return Object.freeze({ render });
}
