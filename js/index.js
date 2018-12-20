// smooth scroll
function smoothScroll(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition - 50;
    var startTime = null;

    function animationScroll(currentTime) {
        if(startTime===null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if(timeElapsed < duration) requestAnimationFrame(animationScroll);
        
    }

    function ease(t, b, c, d) {
        t /=d / 2;
        if(t <1) return c/2 * t* t+b;
        t--;
        return -c / 2 * (t*(t-2) -1) + b;
    }

    requestAnimationFrame(animationScroll);
}

var start = document.getElementById('start');
var about = document.getElementById('about');
var myProjects = document.getElementById('my-projects');
var contact = document.getElementById('contact');

start.addEventListener('click', function() {
    smoothScroll('.start', 1500);
});

about.addEventListener('click', function() {
    smoothScroll('.about', 1500);
});

contact.addEventListener('click', function() {
    smoothScroll('.contact', 1500);
});

myProjects.addEventListener('click', function() {
    smoothScroll('.my-projects', 1500);
});





