// ==UserScript==
// @name         Remove ad/link entries from marktplaats
// @namespace    https://greasyfork.org/en/users/12725-alistair1231
// @version      0.2.1
// @description  Remove ad/link entries from marktplaats!
// @author       Alistair1231
// @match        https://www.marktplaats.nl/q/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=marktplaats.nl
// @downloadURL  https://github.com/Auncaughbove17/my-userscripts/raw/main/marktplaats.user.js
// @license GPLv3
// @grant        none
// ==/UserScript==
function removeStuff(){

    // enties with links to websites
    document.querySelectorAll("span.mp-Listing-seller-link").forEach(x => x.parentElement.parentElement.remove())

    // ad entries at bottom
    document.querySelector("div.mp-Listings__admarktTitle + ul").remove();
    // entry heading
    document.querySelector(".mp-adsense-header.mp-text-meta").remove();
    // text beneath ad heading
    document.querySelector("div.mp-Listings__admarktTitle").remove();
}

(function() {
    'use strict';

    setInterval(removeStuff,500);


})();