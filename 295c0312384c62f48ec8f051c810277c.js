// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }
      
      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module;

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module() {
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({3:[function(require,module,exports) {
const t=document.querySelector(".chart-wrapper"),e=[];fetch("../dist/data.json").then(function(t){return t.json()}).then(function(n){for(let a=0;a<n.length;a++){const s=document.createElement("div");s.classList.add("bar-chart"),t.appendChild(s);const o=Math.ceil(t.offsetWidth/n.length),d=Math.ceil(n[a].amount);s.style.width=o-10+"px",s.style.height=3*d+"px";const c=document.createElement("span");s.appendChild(c),e.push(n[a].day),c.textContent=n[a].day,c.style.top=3*d+10+"px";const i=document.createElement("span");s.appendChild(i),s.addEventListener("mouseover",()=>{i.classList.add("span-amount"),i.textContent="$"+n[a].amount}),s.addEventListener("mouseout",()=>{i.classList.remove("span-amount"),i.textContent=""})}const a=(new Date).toLocaleString("en-GB",{weekday:"short"}).toLowerCase(),s=e.indexOf(a);t.children[s].classList.add("active")});
},{}]},{},[3])