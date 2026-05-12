var params = new URLSearchParams(window.location.search);
var ROUTES = {
    home: 'home.html',
    services: 'services.html',
    qr: 'qr.html',
    more: 'more.html',
    id: 'id.html',
    scan: 'scan.html',
    show: 'show.html',
    login: 'login.html',
    documents: 'documents.html',
};

function go(key){
    var qs = params.toString();
    var file = ROUTES[String(key)] || (String(key).endsWith('.html') ? String(key) : String(key) + '.html');
    var href = file + (qs ? '?' + qs : '');
    location.href = href;
}

document.querySelectorAll(".bottom_element_grid").forEach(function(el) {
    el.addEventListener('click', function() {
        go(el.getAttribute("send"));
    });
});