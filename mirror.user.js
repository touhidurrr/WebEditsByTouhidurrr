// ==UserScript==
// @name            mirrorTouhidurrr
// @version         0.0.2
// @description     redirects traffic through mirror.touhidur.xyz
// @author          touhidurrr
// @run-at          document-start
// @icon            https://touhidur.xyz/favicon.png
// @homepageURL     https://touhidur.xyz/
// @grant           none
// @include         https://*
// ==/UserScript==

(function () {
  let mirror = 'https://mirror.touhidur.xyz/';

  let includeList = [
    'a-t.nu',
    'lightnovelstranslations.com',
    'graverobbertl.site',
    'rtd.moe',
    'rammer669198693.wordpress.com',
    'hoopla2017.wordpress.com',
    'woopread.com',
  ];

  let urlList = {
    main: [],
    includes: function (url) {
      for (let pattern of this.main) {
        if (url.startsWith(pattern)) return true;
      }
      return false;
    },
  };

  if (window.location.protocol == 'chrome-error:') {
    let title = document.title;

    if (includeList.includes(title)) {
      window.location.replace(mirror + title);
    }
  } else if (
    includeList.includes(window.location.hostname) ||
    urlList.includes(window.location.href)
  ) {
    window.location.replace(
      window.location.href.replace(/^http(s|):\/\//, mirror)
    );
  } else {
    document.addEventListener('DOMContentLoaded', function (e) {
      let links = document.getElementsByTagName('a');

      for (let link of links) {
        if (
          includeList.includes(link.hostname) ||
          urlList.includes(link.href)
        ) {
          link.href = link.href.replace(/^http(s|):\/\//, mirror);
        }
      }
    });
  }
})();
