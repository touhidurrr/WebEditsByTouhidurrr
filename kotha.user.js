// ==UserScript==
// @name            kotha
// @version         0.0.15
// @author          touhidurrr
// @description     An UserScript that I made for my friend to highlight the name of theperson he likes.
// @run-at          document-idle
// @namespace       http://tampermonkey.net/
// @icon            https://touhidur.xyz/favicon.png
// @homepageURL     https://touhidur.xyz/
// @updateURL       https://raw.githubusercontent.com/touhidurrr/WebEditsByTouhidurrr/main/kotha.user.js
// @downloadURL     https://raw.githubusercontent.com/touhidurrr/WebEditsByTouhidurrr/main/kotha.user.js
// @grant           none
// @match           http*://*
// ==/UserScript==

(function() {
  document.body.innerHTML = document.body.innerHTML.replace(/kotha/gi, function(s){return '<div style="color:black;background:yellow;">' + s + '<\/div>';});
})();
