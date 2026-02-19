new Swiper('.slider-1',{
    navigation: {
        nextEl: '.nxt-1',
        prevEl: '.prv-1'
    },

    pagination: {
        el: '.pag-1',
        clickable: true,
    },

    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
});

new Swiper('.slider-2',{
    navigation: {
        nextEl: '.nxt-2',
        prevEl: '.prv-2'
    },

    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },

    thumbs: {
        swiper: {
            el: '.thumbs-slider',
            slidesPerView: 4,
            spaceBetween: 10,
        }
    },
});

new Swiper('.slider-3',{
    navigation: {
        nextEl: '.nxt-3',
        prevEl: '.prv-3'
    },

    pagination: {
        el: '.pag-3',
        clickable: true,
    },

    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    
    effect: 'fade',

    fadeEffect: {
        crossFade: true,
    },
});