$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list active");
    $("#mainListDiv").fadeIn();

});

let user = document.querySelectorAll('.navlinks li .link')
user.forEach(function(link)
{

    link.addEventListener('click' , function(e) {
        console.log("red");
e.preventDefault();
user.forEach(function(item) {
    item.classList.remove('active');
});

this.classList.add('active');
}
)
}
)

//Slider use 
$(document).ready(function(){
    $('#otherslider').owlCarousel({
    items: 6,
      loop: true,
      margin: 10,
      nav: true,
      dots: false,
      autoplay: false,
      autoplayTimeout: 3000,
      responsive: {
        0: {
          items: 1,
          // rows: 2
        },
        600: {
          items: 1,
          // rows: 2, 
        },
        1000: {
          items: 3,
          // rows: 2,
        }
      }
});
});


///scrolling use work
function animateOnScroll() {
  const animatedElements  = document.querySelectorAll('.fade-left, .fade-right, .zoom-in,.zoom-out ,.fade-in-up, .fade-in-down ,.fade-rotate');
  console.log(animatedElements);
animatedElements.forEach(Element => {
const rect = Element.getBoundingClientRect();
const windowHeight = window.innerHeight || document.documentEelement.clienHeight;

// Check if the element is in the viewport
if(rect.top <= windowHeight && rect.bottom >= 0){
  console.log("Hello")
  Element.classList.add('active');
}
else{
  Element.classList.remove('active');
}
})
  
}
  // Add scroll event listener
  window.addEventListener('scroll' , animateOnScroll);


// Initial check in case elements are in view on load
  animateOnScroll();