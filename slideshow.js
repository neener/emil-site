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






// $(document).ready(function () {
//     setInterval(getNext, 2000); // milliseconds
//     $('#next').on('click', getNext);
//     $('#prev').on('click', getPrev);
// });

// function getNext() {
//     var $curr = $('#artwork div.current'),
//         $next = ($curr.next().length) ? $curr.next() : $('#artwork div').first();

//     transition($curr, $next);
// }

// function getPrev() {
//     var $curr = $('#artwork div.current'),
//         $next = ($curr.prev().length) ? $curr.prev() : $('#artwork div').last();
//     transition($curr, $next);
// }

// function transition($curr, $next) {
//     clearInterval(interval);

//     $next.css('z-index', 2).fadeIn('slow', function () {
//         $curr.hide().css('z-index', 0);
//         $next.css('z-index', 1);
//     });

// }
