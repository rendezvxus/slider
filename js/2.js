new Swiper('.image-slider',{
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    
    mousewheel: {
        sensitivity: 1,
        eventsTarget: ".image-slider",
    },

    thumbs: {
        swiper: {
            el: '.thumbs-slider',
            slidesPerView: 4,
            spaceBetween: 30,
        }
    },
});