const homeBtn = document.getElementById('home-btn')
const workBtn = document.getElementById('work-btn')
const contactBtn = document.getElementById('contact-btn')

const homeTab = document.getElementById('home-tab')
const workTab = document.getElementById('work-tab')
const contactTab = document.getElementById('contact-tab')


homeBtn.addEventListener('click', () => {
    clearAll()
    homeBtn.classList.add('active')
    homeTab.classList.add('active')
})

workBtn.addEventListener('click', () => {
    clearAll()
    workBtn.classList.add('active')
    workTab.classList.add('active')
})

contactBtn.addEventListener('click', () => {
    clearAll()
    contactBtn.classList.add('active')
    contactTab.classList.add('active')
})


function clearAll () {
    homeTab.classList.remove('active')
    workTab.classList.remove('active')
    contactTab.classList.remove('active')
    homeBtn.classList.remove('active')
    workBtn.classList.remove('active')
    contactBtn.classList.remove('active')
}
