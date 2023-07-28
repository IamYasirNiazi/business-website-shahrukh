// const the_animation = document.querySelectorAll('.animation')

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('scroll-animation')
//         }
//             else {
//                 entry.target.classList.remove('scroll-animation')
//             }
        
//     })
// },
//    { threshold: 0.5
//    });
// //
//   for (let i = 0; i < the_animation.length; i++) {
//    const elements = the_animation[i];

//     observer.observe(elements);
//   } 





const navbar = document.getElementById('navbar');
let prevScrollpos = window.pageYOffset || document.documentElement.scrollTop;

window.onscroll = function() {
  const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;

  if (prevScrollpos > currentScrollPos) {
    // Scrolling upwards
    navbar.classList.add('sticky');
  } else {
    // Scrolling downwards
    navbar.classList.remove('sticky');
  }

  prevScrollpos = currentScrollPos;
};
