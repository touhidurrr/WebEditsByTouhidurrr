// ==UserScript==
// @name            URL-touhidurrr
// @name:en         URL-touhidurrr
// @version         0.0.13
// @description     An URL redirection Manager for touhidurrr
// @description:en  An URL redirection Manager for touhidurrr
// @author          touhidurrr
// @run-at          document-start
// @icon            https://touhidur.xyz/favicon.png
// @namespace       https://github.com/touhidurrr
// @homepageURL     https://touhidur.xyz/
// @supportURL      https://github.com/touhidurrr/WebEditsByTouhidurrr/issues
// @updateURL       https://raw.githubusercontent.com/touhidurrr/WebEditsByTouhidurrr/main/meta/url.meta.js
// @downloadURL     https://raw.githubusercontent.com/touhidurrr/WebEditsByTouhidurrr/main/url.user.js
// @grant           none
// @include         *
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

  else {
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
