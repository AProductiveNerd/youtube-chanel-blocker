// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?domain=youtube.com
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  const blocked = ["Ali Abdaal",
    "Andrew Dotson",
    "Answer in Progress",
    "AsapSCIENCE",
    "Beluga",
    "Ben Awad",
    "BruhmasterL",
    "CGP Grey",
    "Code Bullet",
    "Dartigan",
    "Doctor A",
    "ElectroBOOM",
    "Extra Credits",
    "Fireship",
    "Glarses",
    "Gloggles",
    "GrandLineReview",
    "James Hoffmann",
    "Jarvis Johnson",
    "Jarvis Johnson! GOLD",
    "Kurzgesagt – In a Nutshell",
    "Linus Tech Tips",
    "Mehditation",
    "Mrwhosetheboss",
    "Nat Baimel",
    "RDCworld1",
    "Rhymestyle",
    "ShortCircuit",
    "Steve Mould",
    "SunlessKhan",
    "TechLinked",
    "Techquickie",
    "Tom Scott",
    "Totally Not Mark",
    "Mark Rober",
    "Stand-up Maths",
    "Veritasium"];

  setInterval(() => {
    console.log("Remove videos ran");
    const redirected_url = "https://www.taskhighlights.com";

    const channel_name = document.getElementById("channel-name").children[0].children[0].children[0].innerText;
    const suggestions = document.getElementsByTagName("ytd-channel-name");

    for (let i = 0; i < blocked.length; i++) {
      const blocked_name = blocked[i];
      for (let i = 0; i < suggestions.length; i++) {
        const suggestion = suggestions[i];

        if (suggestion.channelName?.runs) {
          const suggested_name = suggestion.channelName?.runs[0]?.text;

          if (suggested_name?.toString().toLowerCase() === blocked_name.toLowerCase()) {
            suggestions[i]?.parentElement?.parentElement?.parentElement?.parentElement?.parentElement?.parentElement?.parentElement?.parentElement?.parentComponent?.remove();
          }
        }
      }
      if (channel_name.toString().toLowerCase() === blocked_name.toLowerCase()) {
        window.location.href = redirected_url;
      }


    }
  }, 3000);

})();
