$(function(){
    $('.header__item-hamburgermenu').on('click', function(event){
        event.preventDefault();
        $('.menu__select').toggleClass('active');
    });
});
