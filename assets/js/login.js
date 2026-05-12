
var params = new URLSearchParams(window.location.search);

document.querySelector(".login").addEventListener('click', function() {
    location.href = 'home.html?' + params;
});

var welcome = "Dzień dobry!";
var date = new Date();
if (date.getHours() >= 18) {
    welcome = "Dobry wieczór!";
}
document.querySelector(".welcome").innerHTML = welcome;

var input = document.querySelector(".password_input");
input.addEventListener("keypress", function(event) {
    if (event.key === 'Enter') {
        document.activeElement.blur();
    }
});

var dot = "•";
var original = "";
var eye = document.querySelector(".eye");

function wait(ms) {
    return new Promise(function(resolve) { setTimeout(resolve, ms); });
}

input.addEventListener("input", function() {
    var value = input.value.toString();
    var char = value.substring(value.length - 1);
    if (value.length < original.length) {
        original = original.substring(0, original.length - 1);
    } else {
        original = original + char;
    }

    if (!eye.classList.contains("eye_close")) {
        var dots = "";
        for (var i = 0; i < value.length - 1; i++) {
            dots = dots + dot;
        }
        input.value = dots + char;
        wait(3000).then(function() {
            value = input.value;
            if (value.length != 0) {
                input.value = value.substring(0, value.length - 1) + dot;
            }
        });
    }
});

eye.addEventListener('click', function() {
    if (eye.classList.contains("eye_close")) {
        eye.classList.remove("eye_close");
        var dots = "";
        for (var i = 0; i < input.value.length - 1; i++) {
            dots = dots + dot;
        }
        input.value = dots;
    } else {
        eye.classList.add("eye_close");
        input.value = original;
    }
});
