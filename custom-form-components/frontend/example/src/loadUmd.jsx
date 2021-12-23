export function loadUmd(modules, src, callback) {
  const prevDefine = window.define;
  window.define = function(moduleNames, fn) {
    const args = moduleNames.map(key => modules[key]);
    const res = fn.apply(this, args);
    callback(res);
    window.define = prevDefine;
  };
  window.define.amd = true;
  loadJs(src, console.log, console.error);
}

function loadJs(src, callback, onerror) {
  if (!document.head) throw "Can't load js file, it works on a browser only";
  const script = document.createElement("script");
  if (callback) script.onload = callback;
  if (onerror) script.onload = onerror;
  script.src = src;
  document.head.appendChild(script);
}
