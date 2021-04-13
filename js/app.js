$(function() {

    let header = $('#header')
    let intro = $('#intro')
    let nav = $('.nav')

    let introH = intro.innerHeight()
    let scrollPos = $(window).scrollTop()

    checkScroll(scrollPos,introH)

    $(window).on('scroll resize ', () => {
        introH = intro.innerHeight()
        scrollPos = $(this).scrollTop()
        checkScroll(scrollPos,introH)
    })

    function checkScroll(scrollPos, introH) {
        if(scrollPos > introH){
            header.addClass('fixed')
        } else{
            header.removeClass('fixed')
        }
    }

    // SLIDER

    let slider = $('#lessonsSlider')

    slider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: false,
        arrows: true,
        dots: true,

    });





    //     Smooth scroll
    $("[data-scroll]").on('click', function(event) {
        event.preventDefault()

        let elementID = $(this).data('scroll')
        let elementOffset = $(elementID).offset().top

        nav.removeClass('active')
        $('.ham').removeClass('active')


        if (elementID === '#features')
            $('html, body').animate({
                scrollTop: elementOffset + 65,
            }, 700)
        else {
            $('html, body').animate({
                scrollTop: elementOffset - 75,
            }, 700)
        }
    })


//    Modal

    const close = $('.js-close-popup')
    const modalOverlay = $('.overlay')
    const popup = $('.js-popup')
    const form = document.getElementById('form')

    function closeModal(close,object) {
        close.click(function (){
            object.removeClass('active')
        })
    }


    function closeModalOverlay(popup,object){
        $(document).mousedown(function (e) {
            if (e.target !== popup[0] && popup.has(e.target).length === 0) {
               object.removeClass('active')
            }
        })
    }

    $('.js-button-popup').click(function (){
        modalOverlay.addClass('active')
    })

    closeModal(close,modalOverlay)

    closeModalOverlay(popup,modalOverlay)

    document.getElementById('sendingButton')
        .addEventListener('click',()=>{
            form.classList.add('_sending')
            setTimeout(()=>{
                form.classList.remove('_sending')
                modalOverlay.removeClass('active')
                alert('Успешно отправлено')
            },2500)
        })

//    BURGER


    const burger = $('.burger')

    burger.on('click', function () {
        nav.toggleClass('active')
        $('.body').toggleClass('scroll-hidden')
        })



})


// Arrow's-up

let userH = $(window).height()
let scrollPos = $(window).scrollTop()
let arrow = $('#arrow')
arrow.on('click', () => {

    $('html, body').animate( {
        scrollTop: 0
    },700)
})

checkScroll(scrollPos, userH)

$(window).on('scroll resize', () => {
    scrollPos = $(this).scrollTop()
    checkScroll(scrollPos, userH)
})

function checkScroll(scrollPos, userH) {
    if(scrollPos > userH) {
        arrow.addClass('active')
    } else{
        arrow.removeClass('active')
    }
}



