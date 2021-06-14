// ==UserScript==
// @name            Relative-touhidurrr
// @name:en         Relative-touhidurrr
// @version         0.0.2
// @description     A tools to change absolute urls to relative urls during accessing html files from device Storage.
// @description:en  A tools to change absolute urls to relative urls during accessing html files from device Storage.
// @author          touhidurrr
// @run-at          document-end
// @icon            https://touhidur.xyz/favicon.png
// @namespace       https://github.com/touhidurrr
// @homepageURL     https://touhidur.xyz/
// @supportURL      https://github.com/touhidurrr/WebEditsByTouhidurrr/issues
// @updateURL       https://raw.githubusercontent.com/touhidurrr/WebEditsByTouhidurrr/main/meta/relative.meta.js
// @downloadURL     https://raw.githubusercontent.com/touhidurrr/WebEditsByTouhidurrr/main/relative.user.js
// @grant           none
// @include         file://*
// ==/UserScript==

(function () {
  let sitesPath = 'file:///home/pi/sites/';
  let filePath = window.location.href.slice(sitesPath.length);
  let fileSlices = filePath.split('/');
  let host, hostDepth;
  if (fileSlices[0].includes('.')) {
    host = fileSlices[0];
    filePath = filePath.slice(host.length);
    hostDepth = filePath.split('/').length;
  } else {
    host = fileSlices[1];
    filePath = filePath.slice(host.length + fileSlices[0].length + 1);
    hostDepth = filePath.split('/').length;
  }
  let links = document.getElementsByTagName('a');
  for (let link of links) {
    if (link.hostname == host) {
      // Preliminary Calculations
      if (!link.href.endsWith('/')) link.href += '/';
      let split = link.pathname.split('/');
      let linkDepth = split.length;

      // Change the links!
      if (hostDepth < linkDepth)
        link.href = link.pathname.slice(filePath.length - 10) + 'index.html';
      else link.href = '../'.repeat(hostDepth - linkDepth) + 'index.html';

      // Log it!
      console.log('Link changed to => ' + link.href);
    }
  }
})();
