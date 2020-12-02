'use strict';

// Инициализация слайдера
new Swiper('.image-slider', { // класс объекта, он будет слайдером
	// Стрелки
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	// Навигация
	// Буллеты, текущее положение, прогрессбар
	pagination: {
		el: '.swiper-pagination',
		// Буллеты
		/* clickable: true, // кликаем по точкам и переходим по слайдам
		// Динамически буллеты
		dynamicBullets: true, // изме-е размеров точек
		// Кастомные буллеты
		renderBullet: function (index, className) { // вывод номера или группы слайдов, класс по-умолчанию
			return '<span class="' + className + '">' + (index + 1) + '</span>';
		}, */
		/* Другие варинаты навигации */
		// Фракция - текущая стр. слайдера из общего числа
		type: 'fraction',
		// Кастомный вывод фракции - свой стиль написания
		renderFraction: function (currentClass, totalClass) {
			return 'Фото <span class="' + currentClass + '"></span>' + ' из ' +
				'<span class="' + totalClass + '"></span>';
		},
		// type: 'progressbar'

	},
	scrollbar: {
		el: '.swiper-scrollbar',
		// Возможность перетаскивать скролл
		draggable: true
	},
	// Включение/отключение
	// перетаскивания слайдов на пк
	simulateTouch: true,
	// Чувствительность свайпа
	touchRatio: 1,
	// Угол срабатывания свайпа/перетаскивания
	touchAngle: 45,
	// Курсор перетаскивания
	grabCursor: true,

	// Переключение при клике на слайд
	slideToClickedSlide: true,

	// Навигация по хешу
	hashNavigation: {
		// Отслеживать состояние
		watchState: true, // смена слайдов по стрелкам браузера вверху слева
	},

	// Управление клавиатурой
	keyboard: {
		// Включить/выключить
		enabled: true,
		// Включить/выключить
		// только когда слайдер
		// в пределах вьюпорта
		onlyInViewport: true,
		// Включить/выключить
		// управление клавишами
		// pageUp, pageDown
		pageUpDown: true,
	},

	// Упрвление колесом мыши
	mousewheel: {
		// Чувствительность колеса мыши
		sensitivity: 1,
		// Класс объекта на котором
		// будет срабатывать прокрутка мышью
		eventsTarget: '.image-slider' // если много одинаковых слайдеров, отключ. эту функцию
	},

	// Автовысота, высота слайдера подстраи-я к высоте картинки
	autoHeight: false,

	// Коли-во слайдов для показа
	slidesPerView: 2, // если "auto" - автомати-е коли-во слайдов, не работ., если 2 ряда и >

	// Отключение функционала слайдера
	// если слайдов меньше, чем нужно
	watchOverflow: true,

	// Отступ между слайдами в px
	spaceBetween: 30,

	// Коли-во пролистываемых слайдов
	slidesPerGroup: 1,

	// Активный слайд по центру
	centeredSlides: false,

	// Стартовый слайд
	initialSlide: 0, // начало с 0

	// Мультирядность - коли-во рядов в слайдере
	slidesPerColumn: 1, // отключ. autoHight

	// Бесконечный слайдер: должен быть 1 ряд, откл. скролл,
	loop: true,

	// Длы норм. работы loop коли-во дублирующих слайдов, если slidesPerView: 'auto' ~
	loopedSlides: 2,

});
