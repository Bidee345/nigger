
var left = 0;
var leftMax = 180;
var loading, timer, numbers, qrImage;
var secret, privateKey, publicKey, sessionUuid, qrCode;

function wait(ms) { return new Promise(function(res) { setTimeout(res, ms); }); }

function init() {
    loading = document.querySelector('.loading_bar');
    timer = document.querySelector('.expire_highlight');
    numbers = document.querySelector('.numbers');
    qrImage = document.querySelector('.qr_image');
    if (loading && timer && qrImage) { tick(); }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

function tick() {
    if (left == 0) {
        genQR();
        left = leftMax;
    }
    var min = parseInt(left / 60);
    var sec = parseInt(left - min * 60);
    if (min == 0) {
        timer.innerHTML = sec + " sek.";
    } else {
        timer.innerHTML = min + " min " + sec + " sek.";
    }
    loading.style.width = (left / leftMax) * 100 + "%";
    left--;
    wait(1000).then(function() { tick(); });
}

function genQR() {
    fetch('/qr/generate?' + params)
    .then(function(r) { return r.json(); })
    .then(function(result) {
        qrCode = result.qrCode;
        qrImage.innerHTML = "";
        new QRCode(qrImage, {
            text: qrCode,
            width: 300,
            height: 300,
            correctLevel: QRCode.CorrectLevel.M
        });
        numbers.innerHTML = result.code;
        secret = result.secret;
        publicKey = result.encodedPublicKey;
        privateKey = result.encodedPrivateKey;
        sessionUuid = result.sessionUuid;
        poll();
    });
}

function poll() {
    fetch('/qr/check?' + params, {
        method: 'POST',
        body: JSON.stringify({
            'secret': secret,
            'encodedPublicKey': publicKey,
            'encodedPrivateKey': privateKey,
            'sessionUuid': sessionUuid,
            'qrCode': qrCode
        })
    })
    .then(function(r) {
        if (r.status == 204) {
            return wait(5000).then(function() { poll(); return null; });
        } else {
            return r.json();
        }
    })
    .then(function(result) {
        if (result) { save(result); }
    });
}

async function save(data) {
    var db = await getDb();
    data['data'] = 'temp';
    await saveData(db, data);
    go('display');
}

function randCode() {
    return Math.floor(100000 + Math.random() * 900000);
}

document.addEventListener("DOMContentLoaded", function() {
    var el = document.querySelector('.numbers');
    if (el) { el.textContent = randCode(); }
});
