// modal
let modal = document.querySelector('.modal')
let openBtns = document.querySelectorAll('[data-modal]')
let closeBtns = document.querySelectorAll('[data-close]')


openBtns.forEach((btn) => {
    btn.onclick = () => {
        modal.classList.add('show', 'fade')
    }
})

closeBtns.forEach((btn) => {
    btn.onclick = () => {
        modal.classList.remove('show', 'fade')
    }
})

// slider

let slides = document.querySelectorAll('.offer__slide')
let next = document.querySelector('.offer__slider-next')
let prev = document.querySelector('.offer__slider-prev')
let current = document.getElementById('current')
let total = document.getElementById('total')

let slideIndex = 0

function showSlides(n) {

    if (slideIndex > slides.length - 1) {
        slideIndex = 0
    }

    if (slideIndex < 0) {
        slideIndex = slides.length - 1
    }

    slides.forEach(slide => slide.classList.add('hide'))

    let curr = (slideIndex + 1).toString()

    let totl  = (slides.length).toString()
    
    total.innerHTML = totl.padStart(2,0)

    current.innerHTML = curr.padStart(2,0)

    slides[slideIndex].classList.remove('hide')
    slides[slideIndex].classList.add('fade')
}


next.onclick = () => {
    slideIndex += 1

    showSlides()
}
prev.onclick = () => {
    slideIndex -= 1

    showSlides()
}

showSlides()

let title = document.querySelectorAll('.tabheader__item')

let tabsContent = document.querySelectorAll('.tabcontent')

let tabsParent = document.querySelector('.tabheader__item')

let a = 0

function show() {
    tabsContent.forEach(sect => {
        sect.classList.add('hide', 'fade')
    })
    tabsContent[a].classList.remove('hide')
    tabsContent[a].classList.add('show',)
}

show()

title.forEach((item) => {
    item.onclick = () => {
        tabsContent.forEach(sect => {
            sect.classList.add('hide')
        })
        a = item.getAttribute('data-schet')
        title.forEach(el => el.classList.remove('tabheader__item_active'))
        item.classList.add('tabheader__item_active')
        tabsContent[a].classList.remove('hide')
        tabsContent[a].classList.add('show')
    }
})


