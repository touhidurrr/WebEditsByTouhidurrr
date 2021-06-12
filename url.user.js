// ==UserScript==
// @name            URL-touhidurrr
// @name:en         URL-touhidurrr
// @version         0.0.9
// @author          touhidurrr
// @description     An URL redirection Manager for touhidurrr
// @description:en  An URL redirection Manager for touhidurrr
// @run-at          document-start
// @namespace       http://tampermonkey.net/
// @icon            https://touhidur.xyz/favicon.png
// @homepageURL     https://touhidur.xyz/
// @updateURL       https://raw.githubusercontent.com/touhidurrr/WebEditsByTouhidurrr/main/meta/url.meta.js
// @downloadURL     https://raw.githubusercontent.com/touhidurrr/WebEditsByTouhidurrr/main/url.user.js
// @grant           none
// @include         http*
// ==/UserScript==

if (window.location.href.startsWith('http://')) (function() {
  let excludeList = [
    'ugadmission.buet.ac.bd',
    'uga1.buet.ac.bd'
  ];
  if (!excludeList.includes(window.location.hostname)) window.location.replace('https' + window.location.href.slice(4));
})();
else if (window.location.href.startsWith('https://')) {
  document.addEventListener("DOMContentLoaded", function(e) {
    let links = document.getElementsByTagName('a');
    for (let link of links) {
      if (link.href.startsWith('http://')) link.href = 'https' + link.href.slice(4);
    }
  });
}
