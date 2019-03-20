/*Menu Button action*/ 
$('.menu-btn').on('click', function(e) {
  e.preventDefault();
  $('.menu').toggleClass('menu_active');
  $('.content').toggleClass('content_active');
})
/*change title color  
$(function(){
 $('h2').mouseenter(function(){
   $(this).toggleClass('black')
 }) 
 $('h2').mouseleave(function(){
   $(this).toggleClass('white')
 }) 
})
*/