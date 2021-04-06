// Your code goes here
// EXAMPLES OF THINGS YOU CAN USE:
// * `mouseover`✅
// * `mouseout`✅
// * `keydown` ✅
// * `keypress` ✅
// * `contextmenu`/ right click✅
// * `copy`✅
// * `cut` ✅
// * `resize`
// * `scroll` ✅
// * `select`
// * 'click' ✅👀
// * `dblclick` ✅👀
// * `drag / drop`
console.log('this is a test');
// Your code goes here

//#1 -- SCROLL EVENT --
    window.addEventListener('scroll', () =>{
        // console.log('scrolled!'); // shows that you have scrolled in the console
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;
        // console.log(scroll); // shows how much user scrolled continuously 
        // console.log(scroll-able); // will show total at the end of the scroll
        if (Math.ceil(scrolled) === scrollable) {
            alert(`You have reached the bottom of page!`);
            // pops up window with a string
        };
    });

//#2 -- MOUSEOVER EVENT --
const logoHead = document.querySelector('.logo-heading');

logoHead.addEventListener('mouseover', function(){
    logoHead.style.color = "aqua";
}); // when mouse is over the .logo-heading it will turn aqua

//#3 -- MOUSEOUT EVENT --
logoHead.addEventListener('mouseout', function(){
    logoHead.style.color = 'black';
});// when mouse is not on .logo-heading it will turn black/ its original color

//#4 -- CLICK EVENT--
const img = document.querySelector('.intro img');
// var imgs = new Image(); -- did not work
img.addEventListener('click', function(){
    imgs.src = 'img/busstop.jpeg';
}); // when you click once, the image will change however i cant seem to reach the img folder

//#5 -- DOUBLE CLICK EVENT --
img.addEventListener('dblclick', function(){
    img.src = "img/fun-bus.jpg";
});

//#6 -- CONTEXT MENU --
window.addEventListener("contextmenu", function() {
    alert("You have Right-Clicked the body");
  }); // when you right click it will pop up the alert

//#7 -- KEYDOWN AND absolute NAVIGATION POSITION --
    const body = document.querySelector('body');
    const nav = document.querySelector('.main-navigation');

    body.addEventListener('keydown', function(){
        nav.style.position = 'absolute';
    });
//#8 -- KEYPRESS fixed nav bar at top of page when up key pressed--
    body.addEventListener('keypress', function (){
        nav.style.position = 'fixed';
    });

//#9 --- command 'COPY', alerts string
body.addEventListener('copy', function(x) {
    alert(`Hi, you are trying to copy!`);
  });
//#10 --- Cut, or command x, alerts with string ---
body.addEventListener('cut', function(){
    alert(`Are you sure you would like to cut this content`);
});
//#10 --- paste, or command p, alerts with string ---   
    body.addEventListener('paste', function(){
        alert(`Why are you trying to paste something on a website? Maybe using command+c to copy a highlighted item will help`);
    });