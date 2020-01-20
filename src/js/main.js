// (function($){
//   $(function() {
//     $('.hamburger').on('click', function() {
//       $(this).closest('.hamburger').toggleClass('menu_state_open');
//     });
//   });
// })(jQuery);

function ibg() {
  document.querySelectorAll(".ibg").forEach(el => {
    if(el.querySelector('img')) {
      el.style.backgroundImage = 'url('+el.querySelector('img').getAttribute('src')+')';
    }
  });
}
ibg();