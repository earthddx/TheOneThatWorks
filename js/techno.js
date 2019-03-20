window.onload = function() {
     alert( "welcome" );
 }
 
$(document).ready(function(){
 $('#nav1').click(function(){
   $('#i1').html('<img src="t1.jpg"></img>');
   $('#i2').html('<img src="t3.jpg"></img>');
   $('#i3').html('<img src="t4.jpg"></img>');
   $('#i4').html('<img src="t3.jpg"></img>');
 });
 $('#nav2').click(function(){
   $('#i1').html('<img src="t8.png"></img>');
   $('#i2').html('<img src="t3.jpg"></img>');
   $('#i3').html('<img src="t1.jpg"></img>');
   $('#i4').html('<img src="t8.png"></img>');
 });
 $('#nav3').click(function(){
   $('#i1').html('<img src="t1.jpg"></img>');
   $('#i2').html('<img src="t1.jpg"></img>');
   $('#i3').html('<img src="t3.jpg"></img>');
   $('#i4').html('<img src="t3.jpg"></img>');
 });
  $('#nav4').click(function(){
   $('#i1').html('<img src="t8.png"></img>');
   $('#i2').html('<img src="t4.jpg"></img>');
   $('#i3').html('<img src="t4.jpg"></img>');
   $('#i4').html('<img src="t1.jpg"></img>');
 });
 $('#nav5').click(function(){
   $('#i1').html('<img src="t3.jpg"></img>');
   $('#i2').html('<img src="t3.jpg"></img>');
   $('#i3').html('<img src="t3.jpg"></img>');
   $('#i4').html('<img src="t3.jpg"></img>');
 });
 
});