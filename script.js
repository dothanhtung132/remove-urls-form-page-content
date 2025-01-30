// ==UserScript==
// @name         Remove ads urls
// @description  Remove shopee, lazada urls that causing popup ads
// @author       Tung Do
// @version      0.0.1
// @match        *://*/*
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    document.querySelectorAll('a[href*="shopee"][target="_blank"], a[href*="lazada"][target="_blank"]').forEach(item => item && item.remove());
})();
