
$(document).ready(function(){
  $(".pop").click(function(){
  $(".overlay").animate({"opacity": ".50"},300,"linear");
  $(".lightBox").animate({"opacity": "1.00"},300,"linear");
   $(".overlay , .lightBox").css("display", "block");
      });
	  
 $(".close").click(function(){
	 close_box();
 });

 $(".overlay").click(function(){
	 close_box();
 });
 
 $(document).keyup(function(e) {
    if (e.keyCode == 27) { 
        close_box();
	  }
    });
 
});

function close_box()
{
	$(".overlay ,.lightBox").animate({"opacity": ".0"},300,"linear", function(){
	 $(".overlay , .lightBox").css("display", "none");	
	});
}