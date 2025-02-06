$(function(){

    $('.card__image-link1').on('click', function(){
        $('.card1').toggleClass('card--active');
    });

    $('.card__image-link2').on('click', function(){
        $('.card2').toggleClass('card--active');
    });
});