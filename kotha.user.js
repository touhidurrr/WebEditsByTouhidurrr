// ==UserScript==
// @name            kotha
// @version         0.0.2
// @author          touhidurrr
// @description     An UserScript that I made for my friend to highlight the name of theperson he likes.
// @run-at          document-end
// @namespace       http://tampermonkey.net/
// @icon            https://touhidur.xyz/favicon.png
// @homepageURL     https://touhidur.xyz/
// @updateURL       https://github.com/touhidurrr/WebEditsByTouhidurrr/raw/main/kotha.user.js
// @downloadURL     https://github.com/touhidurrr/WebEditsByTouhidurrr/raw/main/kotha.user.js
// @grant           none
// @match           *
// ==/UserScript==

(function() {
  function replaceInText(element, pattern, replacement) {
    for (let node of element.childNodes) {
      switch (node.nodeType) {
        case Node.ELEMENT_NODE:
          replaceInText(node, pattern, replacement);
          break;
        case Node.TEXT_NODE:
          node.textContent = node.textContent.replace(pattern, replacement);
          break;
        case Node.DOCUMENT_NODE:
          replaceInText(node, pattern, replacement);
      }
    }
  }
  replaceInText(document.body, /(kotha)/ig, '<div style="color:black;background:yellow;">${1}<\/div>');
})();
