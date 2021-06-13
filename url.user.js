// ==UserScript==
// @name            URL-touhidurrr
// @name:en         URL-touhidurrr
// @version         0.0.11
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

(function() {
  let excludeList = [
    'ugadmission.buet.ac.bd',
    'uga1.buet.ac.bd',
    'touhidur',
    'localhost'
  ];

  if (window.location.href.startsWith('http://')) {
    if (!excludeList.includes(window.location.hostname)) {
      window.location.replace('https' + window.location.href.slice(4));
    }
  }

  else if (window.location.href.startsWith('https://')) {
    document.addEventListener("DOMContentLoaded", function(e) {
      let links = document.getElementsByTagName('a');
      for (let link of links) {
        if (link.href.startsWith('http://')) {
          let ln = link.href.slice(4);
          if (!excludeList.includes(ln.split('/')[0])) link.href = 'https' + ln;
          console.log('Unsafe URL changed to => ' + link.href)
        }
      }
    });
  }
})();
