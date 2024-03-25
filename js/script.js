new fullpage('#fullpage', {
  
  beforeLeave: function(origin, destination, direction, trigger){
    var origin = this;

    //using index
    if(origin.index == 0){
      $(".up").css("display", "block");
    }
},
onLeave: function(origin, destination, direction, trigger){
  var leavingSection = this;

  //after leaving section 2
  if(origin.index == 1 && direction =='up'){
    $(".up").css("display", "none");
  }
}});


//adding the action to the button


$(document).on('click', '.down', function(){
  fullpage_api.moveSectionDown();
});
$(document).on('click', '.up', function(){
  fullpage_api.moveSectionUp();
});



$(document).ready(function(){
  $('body').fullpage({
      easingcss3: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
  });
});



$("document").ready(function () {

  const myCustomSlider = document.querySelectorAll('.swiper-container');
  const mySliderPrev = document.querySelectorAll('.swiper-button-prev');
const mySliderNext = document.querySelectorAll('.swiper-button-next');

for( i=0; i< myCustomSlider.length; i++ ) {
  
  myCustomSlider[i].classList.add('swiper-container-' + i);
  mySliderPrev[i].classList.add('swiper-button-prev-' + i);
  mySliderNext[i].classList.add('swiper-button-next-' + i);
  
  var swiper = new Swiper(".swiper-container-" + i, {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    speed: 1000,
    keyboard: {
      enabled: true,
    },
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 0,
      modifier: 2,
      slideShadows: false
    },
    spaceBetween: 0,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next-" +i,
      prevEl: ".swiper-button-prev-" +i
  },
  breakpoints: {
    640: {
        spaceBetween: 0
    },
  }
});
}});





const element1 = document.querySelector('.left .load-logo')
const element01 = document.querySelector('.right .load-logo')
const element2 = document.querySelector('#load-subtitle')
const element3 = document.querySelector('.left')
const element4 = document.querySelector('.right')

const element5 = document.querySelector('.loading')
const element55 = document.querySelector('.container')
const element66 = document.querySelector('.section')
const element666 = document.querySelector('.cky-consent-bar')
const element7 = document.querySelector('header')
const element8 = document.querySelector('.reset')
 var tl1 = gsap.timeline();
 tl1.startTime(1);
  // tl1.fromTo(".loading-logo", {opacity:1}, {duration:2, opacity: 0})  
  if (element1) {tl1.fromTo(element1, {opacity:0}, {duration:1, opacity: 1, ease: Power1.easeInOut}, 'some-label1')} 
  if (element01) {tl1.fromTo(element01, {opacity:0}, {duration:1, opacity: 1, ease: Power1.easeInOut}, 'some-label1')} 
  if (element2) {tl1.fromTo(element2, {opacity:0}, {duration:0.7, opacity: 1, ease: Power1.easeInOut} )}  
  if (element3) {tl1.fromTo(element3, {opacity:1}, {duration:1,delay: 2, opacity: 0, y: '-100%', ease: Power3.easeIn}, 'some-label2' )}
  if (element4) {tl1.fromTo(element4, {opacity:1}, {duration:1, delay:2, opacity: 0, y: '100%', ease: Power3.easeIn}, 'some-label2')}
  if (element5) {tl1.to(element5, {display: 'none'})}
  if (element55) {tl1.fromTo(element55, {overflow: 'hidden', height:'100vh'}, {overflow: 'auto', height:'auto'})} 
  if (element66) {tl1.fromTo(element66, {opacity:0, y:100, visibility:'hidden'}, {y: 0, ease:'back', duration:1, opacity: 1,visibility:'visible'})} 
  if (element666) {tl1.fromTo(element666, {opacity:0, y:100, visibility:'hidden'}, {y: 0, ease:'back', duration:1, opacity: 1,visibility:'visible'})} 
  tl1.fromTo(element7, {opacity:0, y: '-10px'}, {duration: 0.5, y: '0', opacity: 1,visibility:'visible'}, 'some-label')
  if (element8) {tl1.fromTo(element8, {opacity:0}, {duration: 0.1, opacity: 1,visibility:'visible'}, 'some-label')}















//////////MENU////////////
var menuToggle = document.getElementById("menuToggle");
var menuBar = gsap.timeline();

