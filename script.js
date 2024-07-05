'use strict'

const startBtn = document.querySelector('#start-btn');
const container = document.querySelector('#container');
const mainSlide = document.querySelector('#mainSlide');
let activeSlideIndex = 0;
let textNumber = 0;
let index = 0;

/**
 * Смещение background
 */
function switchingSlides() {
    animation()
    activeSlideIndex++;
    const height = container.clientHeight;
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height - 3}px)`;
}

/**
 * Функция вызова анимаций
 */
function animation() {
    soundIcoAnimation();
    animationEffects();
}

/**
 * Анимация эффектов перехода блоков с текстом
 */
function slideBoxTexAnimation(elem) {
    const slide = document.querySelectorAll('.slide__text');
    slide.forEach((e) => {
        e.classList.add(elem);
        setTimeout(function () {
            e.classList.remove(elem);
        }, 2000);
    })
}

/**
 * Рандомный выбор индекса эффекта перехода текста
 * @param min
 * @param max
 * @returns {number}
 */
let indexEffects = function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}; /// не участвует в работе скрипта

/**
 * Выборка эффекта из массива
 * @param min
 * @param max
 * @returns {*}
 */
let fixIndex = function (min, max) {
    if (min <= max) index++;
    return min;
}

/**
 * Функция выбора эффекта перехода слайдов поздравления
 */
function animationEffects() {
    let effects = ['animate__flipInX', 'animate__lightSpeedInRight', 'animate__jackInTheBox', 'animate__rotateIn', 'animate__rollIn', 'animate__backInLeft', 'animate__lightSpeedInRight'];
    slideBoxTexAnimation(effects[fixIndex(index, effects.length)]);
}

/**
 * Анимация иконки звука
 */
function soundIcoAnimation() {
    const sound = document.querySelector('.slide9__icon');
    setTimeout(function () {
        sound.classList.add('animate__tada');
        setInterval(function () {
            sound.classList.add('animate__tada');
        }, 1000);
        setInterval(function () {
            sound.classList.remove('animate__tada');
        }, 999);
    }, 117000);
}

/**
 * Время переходов
 */
startBtn.addEventListener('click', (event) => {
    event.target.style.opacity = '0';
    event.target.style.zIndex = '-1';
    // setTimeout(switchingSlides, 1000,);
    setTimeout(function () {
        switchingSlides();
        textAnimation()
    }, 1000);
    // setTimeout(switchingSlides, 20000,);
    setTimeout(function () {
        switchingSlides();
        textAnimation();
    }, 20000);
    // setTimeout(switchingSlides, 35000,);
    setTimeout(function () {
        switchingSlides();
        textAnimation();
    }, 35000);
    // setTimeout(switchingSlides, 51000,);
    setTimeout(function () {
        switchingSlides();
        textAnimation();
    }, 51000);
    // setTimeout(switchingSlides, 66000,);
    setTimeout(function () {
        switchingSlides();
        textAnimation();
    }, 66000);
    // setTimeout(switchingSlides, 86000,);
    setTimeout(function () {
        switchingSlides();
        textAnimation();
    }, 86000);
    // setTimeout(switchingSlides, 101000,);
    setTimeout(function () {
        switchingSlides();
        textAnimation();
    }, 101000);
    // setTimeout(switchingSlides, 107000,);
    setTimeout(function () {
        switchingSlides();
        textAnimation();
    }, 115000);  //// Можно еще половить по времени !!!!
    // setTimeout(switchingSlides, 148000,);
    setTimeout(function () {
        switchingSlides();
        // textAnimation();
    }, 148000);
});

/**
 * Анимация текста (эффект набора)
 */
function textAnimation() {
    textNumber++
    let test = '.test'
    let textBox = document.querySelector(`${test}${textNumber}`),
        text = textBox.innerText,
        newHTML = '';

    for (let i = 0; i < text.length; i++) {

        newHTML += '<span>' + text[i] + '</span>';
    }
    textBox.innerHTML = newHTML;

    let spans = textBox.querySelectorAll('span'),
        count = 0,
        timeout = 0;
    typing_text(spans, count, timeout, text);
}

/**
 * Скорость набора
 * @param spans
 * @param count
 * @param timeout
 * @param text
 */
function typing_text(spans, count = 0, timeout = 0, text) {
    spans[count].classList.add('visible');
    if (spans[count].innerText === ' ' || spans[count].innerHTML === ' ') {
        timeout = Math.floor(Math.random() * Math.floor(500));
        spans[count].classList.add('cursor');
    } else {
        timeout = 32;
    }

    if (count < text.length - 1) {
        setTimeout(() => {
            spans[count].classList.remove('cursor');
            count++;
            typing_text(spans, count, timeout, text);
        }, timeout);
    }
}
