// 'use strict'
//
// window.addEventListener('DOMContentLoaded', () => {
//
// //////////////////////// TABS //////////////////////////////////////
//
//     const tabs = document.querySelectorAll('.tabheader__item'),
//         tabsContent = document.querySelectorAll('.tabcontent'),
//         tabsParent = document.querySelector('.tabheader__items');
//
//     function hideTabContent() {
//         tabsContent.forEach(item => {
//             item.classList.add('hide');
//             item.classList.remove('show', 'fade')
//         });
//
//         tabs.forEach(item => {
//             item.classList.remove('tabheader__item_active')
//         });
//     }
//
//     function showTabContent(i = 0) {
//         tabsContent[i].classList.add('show', 'fade');
//         tabsContent[i].classList.remove('hide');
//         tabs[i].classList.add('tabheader__item_active')
//     }
//
//     hideTabContent();
//     showTabContent();
//
//     tabsParent.addEventListener('click', (event) =>{
//         const target = event.target;
//
//         if (target && target.classList.contains('tabheader__item')) {
//             tabs.forEach((item,i) => {
//                 if (target === item) {
//                     hideTabContent();
//                     showTabContent(i);
//                 }
//             })
//         }
//     });
//
// ////////////////////////////// TIMER ////////////////////////////
//
//     const deadLine = '2020-09-21';
//
//     function getDateRemaining(endtime) {
//         const t = Date.parse(endtime) - Date.parse(new Date()),
//             days = Math.floor(t / (1000 * 60 * 60 * 24)),
//             hours = Math.floor((t / (1000 * 60 * 60)) % 24 ),
//             minutes = Math.floor((t / (1000 * 60)) % 60 ),
//             seconds = Math.floor((t / 1000) % 60);
//
//         return {
//             'total': t,
//             'days': days,
//             'hours': hours,
//             'minutes': minutes,
//             'seconds': seconds
//         }
//     }
//
//     function getZero(num) {
//         if (num >= 0 && num < 10) {
//             return `0${num}`;
//         } else {
//             return num;
//         }
//     }
//
//     function setClock(selector, endtime) {
//         const timer = document.querySelector(selector),
//             days = timer.querySelector('#days'),
//             hours = timer.querySelector('#hours'),
//             minutes = timer.querySelector('#minutes'),
//             seconds = timer.querySelector('#seconds'),
//             timeInterval = setInterval(updateClock, 1000);
//
//         updateClock();
//
//         function updateClock() {
//             const t = getDateRemaining(endtime);
//
//             days.innerHTML = getZero(t.days);
//             hours.innerHTML = getZero(t.hours);
//             minutes.innerHTML = getZero(t.minutes);
//             seconds.innerHTML = getZero(t.seconds);
//
//             if (t.total <= 0) {
//                 clearInterval(timeInterval)
//             }
//         }
//     }
//
//     setClock('.timer', deadLine);
//
//
//     //////////////////////////// MODAL ////////////////////////////
//
//     const modalTrigger = document.querySelectorAll('[data-modal]'),
//         modal = document.querySelector('.modal');
//
//     function openModal() {
//         modal.classList.add('show');
//         modal.classList.remove('hide');
//         document.body.style.overflow = 'hidden';
//         // clearInterval(modalTimerId);
//     }
//
//     modalTrigger.forEach(btn => {
//         btn.addEventListener ('click', openModal);
//     });
//
//
//     function closeModal() {
//         modal.classList.add('hide');
//         modal.classList.remove('show');
//         document.body.style.overflow = '';
//     }
//
//
//     modal.addEventListener('click', (e) =>{
//         if (e.target === modal || e.target.getAttribute('data-close') === '') {
//             closeModal()
//         }
//     });
//
//     document.addEventListener('keydown', (e) => {
//         if (e.code === 'Escape' && modal.classList.contains('show')) {
//             closeModal();
//         }
//     });
//
//     // const modalTimerId = setTimeout(openModal, 25000);
//
//     function showModalByScroll() {
//         if ( window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
//             openModal();
//             window.removeEventListener('scroll', showModalByScroll)
//         }
//     }
//
//     window.addEventListener('scroll', showModalByScroll);
//
//
//     ///////////////////// CLASSES FOR CARDS /////////////////////
//
//     class MenuCard {
//         constructor(src, alt, title, descr, price, parentSelector, ...classes) {
//             this.src = src;
//             this.alt = alt;
//             this.title = title;
//             this.descr = descr;
//             this.price = price;
//             this.classes = classes;
//             this.parent = document.querySelector(parentSelector);
//             this.transfer = 27;
//             this.changeToUAH();
//         }
//
//         changeToUAH() {
//             this.price = this.price * this.transfer;
//         }
//
//         render() {
//             const element = document.createElement('div');
//
//             if (this.classes.length === 0) {
//                 this.element = 'menu__item';
//                 element.classList.add(this.element);
//             } else {
//                 this.classes.forEach(className => element.classList.add(className));
//             }
//             element.innerHTML = `
//                 <img src=${this.src} alt=${this.alt}>
//                 <h3 class="menu__item-subtitle">${this.title}</h3>
//                 <div class="menu__item-descr">${this.descr}</div>
//                 <div class="menu__item-divider"></div>
//                 <div class="menu__item-price">
//                   <div class="menu__item-cost">Цена:</div>
//                   <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
//                 </div>
//              `;
//             this.parent.append(element);
//         }
//     }
//
//     new MenuCard(
//         "img/tabs/vegy.jpg",
//         "vegy",
//         'Меню "Фитнес"',
//         'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
//         9,
//         '.menu .container'
//     ).render();
//
//     new MenuCard(
//         "img/tabs/elite.jpg",
//         "elite",
//         'Меню “Премиум”',
//         'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
//         14,
//         '.menu .container'
//     ).render();
//
//     new MenuCard(
//         "img/tabs/post.jpg",
//         "post",
//         'Меню "Постное"',
//         'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
//         21,
//         '.menu .container'
//     ).render();
//
//     ////////////////// FORMS ///////////////////
//
//     const forms = document.querySelectorAll('form');
//
//     const message = {
//         success: 'Спасибо! Мы скоро с вами свяжемся',
//         load: 'img/form/spinner.svg',
//         fail: 'Что-то пошло не так'
//     }
//
//     forms.forEach(item =>{
//         bindPostData(item)
//     })
//
//     const postData = async (url, data) =>{
//         const res = await fetch (url, {
//             method: 'POST',
//             headers: {
//                 'Content-type': 'application/json'
//             },
//             body: data
//         })
//         return await res.json()
//     }
//
//     function bindPostData(form) {
//         form.addEventListener('submit', (e) =>{
//             e.preventDefault();
//
//             const statusMessage = document.createElement('img');
//             statusMessage.src = message.load;
//             statusMessage.style.cssText = `
//                 display: block;
//                 margin: 0 auto;
//             `;
//             form.insertAdjacentElement('afterend', statusMessage)
//
//             const formData = new FormData(form);
//
//             const json = JSON.stringify(Object.fromEntries(formData.entries()))
//
//
//             postData('http://localhost:3000/requests', json)
//                 .then(data => {
//                     console.log(data)
//                     showThanksModal(message.success)
//                     statusMessage.remove()
//                 }).catch(() =>{
//                 showThanksModal(message.fail)
//             }).finally(() => {
//                 form.reset();
//             })
//         })
//     }
//
//     function showThanksModal(message) {
//         const prevModalDialog = document.querySelector('.modal__dialog');
//
//         prevModalDialog.classList.add('hide');
//         openModal();
//
//         const thanksModal = document.createElement('div');
//         thanksModal.classList.add('modal__dialog');
//         thanksModal.innerHTML = `
//             <div class="modal__content">
//                 <div class="modal__close" data-close="">×</div>
//                 <div class="modal__title">${message}</div>
//             </div>
//         `;
//
//         document.querySelector('.modal').append(thanksModal)
//         setTimeout(() => {
//             thanksModal.remove();
//             prevModalDialog.classList.add('show');
//             prevModalDialog.classList.remove('hide');
//             closeModal();
//         }, 4000)
//     }
//
//
// });
//


