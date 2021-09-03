// ==UserScript==
// @name            URL-touhidurrr
// @name:en         URL-touhidurrr
// @version         0.0.19
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
// @include         http*
// ==/UserScript==

(function () {
  let excludeList = {
    main: ['ac.bd', 'gov.bd', 'teletalk.com.bd', 'touhidur', 'localhost'],

    includes(host) {
      for (let entry of this.main) {
        if (host.endsWith(entry)) return true;
      }
      return false;
    },
  };

  if (window.location.protocol == 'http:') {
    if (!excludeList.includes(window.location.host)) {
      window.location.protocol = 'https:';
    }
    return;
  }

  document.addEventListener('DOMContentLoaded', () => {
    let links = document.getElementsByTagName('a');
    for (let link of links) {
      if (link.protocol == 'http:') {
        if (!excludeList.includes(link.host)) {
          link.protocol = 'https:';
          console.log('Unsafe URL changed to => ' + link.href);
        }
      }
    }
  });
})();
