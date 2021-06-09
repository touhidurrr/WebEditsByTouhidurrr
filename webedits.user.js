// ==UserScript==
// @name            WebEditsByTouhidurrr
// @name:en         WebEditsByTouhidurrr
// @version         0.0.18
// @author          touhidurrr
// @description     WebEditsByTouhidurrr is an UserScript written in Javascript that does nothing but fixing the web as touhidurrr likes. Simply it's my personal UserScript.
// @description:en  WebEditsByTouhidurrr is an UserScript written in Javascript that does nothing but fixing the web as touhidurrr likes. Simply it's my personal UserScript.
// @run-at          document-end
// @namespace       http://tampermonkey.net/
// @icon            https://touhidur.xyz/favicon.png
// @homepageURL     https://touhidur.xyz/
// @updateURL       https://github.com/touhidurrr/WebEditsByTouhidurrr/raw/main/meta/webedits.user.js
// @downloadURL     https://github.com/touhidurrr/WebEditsByTouhidurrr/raw/main/webedits.user.js
// @grant           none
// @match           https://*.wordpress.com/*
// ==/UserScript==

(function() {
  'use strict';
  Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
  }
  NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(let i = this.length - 1; i > -1; i--) {
      if(this[i] && this[i].parentElement) {
        this[i].parentElement.removeChild(this[i]);
      }
    }
  }
  document.getElementsByTagName('script').remove();
  document.getElementById('marketingbar').remove();
})();