menuBar.fromTo('.bar-1', 0.5,{
  fill: 'var(--black)',
}, {
  transformOrigin: '14px 10px',
  transform: 'rotate(315deg)',
  fill: 'var(--white)',
  x:1,
  ease: Power2.easeInOut
},'start')

menuBar.to('.bar-2', 0.5,{
  autoAlpha: 0
}, 'start')

menuBar.fromTo('.bar-3', 0.5,{
  fill: 'var(--black)',
},
  {transformOrigin: '12px 3px',
    transform: 'rotate(45deg)',
    fill: 'var(--white)',
  x:1,
  ease: Power2.easeInOut
}, 'start')

menuBar.reverse();

var viewport = window.innerWidth;
var tablet = 480;
var tl = gsap.timeline({ paused: true});
if (viewport > tablet) {
tl.to('.fullpage-menu', {
  duration:0,
  display: "block",
  ease: 'Expo.easeInOut',
});
tl.from('.menu-bg span', {
  duration:1,
  x:"-100%",
  stagger: 0.1,
  ease: 'Expo.easeInOut'
});
tl.from('.main-menu li ul', {
  duration:1.5,
  y:"120%",
  stagger: 0.3,
  ease: 'Expo.easeInOut'
} , "-=0.9");
}
else if (viewport < tablet) {
tl.to('.fullpage-menu', {
  duration:0,
  display: "block",
  ease: 'Expo.easeInOut',
});
tl.from('.menu-bg span', {
  duration:1,
  x:"-100%",
  stagger: 0.1,
  ease: 'Expo.easeInOut'
});
tl.from('.main-menu li ul', {
  duration:1.5,
  y:"250",
  stagger: 0.3,
  ease: 'Expo.easeInOut'
} , "-=0.9");}



tl.reverse();

menuToggle.addEventListener('click', function(){
  menuBar.reversed(!menuBar.reversed());
  tl.reversed(!tl.reversed());
});


$(document).ready(function() {
  $(".btn-bureau").click(function(){
    $(".bureau-links-details-global").toggleClass("clicked");
  });
});
//////////accordion///////////

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
acc[i].addEventListener("click", function() {

var panel = this.nextElementSibling;
if (panel.style.maxHeight){
  panel.style.maxHeight = null;
} else {
  let active = document.querySelectorAll(".accordion-div .accordion.active");
  for(let j = 0; j < active.length; j++){
    active[j].classList.remove("active");
    active[j].nextElementSibling.style.maxHeight = null;
  }
  this.classList.toggle("active");
  panel.style.maxHeight = panel.scrollHeight + "px";
}
});
}



// dark mode
const toggleTheme = () => {
  const rootElem = document.documentElement
  let dataTheme = rootElem.getAttribute('data-theme'),
  newTheme

  newTheme = (dataTheme === 'light') ? 'dark' : 'light'

  rootElem.setAttribute('data-theme', newTheme)
}
document.querySelector('#toggleD').addEventListener('click', toggleTheme)






//typedjs
// setTimeout(function(){
// 	mainText();
// },8000);

// setTimeout(function(){
// 	mainText2();
// },3000);
// setTimeout(function(){
// 	mainText3();
// },3000);
// setTimeout(function(){
// 	mainText4();
// },100);
// setTimeout(function(){
// 	mainText5();
// },8000);
// function mainText() {
// var typed = new Typed("#typed", {
//   strings: ["Transformation de combles"],
//   cursorChar: '|',
//   typeSpeed: 60,
//   backSpeed: 100,
//   backDelay: 4000,
//   loop: true
// });}

// function mainText2() {
// var typed2 = new Typed("#typed-emploi", {
//   strings: ["Postulation: sélection naturelle"],
//   cursorChar: '|',
//   typeSpeed: 60,
//   backSpeed: 100,
//   backDelay: 4000,
//   loop: true
// });}
// function mainText3() {
//   var typed3 = new Typed("#typed-equipe", {
//     strings: ["Équipe soudée…", "Quoique... :)"],
//     cursorChar: '|',
//     typeSpeed: 60,
//     backSpeed: 100,
//     backDelay: 4000,
//     loop: true
//   });}
//   function mainText4() {
//     var typed4 = new Typed("#typed-chargement", {
//       strings: ["Chargement..."],
//       cursorChar: '|',
//       typeSpeed: 60,
//       backSpeed: 100,
//       backDelay: 100,
//       loop: true
//     });}
//     function mainText5() {
//       var typed5 = new Typed("#typed-project2", {
//         strings: ["Transformation d'autres combles"],
//         cursorChar: '|',
//         typeSpeed: 60,
//         backSpeed: 100,
//         backDelay: 100,
//         loop: true
//       });}

