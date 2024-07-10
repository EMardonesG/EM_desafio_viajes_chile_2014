
$(document).ready(function() {
    $('nav a').on('click', function(e) {
        if (this.hash !== '') {
            e.preventDefault();

            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            },0); 
        }
    });
});


$(document).ready(function(){
    $('[data-bs-toggle="tooltip"]').tooltip({
        placement: 'bottom'
    });
});

$(document).ready(function(){
    $('[data-bs-toggle="tooltip"]').tooltip({
        placement: 'bottom'
    });

   
    $('a.nav-link').on('click', function() {
        $('[data-bs-toggle="tooltip"]').tooltip('hide');
    });
});



$(document).ready(function() {
    $('#help-icon').click(function() {
        $(this).tooltip({
            title: 'This is a help tooltip',
            placement: 'bottom' 
        }).tooltip('toggle');
    });
});



$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('#return-to-top').fadeIn();
        } else {
            $('#return-to-top').fadeOut();
        }
    });

    $('#return-to-top').click(function() {
        $('html, body').animate({scrollTop : 0}, 0);
        return false;
    });
});
