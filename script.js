// ==UserScript==
// @name         Remove ads script
// @description  Remove shopee, lazada urls that causing popup ads
// @author       Userscripts
// @version      0.0.1
// @match        *://*/*
// @grant        none
// @inject-into  content
// ==/UserScript==

(function () {
	'use strict';
	// here is your code
    document.querySelectorAll('a[href*="shopee"], a[href*="lazada"]').forEach(item => item.remove());
})();
