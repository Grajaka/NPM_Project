$("a").on("click", function(){
  $("a").removeClass("active");
  $(this).addClass("active");

});

$("a").on("mouseleave",function() {
  $("a").removeClass("mouse");
 });
 $("a").on("mouseenter",function() {
  $(this).addClass("mouse");
});
