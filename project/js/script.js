
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav-1024');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click',

  function () {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scloll');
  })

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll')

  })
})

// 1_swiper
const swiper1 = new Swiper('.one-swiper', {
  loop: true,
  slidesPerView: "auto",
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});

// 2_swiper
const swiper2 = new Swiper(".two-swiper", {
  slidesPerGroup: 2,
  pagination: {
    el: ".two-swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".two-btn-next",
    prevEl: ".two-btn-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 25,
      slidesPerGroup: 3,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 35,
      slidesPerGroup: 2,
    },
    1447: {
      slidesPerView: 2,
      spaceBetween: 50,
      slidesPerGroup: 2,
    },
    1667: {
      slidesPerView: 3,
      spaceBetween: 20,
      slidesPerGroup: 3,
    },
    1920: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    },
  },
});

// 3_swiper
const swiper3 = new Swiper('.three-swiper', {
  slidesPerView: 3,
  spaceBetween: 50,
  slidesPerGroup: 3,
  navigation: {
    nextEl: ".three-btn-next",
    prevEl: ".three-btn-prev",
  },
  breakpoints: {
    1024: {
      pagination: {
        el: ".swiper-pagination",
        type: 'bullets',
        clickable: true,
      },
      spaceBetween: 20,
    },
    1920: {
      spaceBetween: 50,
    },
  },
  });


// 4_swiper
const swiper4 = new Swiper('.four-swiper', {


  navigation: {
    nextEl: ".four-btn-next",
    prevEl: ".four-btn-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 25,
      slidesPerGroup: 2,
    },
    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1025: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    },
  },
});


/* Поиск */
document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById('open-search-form').addEventListener('click', (e) => {
    document.getElementById('search-form').classList.add('search-form_show')
  })

  document.getElementById('search-form-close').addEventListener('click', (e) => {
    document.getElementById('search-form').classList.remove('search-form_show')
  })

  document.getElementById('search-form').addEventListener('submit', (e) => {
    e.preventDefault()
  })
})

// tabs
let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove('tabs-nav__btn--active') });
    e.currentTarget.classList.add('tabs-nav__btn--active');

    tabsItem.forEach(function (element) { element.classList.remove('tabs-item--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});


// dropdown__simplebar
document.querySelectorAll(".dropdown__simplebar").
  forEach(dropdown => {
    new SimpleBar(dropdown, {
      autoHide: false,
      scrollbarMaxSize: 25,
    });
  })


const btns =
  document.querySelectorAll(".menu__btn");
const dropdowns =
  document.querySelectorAll(".dropdown");
const activeClassdropdowns = "dropdown__active";
const activeClassbtns = "btn__active";

btns.forEach(item => {
  item.addEventListener("click", function () {
    let DropThis =
      this.parentElement.querySelector(".dropdown");
    dropdowns.forEach(el => {
      if (el != DropThis) {
        el.classList.remove(activeClassdropdowns)
      }
    });
    btns.forEach(el => {
      if (el != this) {
        el.classList.remove(activeClassbtns)
      }
    });

    DropThis.classList.toggle(activeClassdropdowns);
    this.classList.toggle(activeClassbtns);
  })
})

/*accordion*/
new Accordion('.accordion-container', {
  openOnInit: [0]
});


/*select*/
const element = document.querySelector('select');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
  shouldSort: false,
  position: 'bottom'
});

const button = document.querySelector('#button');
const tooltip = document.querySelector('#tooltip');


//form
document.addEventListener("DOMContentLoaded", function () {
  const validation = new JustValidate('.form');
  const selector = document.querySelector("input[type='tel']");
  const im = new Inputmask("+7 (999)-999-99-99");
  im.mask(selector);


  validation
    .addField('.name', [{
      rule: 'minLength',
      value: 2,
      errorMessage: "Не достаточное количество символов"
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: "Вы ввели больше чем положено"
    }
    ])

    .addField('.tel', [{
      rule: "function",
      validator: function (name, value) {
        const phone = selector.inputmask.unmaskedvalue();
        return phone.length === 10
      },
      errorMessage: 'Не достаточное количество символов в строке',
    }]);

})

// map
type = "text/javascript"
ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.758468, 37.601088],
    zoom: 15,
    noSuggestPanel: false,
    controls: ['geolocationControl', 'zoomControl']
  }, {
    // Зададим опции для элементов управления.
    geolocationControlFloat: 'right',
    zoomControlSize: 'small'
  });

  myMap.behaviors.disable('scrollZoom')
  // Создание геообъекта с типом точка (метка).
  var myGeoObject = new ymaps.GeoObject({
    geometry: {
      type: "Point", // тип геометрии - точка
      coordinates: [55.758468, 37.601088] // координаты точки
    }
  });

  // Добавим на карту ползунок масштаба и линейку.
  myMap.controls.add('zoomControl', {
    // Отключим отображение масштабного отрезка рядом с линейкой.
    // Подробнее о настройке опций.
    scaleLine: 'false'
  });

  // Вспомогательный класс, который можно использовать
  // вместо GeoObject c типом геометрии «Point» (см. предыдущий пример)
  var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/map_point.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [-3, -42]
  });

  // Отключить
  myMap.controls.remove('searchControl');
  myMap.controls.remove('trafficControl');
  myMap.controls.remove('typeSelector');
  myMap.controls.remove('fullscreenControl');
  myMap.controls.remove('rulerControl');

  // сменить расположение
  myMap.controls.add('zoomControl', {
    float: 'none',
    position: {
      bottom: '40px',
      right: '15px'
    }
  });

  // Размещение геообъекта на карте.
  myMap.geoObjects.add(myPlacemark);
}

//popup

const buttonElem = document.querySelector('.two-swiper-slide--active');
const modalElem = document.querySelector('.modal');

modalElem.style.cssText = `
  display: flex;
  visibility: hidden;
  opacity: 0;
  transition: opacity 300ms ease-in-out;
`;

const closeModal = event => {
  const target = event.target;

  if (target === modalElem || target.closest('.popup__close')) {

    modalElem.style.opacity = 0;

    setTimeout(() => {
      modalElem.style.visibility = 'hidden';
    }, 300)
  }
}

const openModal = () => {
  modalElem.style.visibility = 'visible';
  modalElem.style.opacity = 1;
};

buttonElem.addEventListener('click', openModal);
modalElem.addEventListener('click', closeModal);
