export function createStore(initialState = {}) {
  let state = { ...initialState };
  const listeners = new Set();

  const get = (key) => (key ? state[key] : { ...state });

  const set = (key, value) => {
    if (state[key] === value) return;
    state = { ...state, [key]: value };
    queueMicrotask(() => listeners.forEach((fn) => fn(state)));
  };

  const subscribe = (fn) => {
    listeners.add(fn);
    return () => listeners.delete(fn);
  };

  return Object.freeze({ get, set, subscribe });
}
