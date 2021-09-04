// ==UserScript==
// @name            Relative-touhidurrr
// @version         0.0.7
// @description     A tools to change absolute urls to relative urls during accessing html files from device Storage.
// @author          touhidurrr
// @run-at          document-end
// @icon            https://touhidur.xyz/favicon.png
// @namespace       https://github.com/touhidurrr
// @homepageURL     https://touhidur.xyz/
// @supportURL      https://github.com/touhidurrr/WebEditsByTouhidurrr/issues
// @updateURL       https://raw.githubusercontent.com/touhidurrr/WebEditsByTouhidurrr/main/meta/relative.meta.js
// @downloadURL     https://raw.githubusercontent.com/touhidurrr/WebEditsByTouhidurrr/main/relative.user.js
// @include         file://*
// ==/UserScript==

(function () {
  const path = window.location.href;

  for (let slice of path.split('/')) {
    if (slice.includes('.')) {
      var host = slice;
      break;
    }
  }

  if (!host) {
    console.log('Relative Paths: Error! Host folder cannot be detected!');
    return;
  }

  const rootPath = path.substr(0, path.indexOf(host));
  const sitePath = rootPath + host;

  let filePath = path.slice(path.indexOf(host) + host.length);
  if (filePath.endsWith('/index.html'))
    filePath = filePath.substr(0, filePath.length - 'index.html'.length);

  const hostDepth = filePath.split('/').length;

  let links = document.getElementsByTagName('link');
  for (let link of links) {
    if (link.href.includes('://')) {
      link.href = rootPath + link.href.replace(/^http(s|):\/\//, '');
    }
  }

  let images = document.getElementsByTagName('img');
  for (let img of images) {
    if (img.src.includes('://')) {
      img.src = rootPath + img.src.replace(/^http(s|):\/\//, '');
    }
  }

  let anchors = document.getElementsByTagName('a');
  for (let link of anchors) {
    if (link.hostname == host) {
      if (link.href.endsWith('/')) link.href += 'index.html';

      const linkSlices = link.pathname.split('/');
      const linkDepth = linkSlices.length;

      // Change the links!
      if (hostDepth < linkDepth)
        link.href = link.pathname.slice(filePath.length);
      else link.href = sitePath + link.pathname;

      // Log it!
      console.log('Link changed to => ' + link.href);
    }
  }
})();
