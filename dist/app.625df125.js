parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"A2T1":[function(require,module,exports) {
var t=document.querySelector(".chart-wrapper"),e=[];fetch("../dist/data.json").then(function(t){return t.json()}).then(function(n){for(var a=function(a){var o=document.createElement("div");o.classList.add("bar-chart"),t.appendChild(o);var d=Math.ceil(t.offsetWidth/n.length),s=Math.ceil(n[a].amount);o.style.width=d-10+"px",o.style.height=3*s+"px";var r=document.createElement("span");o.appendChild(r),e.push(n[a].day),r.textContent=n[a].day,r.style.top=3*s+10+"px";var c=document.createElement("span");o.appendChild(c),o.addEventListener("mouseover",function(){c.classList.add("span-amount"),c.textContent="$"+n[a].amount}),o.addEventListener("mouseout",function(){c.classList.remove("span-amount"),c.textContent=""})},o=0;o<n.length;o++)a(o);var d=(new Date).toLocaleString("en-GB",{weekday:"short"}).toLowerCase(),s=e.indexOf(d);t.children[s].classList.add("active")});
},{}]},{},["A2T1"], null)
//# sourceMappingURL=/app.625df125.js.map