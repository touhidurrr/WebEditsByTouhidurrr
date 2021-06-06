// ==UserScript==
// @name            WebEditsByTouhidurrr
// @name:en         WebEditsByTouhidurrr
// @namespace       http://tampermonkey.net/
// @version         0.0.13
// @description     WebEditsByTouhidurrr is an UserScript written in Javascript that does nothing but fixing the web as touhidurrr likes. Simply it's my personal UserScript.
// @description:en  WebEditsByTouhidurrr is an UserScript written in Javascript that does nothing but fixing the web as touhidurrr likes. Simply it's my personal UserScript.
// @author          touhidurrr
// @homepageURL     https://touhidur.xyz/
// @updateURL       https://github.com/touhidurrr/WebEditsByTouhidurrr/raw/main/main.meta.js
// @downloadURL     https://github.com/touhidurrr/WebEditsByTouhidurrr/raw/main/main.user.js
// @match           http*://*.wordpress.com/*
// @icon            https://touhidur.xyz/favicon.png
// @grant           none
// ==/UserScript==

'use strict';

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

document.getElementsByTagName('script').remove();
document.getElementById('marketingbar').remove();
