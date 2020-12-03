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

	// Отключение функционала слайдера, выкл. его
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
	loop: false,

	// Длы норм. работы loop коли-во дублирующих слайдов, если slidesPerView: 'auto' ~
	loopedSlides: 0,

	// Свободный режим - быстрое листание как ленту
	freeMode: true,

	// Автопрокрутка
	// autoplay: {
	// 	// Пауза между прокруткой
	// 	delay: 1000,
	// 	// Закончить на последнем слайде
	// 	stopOnLastSlide: true,
	// 	// Отключить после ручного переключения (перетащили слайд), прокрутка не возобновится: true
	// 	disableOnInteraction: false
	// },

	// Скорость переключения слайдов
	speed: 800,

	// Вертикальный слайдер
	// direction: 'vertical',
	// Горизонтальный слайдер
	direction: 'horizontal',


	// Эффекты переключения слайдов

	// Листание
	effect: 'slide',

	// Смена прозрачности: 1 слайд меняется на другой
	// effect: 'fade',
	// Дополнение к fade
	// fadeEffect: {
	// 	// Параллельная смена прозрачности
	// 	crossFade: true
	// },

	// Переворот
	// effect: 'flip',
	// Дополнение к flip
	// flipEffect: {
	// 	// Тень
	// 	slideShadow: true,
	// 	// Показ только активного слайда
	// 	limitRotation: true
	// },

	// Куб
	// effect: 'cube',
	// Дополнение к cube
	/* 	cubeEffect: {
			// Настройка тени
			slideShadows: true,
			shadow: true,
			shadowOffset: 20,
			shadowScale: 0.94
		}, */

	// Эффект потока
	// effect: 'coverflow',
	// Дополнение к coverflow
	/* 	coverflowEffect: {
			// Угол
			rotate: 20,
			// Наложение
			stretch: 50,
			// Тень
			slideShadows: true,
		}, */

	// Брейк понты - адаптив
	// Ширина экрана mobile first: больше, чем указанное значение
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		480: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		}
	},

	// Соотношение сторон: высота, делённая на ширину
	// breakpoints: {
	// 	'@0.75': {
	// 		slidesPerView: 1,
	// 	},
	// 	'@1.00': {
	// 		slidesPerView: 2,
	// 	},
	// 	'@1.50': {
	// 		slidesPerView: 3,
	// 	}
	// },

	// Отключить предзагрузку всех картинок сразу
	preloadImages: false,
	// Lazy Loading подгрузка картинок
	lazy: {
		// Картинка подгружается на старте переключения слайда
		loadOnTransitionStart: false,
		// Подгрузить предыдущую и следующую картинки, если true пользователь не заметит разницу
		loadPrevNext: false,
	},
	// Слежка за видимыми слайдами, включать когда slidesPerView = 'auto' or > 1
	watchSlidesProgress: true,
	// Добавление класса видимым слайдам
	watchSlidesVisibility: true,

	// Зум картинки - увеличение
	zoom: {
		// Максимальное >
		maxRatio: 5,
		// Минимальное увеличение
		minRatio: 1,
	},

});
