$(function(){

    $('.card__image-link1').on('click', function(){
        $('.card1').toggleClass('card--active');
    });

    $('.card__image-link2').on('click', function(){
        $('.card2').toggleClass('card--active');
    });
    $('.vcc__right-text1').on('click', function(){
        $('.vcc1').toggleClass('vcc--active');
    });
    $('.vcc__right-text2').on('click', function(){
        $('.vcc2').toggleClass('vcc--active');
    });
    $('.vcc__right-text3').on('click', function(){
        $('.vcc3').toggleClass('vcc--active');
    });
});