document.querySelectorAll('.typed').forEach(function(el) {
  new Typed(el, {
  stringsElement: el.previousElementSibling,
  loop: true,
  typeSpeed: 50,
  backSpeed: 20,
  backDelay: 1700,
  showCursor: false,
})
});

////////cursor////////

const Util = {
  round: function round(number, r) {
    var r = r ? Math.pow(10, r) : 1e3;
    return Math.round(number * r) / r;
  }
}

class CustomCursor {
  constructor(){
    this.$el = document.getElementById('custom-cursor');
    this.$bg = document.getElementById('custom-cursor-bg');


    this.arrowState = 'left';
    this.showArrow = false;
    this.showhover1 = false;
    this.showhover2 = false;
    this.showhover3 = false;
    this.showhover4 = false;
    this.showhover5 = false;
    this.showhover6 = false;
    this.showhoverright = false;
    this.showhoverleft = false;
    this.position = { c: [0, 0], t: [-100, -100] };
    this.render = this.render.bind(this);
    this.resize = this.resize.bind(this);
    this.mouseHandler = this.mouseHandler.bind(this);

    this.mounted();
  }
  mounted() {
    if (window.innerWidth > 740) {
      window.addEventListener('resize', this.resize);
      this.resize();
      document.addEventListener('mousemove', this.mouseHandler);
      this.render();
      setTimeout(() => {
        this.$el.classList.add('enable-transitions');
      }, 400);
    }
  }
  mouseHandler(e) {
    this.position.t[0] = e.clientX
    this.position.t[1] = e.clientY

    this.$cursorElementArrow = e.target.closest('[data-cursor-arrow]')
    this.$cursorElementhover1 = e.target.closest('[data-cursor-hover1]')
    this.$cursorElementhover2 = e.target.closest('[data-cursor-hover2]')
    this.$cursorElementhover3 = e.target.closest('[data-cursor-hover3]')
    this.$cursorElementhover4 = e.target.closest('[data-cursor-hover4]')
    this.$cursorElementhover5 = e.target.closest('[data-cursor-hover5]')
    this.$cursorElementhover6 = e.target.closest('[data-cursor-hover6]')
    this.$cursorElementhoverright = e.target.closest('[data-cursor-hoverright]')
    this.$cursorElementhoverleft = e.target.closest('[data-cursor-hoverleft]')


    this.update()
  }
 
