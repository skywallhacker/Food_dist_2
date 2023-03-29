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

    let totl = (slides.length).toString()

    total.innerHTML = totl.padStart(2, 0)

    current.innerHTML = curr.padStart(2, 0)

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

let genBtns = document.querySelectorAll('#gender .calculating__choose-item')
let inputs = document.querySelectorAll('.calculating__choose_medium input')
let actBtns = document.querySelectorAll('.calculating__choose_big .calculating__choose-item')
let resultView = document.querySelector('#result')

let userData = {
    gender: "woman"
}

genBtns.forEach(btn => {
    btn.onclick = () => {
        genBtns.forEach(el => el.classList.remove('calculating__choose-item_active'))

        btn.classList.add('calculating__choose-item_active')

        let gen = btn.getAttribute('data-gen')
        userData.gender = gen

    }
})

inputs.forEach(inp => {
    inp.onkeyup = () => {
        userData[inp.name] = inp.value
    }
})

actBtns.forEach((btn => {
    btn.onclick = () => {
        actBtns.forEach(el => el.classList.remove('calculating__choose-item_active'))

        btn.classList.add('calculating__choose-item_active')

        let act = +btn.getAttribute('data-act')

        inputs.forEach((elem) => {
            if (elem.value === '') {
                elem.classList.add('error', 'eror')
            } else {
                elem.classList.remove('error', 'eror')
            }
        })

        if (userData.gender === 'woman') {
            let BMR = 447.6 + (9.2 * userData.weight) + (3.1 * userData.height) - (4.3 * userData.age)

            resultView.innerHTML = Math.round(BMR * act)
        } else {
            let BMR = 88.36 + (13.4 * userData.weight) + (4.8 * userData.height) - (5.7 * userData.age)

            resultView.innerHTML = Math.round(BMR * act)
        }
    }
}))

let seconds = document.querySelector('#seconds')

let minutes = document.querySelector('#minutes')

let hours = document.querySelector('#hours')

let days = document.querySelector('#days')

let s = +seconds.innerHTML

let m = +minutes.innerHTML

let h = +hours.innerHTML

let d = +days.innerHTML


setInterval(() => {
    s += 1
    seconds.innerHTML = s
    minutes.innerHTML = m
    hours.innerHTML = h
    days.innerHTML = d
    if (s === 60) {
        s = 0
        m += 1
        if (m === 60) {
            m = 0
            h += 1
            if (h === 24) {
                h = 0
                d += 1
            }
        }
    }
}, 1000)

