!function(){var e=localStorage.getItem("darkMode"),d=document.querySelector("#dark-mode-toggle"),o=document.querySelector("#dark-mode-toggle-two"),c=document.querySelector(".checkbox"),t=function(){document.body.classList.add("darkmode"),localStorage.setItem("darkMode","enabled"),c.checked=!0},a=function(){document.body.classList.remove("darkmode"),localStorage.setItem("darkMode",null),c.checked=!1};"enabled"===e&&t(),d.addEventListener("click",(function(){"enabled"!==(e=localStorage.getItem("darkMode"))?(t(),o.checked=!0):(a(),o.checked=!1)})),o.addEventListener("click",(function(){"enabled"!==(e=localStorage.getItem("darkMode"))?(t(),d.checked=!0):(a(),d.checked=!1)}))}();
//# sourceMappingURL=login.f1c6edda.js.map
