// ==UserScript==
// @name            kotha
// @version         0.0.28
// @description     An UserScript that I made for my friend to highlight the name of theperson he likes.
// @author          touhidurrr
// @run-at          document-end
// @icon            https://touhidur.xyz/favicon.png
// @namespace       https://github.com/touhidurrr
// @homepageURL     https://touhidur.xyz/
// @supportURL      https://github.com/touhidurrr/WebEditsByTouhidurrr/issues
// @updateURL       https://raw.githubusercontent.com/touhidurrr/WebEditsByTouhidurrr/main/meta/kotha.meta.js
// @downloadURL     https://raw.githubusercontent.com/touhidurrr/WebEditsByTouhidurrr/main/kotha.user.js
// @grant           none
// @include         *
// ==/UserScript==

(function(){
  for (let node=document.body;node;node=node.nextSibling){
    if (node.nodeType==1) {
      node.innerHTML = node.innerHTML.replace(/kotha/gi, function(s) {
        return '<span style="color:black;background:yellow;">' + s + '</span>';
      });
    }
  }
})();
