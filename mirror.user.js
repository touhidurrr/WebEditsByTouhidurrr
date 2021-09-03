// ==UserScript==
// @name            mirrorTouhidurrr
// @version         0.0.3
// @description     redirects traffic through mirror.touhidur.xyz
// @author          touhidurrr
// @run-at          document-start
// @icon            https://touhidur.xyz/favicon.png
// @homepageURL     https://touhidur.xyz/
// @grant           none
// @include         http*
// ==/UserScript==

(function () {
  let includeList = {
    main: [
      'a-t.nu',
      'lightnovelstranslations.com',
      'graverobbertl.site',
      'rammer669198693.wordpress.com',
      'woopread.com',
    ],

    includes(host) {
      for (let entry of this.main) {
        if (host.endsWith(entry)) return true;
      }
      return false;
    },
  };

  if (includeList.includes(window.location.hostname)) {
    window.location.replace(
      window.location.href.replace(/^http(s|):\/\//, mirror)
    );
    return;
  }

  document.addEventListener('DOMContentLoaded', () => {
    let links = document.getElementsByTagName('a');
    for (let link of links) {
      if (includeList.includes(link.host)) {
        link.href = link.href.replace(/^http(s|):\/\//, mirror);
      }
    }
  });
})();