/////////////////////// CALC //////////////////////////

const result = document.querySelector('.calculating__result span');

let sex = 'female', weight, height, age, ratio = 1.375;

function calcTotal () {
    if (!sex || !weight || !height || !age || !ratio) {
        result.textContent = '____';
        return
    }
    if (sex === 'female') {
        result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
    } else {
        result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio)
    }
}
calcTotal();

function getStaticInformation (parentSelector, classActive) {
    const  elements = document.querySelectorAll(`${parentSelector} div`)

    elements.forEach(elem =>{
        elem.addEventListener('click', (e) =>{
            if(e.target.getAttribute('data-ratio')) {
                ratio = +e.target.getAttribute('data-ratio')
            } else {
                sex = e.target.getAttribute('id')
            }

            elements.forEach(elem =>{
                elem.classList.remove(classActive)
            })
            e.target.classList.add(classActive)
            calcTotal();
        })
    })
}

getStaticInformation('#gender', 'calculating__choose-item_active' )
getStaticInformation('.calculating__choose_big', 'calculating__choose-item_active' )

function getDynamicInformation (selector) {
    const input = document.querySelectorAll(selector)

    input.addEventListner('input', () =>{
        switch (input.getAttribute('id')) {
            case 'height':
                height = +input.value;
                break;

            case 'weight':
                weight = +input.value;
                break;

            case 'age':
                age = +input.value;
                break;
        }
        calcTotal()
    })
}

getDynamicInformation('#height');
getDynamicInformation('#weight');
getDynamicInformation('#age');






