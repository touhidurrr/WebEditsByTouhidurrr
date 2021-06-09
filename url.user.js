// ==UserScript==
// @name            URL-touhidurrr
// @name:en         URL-touhidurrr
// @version         0.0.6
// @author          touhidurrr
// @description     An URL redirection Manager for touhidurrr
// @description:en  An URL redirection Manager for touhidurrr
// @run-at          document-start
// @namespace       http://tampermonkey.net/
// @icon            https://touhidur.xyz/favicon.png
// @homepageURL     https://touhidur.xyz/
// @updateURL       https://github.com/touhidurrr/WebEditsByTouhidurrr/raw/main/meta/url.meta.js
// @downloadURL     https://github.com/touhidurrr/WebEditsByTouhidurrr/raw/main/url.user.js
// @grant           none
// @include         http://*
// ==/UserScript==

(function() {
  let excludeList = [
    'ugadmission.buet.ac.bd',
    'uga1.buet.ac.bd'
  ];
  if (!excludeList.includes(window.location.hostname)) window.location.replace('https' + window.location.href.slice(4));
})();
