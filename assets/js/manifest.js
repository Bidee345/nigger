var manifest = {
    "name": "",
    "short_name": "",
    "theme_color": "#111218",
    "background_color": "#111218",
    "display": "standalone"
};

var manifestEl = document.createElement('link');
manifestEl.setAttribute('rel', 'manifest');
manifestEl.setAttribute('href', 'data:application/manifest+json;base64,' + btoa(JSON.stringify(manifest)));
document.head.prepend(manifestEl);
