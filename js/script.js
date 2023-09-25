// this is the jquery for the preloader
$(document).ready(function(){
    $(".preloader").fadeOut();
})

// this code is for the hover to show dropdown menu 
$(document).ready(function() {
    $('.dropdown').hover(function() {
        $(this).addClass('show');
        $(this).find('.dropdown-menu').addClass('show');
    }, function() {
        $(this).removeClass('show');
        $(this).find('.dropdown-menu').removeClass('show');
    });
});

// this code is for the navigation bar for the fixex when scrolled
const navEl = document.querySelector('.navbar');

window.addEventListener('scroll',() =>{
    if(window.scrollY >= 56){
        navEl.classList.add('navbar-scrolled');
    }else{
        navEl.classList.remove('navbar-scrolled');
    }
})

// this code is for the time of carousel
$('.carousel').carousel({
    interval: 1000
})

const the_animation = document.querySelectorAll('.animation')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation')
        }
            else {
                entry.target.classList.remove('scroll-animation')
            }
        
    })
},
   { threshold: 0.5
   });
//
  for (let i = 0; i < the_animation.length; i++) {
   const elements = the_animation[i];

    observer.observe(elements);
  } 


//   this code is for gallery
