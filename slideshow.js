$(document).ready(function(){

    var $slides = $('.slide');

    $slides.first().addClass('active');

    $('.next').click(function(){
        var position = $slides.index($('.slide.active')[0]);
        if(position < ($slides.length - 1)){
            $('.slide.active').removeClass('active');
            $($slides.get(position + 1)).addClass('active');
        } else{
            $('.slide.active').removeClass('active');
            $($slides.get(0)).addClass('active');
        }
    });
    
    $('.prev').click(function(){
        var position = $slides.index($('.slide.active')[0]);
        if(position > 0){
            $('.slide.active').removeClass('active');
            $($slides.get(position - 1)).addClass('active');
        } else{
            $('.slide.active').removeClass('active');
            $($slides.get(-1)).addClass('active');
        }
    });
      
});


