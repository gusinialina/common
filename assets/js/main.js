$(".menu_img").click(function(){
  $(".abs_black").fadeIn(300);
//  $(".fixed_menu").css("left","0");
$(".fixed_menu").css({
  'left':'0',
  'opacity':'1'
});
})

$(".close, .abs_black").click(function functionName(){
  $(".abs_black").fadeOut(800);
$(".fixed_menu").css({
  'left':'-30%',
  'opacity':'0'
});
})
/*$(".title").click(function(){
  $(".info").slideUp();
  $(this).next().slideDown(300);
})*/

$(".title").click(function(){
  $(".info").removeClass("active");
  $(this).next().addClass("active");
})
$(".title").click(function(){
  $(".menu_img").addClass("rotate1");
})
$(".info").click(function(){
  $(".menu_img").removeClass("rotate1");
})

/*$(window).scroll(function() {
        $('.red_block').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+400) {
                $(this).addClass("opacity","1");
            }
        });
    });*/

  function count(element,class1,offst) {
    $(window).scroll(function() {
            $(element).each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+offst) {
                    $(this).addClass(class1);
                }
            });
        });
}
count('.red_block', 'rotate1', 300);
