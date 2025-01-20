// ==UserScript==
// @name         Remove ads urls
// @description  Remove shopee, lazada urls that causing popup ads
// @author       Tung Do
// @version      0.0.1
// @match        *://*/*
// @grant        none
// @run-at       document-end
// ==/UserScript==
(function() {
    'use strict';
    document.querySelectorAll('a[href*="shopee"], a[href*="lazada"]').forEach(item => item.remove());
})();
