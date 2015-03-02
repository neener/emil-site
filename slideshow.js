$(document).ready(function(){
$('.current').first().addClass('active');
$('.current').hide();    
$('.active').show();

    $('#next').click(function(){

    $('.active').removeClass('active').addClass('oldActive');    
                   if ( $('.oldActive').is(':last-child')) {
        $('.current').first().addClass('active');
        }
        else{
        $('.oldActive').next().addClass('active');
        }
    $('.oldActive').removeClass('oldActive');
    $('.current').fadeOut();
    $('.active').fadeIn();
        
        
    });
    
    $('#prev').click(function(){
    $('.active').removeClass('active').addClass('oldActive');    
           if ( $('.oldActive').is(':first-child')) {
        $('.current').last().addClass('active');
        }
           else{
    $('.oldActive').prev().addClass('active');
           }
    $('.oldActive').removeClass('oldActive');
    $('.current').fadeOut();
    $('.active').fadeIn();
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
