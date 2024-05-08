



document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration){
        let obj = document.getElementById(id),
        counter = start,
        rannge = end - start,
        increment = end > start ? 1: -1,
        step = Math.abs(Math.floor(duration/Range)),
        timer = setInterval(() => {
            counter += increment;
            obj.textContent = counter;
            if(counter == end){
                clearInterval(timer);
            }
        }, step);
    }
    counter("count1",0,1278,3000);
    counter("count2",100,5786,4025);
    counter("count3",0,1440,3600);
    counter("count4",0,7110,3000);
});

let navbar = document.querySelectorAll('.nav-link');
let navbarCollaps = document.querySelectorAll('.navbar-collapse .collapse');
navbar.forEach(function(a){
    a.addEventListener("click",function(){
        navbarCollaps.classList.remove("show");
    })
})