  update() {
    if (this.$cursorElementArrow) {
      this.arrowState = this.$cursorElementArrow.getAttribute(
        'data-cursor-arrow'
      )
      this.show = true
      this.showArrow = true
      this.showhover1 = false
      this.showhover2 = false
      this.showhover3 = false
      this.showhover4 = false
      this.showhover5 = false
      this.showhover6 = false
      this.showhoverright = false
      this.showhoverleft = false
    } else if (this.$cursorElementhover1) {
      this.arrowState = this.$cursorElementhover1.getAttribute(
        'data-cursor-hover1'
        )
      this.show = true
      this.showArrow = false
      this.showhover1 = true
      this.showhover2 = false
      this.showhover3 = false
      this.showhover4 = false
      this.showhover5 = false
      this.showhover6 = false
      this.showhoverright = false
      this.showhoverleft = false
    } else if (this.$cursorElementhover2) {
      this.arrowState = this.$cursorElementhover2.getAttribute(
        'data-cursor-hover2'
        )
      this.show = true
      this.showArrow = false
      this.showhover1 = false
      this.showhover2 = true
      this.showhover3 = false
      this.showhover4 = false
      this.showhover5 = false
      this.showhover6 = false
      this.showhoverright = false
      this.showhoverleft = false

    }else if (this.$cursorElementhover3) {
      this.arrowState = this.$cursorElementhover3.getAttribute(
        'data-cursor-hover3'
        )
      this.show = true
      this.showArrow = false
      this.showhover1 = false
      this.showhover2 = false
      this.showhover3 = true
      this.showhover4 = false
      this.showhover5 = false
      this.showhover6 = false
      this.showhoverright = false
      this.showhoverleft = false

    } else if (this.$cursorElementhover4) {
      this.arrowState = this.$cursorElementhover4.getAttribute(
        'data-cursor-hover4'
        )
      this.show = true
      this.showArrow = false
      this.showhover1 = false
      this.showhover2 = false
      this.showhover3 = false
      this.showhover4 = true
      this.showhover5 = false
      this.showhover6 = false
      this.showhoverright = false
      this.showhoverleft = false

    }else if (this.$cursorElementhover5) {
      this.arrowState = this.$cursorElementhover5.getAttribute(
        'data-cursor-hover5'
        )
      this.show = true
      this.showArrow = false
      this.showhover1 = false
      this.showhover2 = false
      this.showhover3 = false
      this.showhover4 = false
      this.showhover5 = true
      this.showhover6 = false
      this.showhoverright = false
      this.showhoverleft = false

    }else if (this.$cursorElementhover6) {
      this.arrowState = this.$cursorElementhover6.getAttribute(
        'data-cursor-hover6'
        )
      this.show = true
      this.showArrow = false
      this.showhover1 = false
      this.showhover2 = false
      this.showhover3 = false
      this.showhover4 = false
      this.showhover5 = false
      this.showhover6 = true
      this.showhoverright = false
      this.showhoverleft = false

    }else if (this.$cursorElementhoverright) {
      this.arrowState = this.$cursorElementhoverright.getAttribute(
        'data-cursor-hoverright'
        )
      this.show = true
      this.showArrow = false
      this.showhover1 = false
      this.showhover2 = false
      this.showhover3 = false
      this.showhover4 = false
      this.showhover5 = false
      this.showhover6 = false
      this.showhoverright = true
      this.showhoverleft = false

    }else if (this.$cursorElementhoverleft) {
      this.arrowState = this.$cursorElementhoverleft.getAttribute(
        'data-cursor-hoverleft'
        )
      this.show = true
      this.showArrow = false
      this.showhover1 = false
      this.showhover2 = false
      this.showhover3 = false
      this.showhover4 = false
      this.showhover5 = false
      this.showhover6 = false
      this.showhoverright = false
      this.showhoverleft = true

    }else {
      this.show = false
      this.showArrow = false
      this.showhover1 = false
      this.showhover2 = false
      this.showhover3 = false
      this.showhover4 = false
      this.showhover5 = false
      this.showhover6 = false
      this.showhoverright = false
      this.showhoverleft = false
    }
    this.updateClasses();
  }
  render() {
    this.position.c[0] += (this.position.t[0] - this.position.c[0]) * 0.19
    this.position.c[1] += (this.position.t[1] - this.position.c[1]) * 0.19
    let final = [
      Util.round(this.position.c[0]),
      Util.round(this.position.c[1]),
    ]
    if (final[0] !== this.position.t[0] || final[1] !== this.position.t[1]) {
      this.move(final)
    }
    requestAnimationFrame(this.render)
  }
  resize() {
    this.width = this.$el.clientWidth
    this.height = this.$el.clientHeight
    this.updateClasses();
  }
  move(pos) {
    let x = pos[0] - this.width * 0.1
    let y = pos[1] - this.height * 0.3
    this.$el.style.transform = `translateX(${x}px) translateY(${y}px)`
  }
 
  updateClasses() {
    if(this.show) this.$el.classList.add('show');
    else this.$el.classList.remove('show');

    if(this.showArrow) this.$el.classList.add('show-arrow');
    else this.$el.classList.remove('show-arrow');

    if(this.showhover1) this.$el.classList.add('show-hover1');
    else this.$el.classList.remove('show-hover1');

    if(this.showhover2) this.$el.classList.add('show-hover2');
    else this.$el.classList.remove('show-hover2');

    if(this.showhover3) this.$el.classList.add('show-hover3');
    else this.$el.classList.remove('show-hover3');

    if(this.showhover4) this.$el.classList.add('show-hover4');
    else this.$el.classList.remove('show-hover4');

    if(this.showhover5) this.$el.classList.add('show-hover5');
    else this.$el.classList.remove('show-hover5');

    if(this.showhover6) this.$el.classList.add('show-hover6');
    else this.$el.classList.remove('show-hover6');

    if(this.showhoverright) this.$el.classList.add('show-hoverright');
    else this.$el.classList.remove('show-hoverright');

    if(this.showhoverleft) this.$el.classList.add('show-hoverleft');
    else this.$el.classList.remove('show-hoverleft');
  }
}
new CustomCursor();



















