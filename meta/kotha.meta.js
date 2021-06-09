// ==UserScript==
// @name            kotha
// @version         0.0.24
// @author          touhidurrr
// @description     An UserScript that I made for my friend to highlight the name of theperson he likes.
// @run-at          document-end
// @namespace       http://tampermonkey.net/
// @icon            https://touhidur.xyz/favicon.png
// @homepageURL     https://touhidur.xyz/
// @updateURL       https://raw.githubusercontent.com/touhidurrr/WebEditsByTouhidurrr/main/kotha.user.js
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
