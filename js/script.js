'use strict';

// Инициализация слайдера
new Swiper('.image-slider', { // класс объекта, он будет слайдером
	// Стрелки
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
});
