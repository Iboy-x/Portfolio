const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
})

const hiddenElements =  document.querySelectorAll('.hidn');
hiddenElements.forEach((el) => observer.observe(el));

var cursor = document.querySelectorAll('.cursor');
var cursor2 = document.querySelectorAll('.cursor2');

document.addEventListener('mousemove', function(e) {
    cursor.forEach((cur) => {
        cur.style.left = e.clientX + "px";
        cur.style.top = e.clientY + "px";
    });
    
    cursor2.forEach((cur) => {
        cur.style.left = e.clientX + "px";
        cur.style.top = e.clientY + "px";
    });
});
