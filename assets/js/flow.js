
var bar = document.querySelector('.top_slide_bar');
var barOpen = 'top_slide_bar_open';

window.addEventListener("scroll", function() {
    var y = this.scrollY;
    var cl = bar.classList;
    if (y > 100 && !cl.contains(barOpen)) {
        cl.add(barOpen);
    } else if (y <= 100 && cl.contains(barOpen)) {
        cl.remove(barOpen);
    }
});
