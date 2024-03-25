$(document).ready(function () {


    $('#accordion').accordion({
        active: false,
        collapsible: true
    });


    new WOW().init();

$('.your-class').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});



$('.card-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});


$( function() {
    $( "#accordion" ).accordion({
        heightStyle: "content"
    });
} );

let index = $('#validationCustom04');

    let thankMessage = $('.thank-you-message');
    thankMessage.hide();



function onlyNumbers (input) {

   input.on('keydown', function (e) {
       let number = parseInt(e.key);
       console.log(number)
       if(e.key === "Backspace") {
           return;
       }
     else if (isNaN(number)) {
           alert(`There is an error ${e.key} is not a number`)
           return false;
       }
   })



    $("#submitBtn").click(function (e) {
        e.preventDefault();


        let inputs = $('.needs-validation > div:not(:last-child)');


        for (let i = 0; i < inputs.length; i++) {

            if (!$(inputs[i]).find('input').val().trim()) {
                alert('One of the inputs is empty');
                return false;
            }
        }
        if (input.val().length !== 6) {
            alert(`Index field has to contain 6 characters`);
            return false;
        }

        $(".needs-validation").hide();

        thankMessage.show();
    });


}

onlyNumbers(index);


let cards = $('#cards > div > div img');

cards.each(function (index, item) {


    $(item).on('click', function () {

        let popup = $('.popup-gallery');
        console.log(popup)
        popup.addClass('active');
        $(document).ready(function() {
            $('.popup-gallery').magnificPopup({
                delegate: 'a',
                type: 'image',
                tLoading: 'Loading image #%curr%...',
                mainClass: 'mfp-img-mobile',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0,1] // Will preload 0 - before current, and 1 after the current image
                },
                image: {
                    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                    titleSrc: function(item) {
                        return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
                    }
                }
            });
        });
    })

})


});

