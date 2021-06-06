// ==UserScript==
// @name            WebEditsByTouhidurrr
// @name:en         WebEditsByTouhidurrr
// @version         0.0.15
// @author          touhidurrr
// @description     WebEditsByTouhidurrr is an UserScript written in Javascript that does nothing but fixing the web as touhidurrr likes. Simply it's my personal UserScript.
// @description:en  WebEditsByTouhidurrr is an UserScript written in Javascript that does nothing but fixing the web as touhidurrr likes. Simply it's my personal UserScript.
// @namespace       http://tampermonkey.net/
// @icon            https://touhidur.xyz/favicon.png
// @homepageURL     https://touhidur.xyz/
// @updateURL       https://github.com/touhidurrr/WebEditsByTouhidurrr/raw/main/main.user.js
// @downloadURL     https://github.com/touhidurrr/WebEditsByTouhidurrr/raw/main/main.user.js
// @grant           none
// @match           https://*.wordpress.com/*
// ==/UserScript==

Element.prototype.remove = function() {
  this.parentElement.removeChild(this);
}

NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
  for(var i = this.length - 1; i >= 0; i--) {
    if(this[i] && this[i].parentElement) {
      this[i].parentElement.removeChild(this[i]);
    }
  }
}

(function() {
  'use strict';
  document.getElementsByTagName('script').remove();
  document.getElementById('marketingbar').remove();
})();
