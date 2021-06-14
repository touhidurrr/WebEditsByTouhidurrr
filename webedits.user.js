// ==UserScript==
// @name            WebEditsByTouhidurrr
// @name:en         WebEditsByTouhidurrr
// @version         0.0.22
// @description     WebEditsByTouhidurrr is an UserScript written in Javascript that does nothing but fixing the web as touhidurrr likes. Simply it's my personal UserScript.
// @description:en  WebEditsByTouhidurrr is an UserScript written in Javascript that does nothing but fixing the web as touhidurrr likes. Simply it's my personal UserScript.
// @author          touhidurrr
// @run-at          document-end
// @icon            https://touhidur.xyz/favicon.png
// @namespace       https://github.com/touhidurrr
// @homepageURL     https://touhidur.xyz/
// @supportURL      https://github.com/touhidurrr/WebEditsByTouhidurrr/issues
// @updateURL       https://raw.githubusercontent.com/touhidurrr/WebEditsByTouhidurrr/main/meta/webedits.meta.js
// @downloadURL     https://raw.githubusercontent.com/touhidurrr/WebEditsByTouhidurrr/main/webedits.user.js
// @grant           none
// @match           https://*.wordpress.com/*
// ==/UserScript==

(function () {
  'use strict';
  Element.prototype.remove = function () {
    this.parentElement.removeChild(this);
  };
  NodeList.prototype.remove = HTMLCollection.prototype.remove = function () {
    for (let i = this.length - 1; i > -1; i--) {
      if (this[i] && this[i].parentElement) {
        this[i].parentElement.removeChild(this[i]);
      }
    }
  };
  document.getElementsByTagName('script').remove();
  document.getElementById('marketingbar').remove();
})();
