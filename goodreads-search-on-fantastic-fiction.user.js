// ==UserScript==
// @name         goodreads search on fantastic fiction
// @namespace    https://greasyfork.org/en/users/12725-alistair1231
// @version      0.1
// @description  adds button to goodreads for searching on fantastic fiction 
// @author       Alistair1231
// @match        https://www.goodreads.com/book/show/*
// @require https://code.jquery.com/jquery-3.6.0.min.js
// @icon         https://icons.duckduckgo.com/ip2/goodreads.com.ico
// @grant        none
// @license GPL-3.0
// ==/UserScript==

// Inspired by Slengpung (https://greasyfork.org/en/users/78880) "Goodreads Plus" script

function createEntry(text,link){
    var button = document.createElement("li");
    button.innerHTML = `<a id="ffLink" href="${link}" target="_blank" class="buttonBar">${text}</a>`;
    button.className = "Button";
    return button;
}

function getButtonList(){
    var buttonBar = document.getElementById("buyButtonContainer");
    if (buttonBar === null || buttonBar == "null") {
        buttonBar = document.getElementById("asyncBuyButtonContainer");
    }
    return buttonBar.getElementsByTagName("ul");
}

(function() {
    'use strict';
    var title = jQuery('#bookTitle').html().trim();
    var author = jQuery('.authorName span[itemprop="name"]').html();

    var buttonUl = getButtonList();
    var ffButton = createEntry("Search FF", `https://www.fantasticfiction.com/search/?searchfor=book&keywords=${title}+${author}`);
    buttonUl[0].appendChild(ffButton);
})();