$(function() {
  $.scrollify({
	section:".panel",
    sectionName:false,
    interstitialSection:".header,.footer"
  });
});


const faqBoxes = document.querySelectorAll(".faq-box");

faqBoxes.forEach((box) => {
  const question = box.querySelector(".faq-question");
  const arrow = box.querySelector(".arrow");
  const answer = box.querySelector(".faq-answer");

  question.addEventListener("click", () => {
    box.classList.toggle("open");
    arrow.classList.toggle("down");
  });

  answer.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});



const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = ()=>{
  menu.classList.add("active");
  menuBtn.classList.add("hide");
  cancelBtn.classList.add("show");
  body.classList.add("disabledScroll");
}
cancelBtn.onclick = ()=>{
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  body.classList.remove("disabledScroll");
}

window.onscroll = ()=>{
  this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}




$(document).ready(function () {
  screenCheck();

  $('.scroll-control .one').click(function () {
      $.scrollify.move('#frist');
  });
  $('.scroll-control .two').click(function () {
      $.scrollify.move('#second');
  });
  $('.scroll-control .three').click(function () {
      $.scrollify.move('#third');   
  });
  $('.scroll-control .four').click(function () {
    $.scrollify.move('#four');   
  });
  $('.scroll-control .five').click(function () {
    $.scrollify.move('#five');   
  });
});

$(window).on('resize', function () {
  screenCheck();
});

function applyScroll() {
  $.scrollify({
      section: '.scroll',
      sectionName: 'section-name',
      //standardScrollElements: 'section',
      easing: 'easeOutExpo',
      scrollSpeed: 1100,
      offset: 0,
      scrollbars: true,
      setHeights: true,
      overflowScroll: true,
      updateHash: false,
      touchScroll: true,
  });
}

function screenCheck() {
  var deviceAgent = navigator.userAgent.toLowerCase();
  var agentID = deviceAgent.match(/(iphone|ipod|ipad)/);
  if (agentID || $(window).width() <= 1024) {
      // its mobile screen
      $.scrollify.destroy();
      $('section').removeClass('scroll').removeAttr('style');
      $.scrollify.disable();
  } else {
      // its desktop
      $('section').addClass('scroll');
      applyScroll();
      $.scrollify.enable();
  }
}


(function(){
    
  const sliders = [...document.querySelectorAll('.testimony__body')];
  const buttonNext = document.querySelector('#next');
  const buttonBefore = document.querySelector('#before');
  let value;   

  buttonNext.addEventListener('click', ()=>{
      changePosition(1);
  });

  buttonBefore.addEventListener('click', ()=>{
      changePosition(-1);
  });

  const changePosition = (add)=>{
      const currentTestimony = document.querySelector('.testimony__body--show').dataset.id;
      value = Number(currentTestimony);
      value+= add;


      sliders[Number(currentTestimony)-1].classList.remove('testimony__body--show');
      if(value === sliders.length+1 || value === 0){
          value = value === 0 ? sliders.length  : 1;
      }

      sliders[value-1].classList.add('testimony__body--show');

  }
  

})();