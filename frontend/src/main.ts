import './style.css';
import './app.css';
import autoComplete from "@tarekraafat/autocomplete.js";

import {WindowMaximise, WindowMinimise, Quit} from '../wailsjs/runtime/runtime';

let proxyHost = "https://elqueseaerrrsda.zeabur.app/";
let inputSearch = document.getElementById("to-do-input") as HTMLInputElement;
let iframeElement = (document.querySelector("iframe#preview") as HTMLIFrameElement);
let inputAutocomplete = document.getElementById("autoComplete") as HTMLInputElement;
let placeholderIframe = document.getElementById("placeholder-iframe") as HTMLDivElement;

document.getElementById("maximise")!.addEventListener("click", () => {
    WindowMaximise();
});

const autoCompleteJS = new autoComplete({
    placeHolder: "Search for Page...",
    data: {
        src: [
            "Facebook",
            "YouTube",
            "Google",
            "Gmail",
            "Amazon",
            "Noticias",
            "Tiempo",
            "Traductor",
            "Wikipedia",
            "Netflix",
            "WhatsApp",
            "Instagram",
            "Twitter",
            "LinkedIn",
            "Reddit",
            "Ebay",
            "Booking",
            "Airbnb",
            "Pinterest",
            "Apple",
        ]
    },
    resultsList: {
        element: (list:any, data:any) => {
            if (!data.results.length) {
                const message = document.createElement("div");
                message.setAttribute("class", "no_result");
                message.innerHTML = `<span>Found No Results for "${data.query}"</span>`;
                list.prepend(message);
            }
        },
        noResults: true,
    },
    resultItem: {
        highlight: true
    },
    events: {
        input: {
            selection: (event:any) => {
                const selection = event.detail.selection.value;
                autoCompleteJS.input.value = selection;
            }
        }
    }
});

document.getElementById("close")!.addEventListener("click", () => {
    Quit();
});

document.getElementById("minimise")!.addEventListener("click", () => {
    WindowMinimise();
});

iframeElement.src = "";

inputSearch.value = iframeElement.src.slice(proxyHost.length + "?proxy_url=".length);

const siteDictionary = {
    "google": "https://www.google.com",
    "facebook": "https://www.facebook.com",
    "wikipedia": "https://www.wikipedia.org",
    "reddit": "https://www.reddit.com",
    "amazon": "https://www.amazon.com",
    "twitter": "https://www.twitter.com",
    "instagram": "https://www.instagram.com",
    "linkedin": "https://www.linkedin.com",
    "youtube": "https://www.youtube.com"
};

function normalizeURL(url) {
    url = url.toLowerCase();
    if (siteDictionary[url]) {
        return siteDictionary[url];
    }

    if (!url.startsWith("http://") || !url.startsWith("https://")) {
        url = "http://" + url;
    }
    return url;

}

if(iframeElement.src == "") {
    iframeElement.style.display = "none";
}

inputSearch.addEventListener("keyup", (event) => {
    console.log(iframeElement.src);

    if (event.key === "Enter") {
        let searchValue = inputSearch.value;
        if (!searchValue) {
            iframeElement.style.display = "none"
            placeholderIframe.style.display = "grid";
        }
        let normalizedURL = normalizeURL(searchValue);
        iframeElement.src = proxyHost + "?proxy_url=" + encodeURIComponent(normalizedURL);
    }
}
);

inputAutocomplete.addEventListener("keyup", (event) => {
    console.log(iframeElement.src);
    if (event.key === "Enter") {
        placeholderIframe.style.display = "none";
        iframeElement.src = proxyHost + "?proxy_url=" + "https://www.google.com/search?q=" +encodeURIComponent(inputAutocomplete.value);
        inputSearch.value = iframeElement.src.slice(proxyHost.length + "?proxy_url=".length);
    }
}
);

function resizeIframe() {
    if (!iframeElement) {
        return;
    }
    let viewportHeight = window.innerHeight;
    iframeElement.style.height = viewportHeight - 40 + "px";
}

resizeIframe();
window.addEventListener("resize", resizeIframe);



declare global {
    interface Window {
        greet: () => void;  
    }
}
